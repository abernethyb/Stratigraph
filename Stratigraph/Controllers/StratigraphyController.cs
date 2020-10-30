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
    public class StratigraphyController : ControllerBase
    {
        private readonly IStratigraphyRepository _stratigraphyRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public StratigraphyController(IStratigraphyRepository stratigraphyRepository,
                                IUserProfileRepository userProfileRepository)
        {
            _stratigraphyRepository = stratigraphyRepository;
            _userProfileRepository = userProfileRepository;
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var currentUserProfile = GetCurrentUserProfile();
            var stratigraphy = _stratigraphyRepository.GetStratigraphyById(id);
            if (stratigraphy.UserProfileId == currentUserProfile.Id) 
            {
                return Ok(stratigraphy);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost]
        public IActionResult Post(Stratigraphy stratigraphy)
        {
            var currentUserProfile = GetCurrentUserProfile();
            stratigraphy.UserProfileId = currentUserProfile.Id;
            _stratigraphyRepository.AddStratigraphyAndAddToSample(stratigraphy);
            return CreatedAtAction("Get", new { id = stratigraphy.Id }, stratigraphy);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Stratigraphy stratigraphy)
        {
            //TO DO: 
            //More auth

            if (id != stratigraphy.Id)
            {
                return BadRequest();
            }

            _stratigraphyRepository.Update(stratigraphy);

            return Ok();
        }



        private UserProfile GetCurrentUserProfile()
        {
            var firebaseId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseId(firebaseId);
        }
    }
}
