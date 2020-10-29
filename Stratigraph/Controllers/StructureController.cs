using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stratigraph.Repositories;

namespace Stratigraph.Controllers
{
    //[Authorize]
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

        [HttpGet("{reportId}")]
        public IActionResult Get(int reportId)
        {


            return Ok(_structureRepository.GetStructureByReportId(reportId));

        }
    }
}
