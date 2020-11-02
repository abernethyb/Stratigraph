using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stratigraph.Models;
using Stratigraph.Repositories;

namespace Stratigraph.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StructureController : ControllerBase
    {
        private readonly IStructureRepository _structureRepository;
        private readonly IReportRepository _reportRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public StructureController(IStructureRepository structureRepository,
                                IUserProfileRepository userProfileRepository,
                                IReportRepository reportRepository)
        {
            _structureRepository = structureRepository;
            _userProfileRepository = userProfileRepository;
            _reportRepository = reportRepository;
        }

        [HttpGet("reportStructures/{reportId}")]
        public IActionResult GetAllByReportId(int reportId)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var uprFromDB = _reportRepository.GetUserProfileReportById(reportId, currentUserProfile.Id);
            if (uprFromDB != null)
            {

                return Ok(_structureRepository.GetStructureByReportId(reportId));
            }
            else
            {
                return Unauthorized();
            }

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var structure = _structureRepository.GetStructureById(id);

            var currentUserProfile = GetCurrentUserProfile();

            if (structure != null)
            {
                var upr = _reportRepository.GetUserProfileReportById(structure.ReportId, currentUserProfile.Id);


                if (upr != null)
                {

                    return Ok(structure);

                }
                else
                {
                    return Unauthorized();
                }
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPost]
        public IActionResult Post(Structure structure)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var upr = _reportRepository.GetUserProfileReportById(structure.ReportId, currentUserProfile.Id);

            if (upr != null)
            {

                _structureRepository.Add(structure);
                return CreatedAtAction("Get", new { id = structure.Id }, structure);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Structure structure)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var upr = _reportRepository.GetUserProfileReportById(structure.ReportId, currentUserProfile.Id);

            if (upr != null)
            {

                if (id != structure.Id)
                {
                    return BadRequest();
                }

                _structureRepository.Update(structure);

                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }


            private UserProfile GetCurrentUserProfile()
            {
                var firebaseId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return _userProfileRepository.GetByFirebaseId(firebaseId);
            }
        }
}
