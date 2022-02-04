using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stratigraph.Models;
using Stratigraph.Repositories;

namespace Stratigraph.Controllers
{
    public class FallbackController : ControllerBase
    {
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(),
                "wwwroot", "index.html"), MediaTypeNames.Text.Html);
        }
    }
}
