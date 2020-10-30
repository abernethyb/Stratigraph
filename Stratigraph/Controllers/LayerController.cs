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
        public LayerController(ILayerRepository layerRepository,
                                IUserProfileRepository userProfileRepository)
        {
            _layerRepository = layerRepository;
            _userProfileRepository = userProfileRepository;
        }

        ///api/layer/stratigraphyLayers/10
        [HttpGet("stratigraphyLayers/{stratigraphyId}")]
        public IActionResult GetAllByStructureId(int stratigraphyId)
        {


            return Ok(_layerRepository.GetLayerByStratigraphyId(stratigraphyId));

        }

        ///api/layer/88
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {


            return Ok(_layerRepository.GetLayerById(id));

        }

        [HttpPost]
        public IActionResult Post(Layer layer)
        {
            //TO DO:
            //AUTH
            _layerRepository.Add(layer);
            return CreatedAtAction("Get", new { id = layer.Id }, layer);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Layer layer)
        {
            //TO DO: 
            //Auth...

            if (id != layer.Id)
            {
                return BadRequest();
            }

            _layerRepository.Update(layer);

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            //TO DO:
            //AUTH

            _layerRepository.DeleteLayer(id);
                return NoContent();
            

            
        }


        //private UserProfile GetCurrentUserProfile()
        //{
        //    var firebaseId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
        //    return _userProfileRepository.GetByFirebaseId(firebaseId);
        //}
    }
}
