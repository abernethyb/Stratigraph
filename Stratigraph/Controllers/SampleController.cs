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
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        private readonly ISampleRepository _sampleRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public SampleController(ISampleRepository sampleRepository,
                                IUserProfileRepository userProfileRepository)
        {
            _sampleRepository = sampleRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet("structureSamples/{structureId}")]
        public IActionResult GetAllByReportId(int structureId)
        {


            return Ok(_sampleRepository.GetSampleByStructureId(structureId));

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {


            return Ok(_sampleRepository.GetSampleById(id));

        }

        [HttpPost]
        public IActionResult Post(Sample sample)
        {
            //TO DO: 
            //Auth...
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


        private UserProfile GetCurrentUserProfile()
        {
            var firebaseId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseId(firebaseId);
        }
    }
}
