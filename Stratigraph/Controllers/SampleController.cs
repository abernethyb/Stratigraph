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
    public class SampleController : ControllerBase
    {
        private readonly ISampleRepository _sampleRepository;
        private readonly IReportRepository _reportRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public SampleController(ISampleRepository sampleRepository,
                                IUserProfileRepository userProfileRepository,
                                IReportRepository reportRepository)
        {
            _sampleRepository = sampleRepository;
            _userProfileRepository = userProfileRepository;
            _reportRepository = reportRepository;
        }

        [HttpGet("structureSamples/{structureId}")]
        public IActionResult GetAllByStructureId(int structureId)
        {
            //var currentUserProfile = GetCurrentUserProfile();
            //var sample = _sampleRepository.GetSampleByStructureId(structureId);
            //var uprFromDB = _reportRepository.GetUserProfileReportById(???, currentUserProfile.Id);
            //if (uprFromDB != null)
            //{
                return Ok(_sampleRepository.GetSampleByStructureId(structureId));
            //}
            //else
            //{
            //    return Unauthorized();
            //}
        }

        [HttpGet("reportSamples/{reportId}")]
        public IActionResult GetAllByReportId(int reportId)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var uprFromDB = _reportRepository.GetUserProfileReportById(reportId, currentUserProfile.Id);
            if (uprFromDB != null)
            {
                return Ok(_sampleRepository.GetSampleByReportId(reportId));
            }
            else
            {
                return Unauthorized();
            }
        }
        [HttpGet("stratigraphySamples/{stratigraphyId}")]
        public IActionResult GetAllByStratigraphyId(int stratigraphyId)
        {


            return Ok(_sampleRepository.GetSampleByStratigraphyId(stratigraphyId));

        }

        [HttpGet("reportSamples/{reportId}/room/{roomNumber}")]
        public IActionResult SearchByRoomViReportId(int reportId, int roomNumber)
        {


            return Ok(_sampleRepository.SearchSampleByRoomNumberViaReport(reportId, roomNumber));

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {


            return Ok(_sampleRepository.GetSampleById(id));

        }

        [HttpPost]
        public IActionResult Post(Sample sample)
        {
            var currentUserProfile = GetCurrentUserProfile();
            sample.UserProfileId = currentUserProfile.Id;
            _sampleRepository.Add(sample);
            return CreatedAtAction("Get", new { id = sample.Id }, sample);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Sample sample)
        {
            //TO DO: 
            //Auth...

            if (id != sample.Id)
            {
                return BadRequest();
            }

            _sampleRepository.Update(sample);

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var sample = _sampleRepository.GetSampleById(id);

            if (sample.UserProfileId == currentUserProfile.Id)
            {
                _sampleRepository.DeleteSample(id);
                return NoContent();
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
