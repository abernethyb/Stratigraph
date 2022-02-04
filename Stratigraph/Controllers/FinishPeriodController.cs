using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stratigraph.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FinishPeriodController : ControllerBase
    {
        private readonly IFinishPeriodRepository _finishPeriodRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public FinishPeriodController(IFinishPeriodRepository finishPeriodRepository,
                                IUserProfileRepository userProfileRepository)
        {
            _finishPeriodRepository = finishPeriodRepository;
            _userProfileRepository = userProfileRepository;
        }
    }
}
