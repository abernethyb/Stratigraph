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

        [HttpGet("structureSamples/{structureId}/{reportId}")]
        public IActionResult GetAllByStructureId(int structureId, int reportId)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var samples = _sampleRepository.GetSampleByStructureId(structureId);
            var uprFromDB = _reportRepository.GetUserProfileReportById(reportId, currentUserProfile.Id);
            foreach (Sample sample in samples)
            {
                if (sample.StructureReportId != reportId)
                {
                    return Unauthorized();
                }
            }
            if (uprFromDB != null)
            {
                return Ok(samples);
        }
            else
            {
                return Unauthorized();
    }
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
            var sample = _sampleRepository.GetSampleById(id);
            var currentUserProfile = GetCurrentUserProfile();
            if (sample != null)
            {
                var upr = _reportRepository.GetUserProfileReportById(sample.StructureReportId, currentUserProfile.Id);

            
                if (upr != null)
                {

                    return Ok(sample);

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

            var currentUserProfile = GetCurrentUserProfile();
            var dbSample = _sampleRepository.GetSampleById(id);

            if (dbSample.UserProfileId == currentUserProfile.Id)
            {

            if (id != sample.Id)
            {
                return BadRequest();
            }

            _sampleRepository.Update(sample);

            return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }
        [HttpPut("linkStratigraphy/{sampleId}/{stratigraphyId}")]
        public IActionResult LinkStrat(int sampleId, int stratigraphyId)
        {

            var currentUserProfile = GetCurrentUserProfile();
            var dbSample = _sampleRepository.GetSampleById(sampleId);

            if (dbSample.UserProfileId == currentUserProfile.Id)
            {

                _sampleRepository.LinkStratigraphy(sampleId, stratigraphyId);

                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPut("unlinkStratigraphy/{sampleId}")]
        public IActionResult UnlinkStrat(int sampleId)
        {

            var currentUserProfile = GetCurrentUserProfile();
            var dbSample = _sampleRepository.GetSampleById(sampleId);

            if (dbSample.UserProfileId == currentUserProfile.Id)
            {

                _sampleRepository.UnLinkStratigraphy(sampleId);

                return Ok();
            }
            else
            {
                return Unauthorized();
            }
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
