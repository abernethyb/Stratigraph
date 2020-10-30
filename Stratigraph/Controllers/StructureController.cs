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
        private readonly IUserProfileRepository _userProfileRepository;
        public StructureController(IStructureRepository structureRepository,
                                IUserProfileRepository userProfileRepository)
        {
            _structureRepository = structureRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet("reportStructures/{reportId}")]
        public IActionResult GetAllByReportId(int reportId)
        {


            return Ok(_structureRepository.GetStructureByReportId(reportId));

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {


            return Ok(_structureRepository.GetStructureById(id));

        }

        [HttpPost]
        public IActionResult Post(Structure structure)
        {
            //TO DO: 
            //Auth...via upr
            _structureRepository.Add(structure);
            return CreatedAtAction("Get", new { id = structure.Id }, structure);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Structure structure)
        {
            //TO DO: 
            //Auth...via upr
            
                if (id != structure.Id)
                {
                    return BadRequest();
                }

            _structureRepository.Update(structure);

                return Ok();
        }


        //private UserProfile GetCurrentUserProfile()
        //{
        //    var firebaseId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //    return _userProfileRepository.GetByFirebaseId(firebaseId);
        //}
    }
}
