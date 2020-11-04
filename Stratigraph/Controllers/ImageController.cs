using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp;

namespace Stratigraph.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IWebHostEnvironment _webhost;
        public ImageController(IWebHostEnvironment webhost)
        {
            _webhost = webhost;
        }

        [HttpPost]
        public IActionResult Upload(IFormFile imageUpload)
        {

            var savedImagePath = Path.Combine(_webhost.WebRootPath, "images/");
            try
            {
                using var image = Image.Load(imageUpload.OpenReadStream());

                

                image.Save(savedImagePath + imageUpload.FileName);
            }
            catch
            {
                return Conflict();
            }

            return Ok();
        }

        [HttpGet("{imageUrl}")]
        public IActionResult Get(string imageUrl)
        {
            var path = Path.Combine(_webhost.WebRootPath, "images/", imageUrl);
            try
            {
                var imageFileStream = System.IO.File.OpenRead(path);
                return File(imageFileStream, "image/jpeg");
            }
            catch (Exception ex)
            {
                return NoContent();
            }
            
        }
    }
}
