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
    public class LayerController : ControllerBase
    {
        private readonly ILayerRepository _layerRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IReportRepository _reportRepository;
        private readonly IStratigraphyRepository _stratigraphyRepository;
        public LayerController(ILayerRepository layerRepository,
                                IUserProfileRepository userProfileRepository,
                                IReportRepository reportRepository,
                                IStratigraphyRepository stratigraphyRepository)
        {
            _layerRepository = layerRepository;
            _userProfileRepository = userProfileRepository;
            _reportRepository = reportRepository;
            _stratigraphyRepository = stratigraphyRepository;
        }

        ///api/layer/stratigraphyLayers/10
        [HttpGet("stratigraphyLayers/{stratigraphyId}")]
        public IActionResult GetAllByStructureId(int stratigraphyId)
        {


            return Ok(_layerRepository.GetLayerByStratigraphyId(stratigraphyId));

        }

        ///api/layer/88
        [HttpGet("{id}/{reportId}")]
        public IActionResult Get(int id, int reportId)
        {
            var layer = _layerRepository.GetLayerById(id);
            var currentUserProfile = GetCurrentUserProfile();

            if (layer != null)
            {
                var upr = _reportRepository.GetUserProfileReportById(reportId, currentUserProfile.Id);
                if (upr != null)
                {

                    return Ok(layer);

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
        public IActionResult Post(Layer layer)
        {

            var stratigraphy = _stratigraphyRepository.GetStratigraphyById(layer.StratigraphyId);
            var currentUserProfile = GetCurrentUserProfile();

            if (stratigraphy.UserProfileId == currentUserProfile.Id)
            {
                _layerRepository.Add(layer);
                return CreatedAtAction("Get", new { id = layer.Id }, layer);
            }
            else
            {
                return Unauthorized();
            }


            
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Layer layer)
        {

            var stratigraphy = _stratigraphyRepository.GetStratigraphyById(layer.StratigraphyId);
            var currentUserProfile = GetCurrentUserProfile();

            if (stratigraphy.UserProfileId == currentUserProfile.Id)
            {

                if (id != layer.Id)
                {
                    return BadRequest();
                }

                _layerRepository.Update(layer);

                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpDelete("{id}/{stratigraphyId}")]
        public IActionResult Delete(int id, int stratigraphyId)
        {
            
            var stratigraphy = _stratigraphyRepository.GetStratigraphyById(stratigraphyId);
            var currentUserProfile = GetCurrentUserProfile();

            if (stratigraphy.UserProfileId == currentUserProfile.Id)
            {

                _layerRepository.DeleteLayer(id);
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
