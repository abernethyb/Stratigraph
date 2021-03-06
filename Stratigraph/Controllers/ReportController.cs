﻿using System;
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
    public class ReportController : ControllerBase
    {
        private readonly IReportRepository _reportRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public ReportController(IReportRepository reportRepository, 
                                IUserProfileRepository userProfileRepository)
        {
            _reportRepository = reportRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile != null)
            {
                int userProfileId = currentUserProfile.Id;

                return Ok(_reportRepository.GetReportsByUserId(userProfileId));
            } else
            {
                return NoContent();
            }
            
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var uprFromDB = _reportRepository.GetUserProfileReportById(id, currentUserProfile.Id);
            if (uprFromDB != null)
            {
                var report = _reportRepository.GetReportsById(id);
            if (report == null)
            {
                return NotFound();
            }
            return Ok(report);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost]
        public IActionResult Post(Report report)
        {
            var currentUserProfile = GetCurrentUserProfile();
            report.CreatingUserProfileId = currentUserProfile.Id;
            _reportRepository.Add(report);
            return CreatedAtAction("Get", new { id = report.Id }, report);
        }

        [HttpPut("complete/{id}")]
        public IActionResult MarkComplete(int id)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var uprFromDB = _reportRepository.GetUserProfileReportById(id, currentUserProfile.Id);
            if (uprFromDB != null)
            {

                _reportRepository.MarkAsComplete(id);

                return Ok();
            }
            else
            {
                return Unauthorized();
            }

        }
        [HttpPut("reopen/{id}")]
        public IActionResult ReOpen(int id)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var uprFromDB = _reportRepository.GetUserProfileReportById(id, currentUserProfile.Id);
            if (uprFromDB != null)
            {

                _reportRepository.ReOpen(id);

                return Ok();
            }
            else
            {
                return Unauthorized();
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Report report)
        {
            var currentUserProfile = GetCurrentUserProfile();
            var uprFromDB = _reportRepository.GetUserProfileReportById(id, currentUserProfile.Id);
            if (uprFromDB != null)
            {
                if (id != report.Id)
                {
                    return BadRequest();
                }

                _reportRepository.Update(report);

                return Ok();
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
