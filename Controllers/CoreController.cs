using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace usmbase.Controllers
{
    [ApiController]
    [Route("/api/core")]
    public class CoreController : ControllerBase
    {
       
        private readonly ILogger<CoreController> _logger;

        public CoreController(ILogger<CoreController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public string Post([FromBody] string body)
        {
            return null;
        }
    }
}
