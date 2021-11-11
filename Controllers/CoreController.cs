using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualBasic;
using usmbase.ControllerPublicator;

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
        public IActionResult Post(RequestUsm body)
        {
            switch (body.table)
            {
                case "order":
                {
                    var res=new OrderPublicator().GetData(body.@base, body.where);
                    return Ok(res);
                    break;
                }
                case "pallet":
                {
                    var res=new PalletPublicator().GetData(body.@base, body.where);
                    return Ok(res);
                }
                case "box":
                {
                    var res=new BoxPublicator().GetData(body.@base, body.where);
                    return Ok(res);
                }
                case "block":
                {
                    var res=new BlockPublicator().GetData(body.@base, body.where);
                    return Ok(res);
                    break;
                }
                case "pack":
                {
                    var res=new PackPublicator().GetData(body.@base, body.where);
                    return Ok(res);
                    break;
                }
            }

            return BadRequest(new Exception($"не могу обработать: {body.table}"));
        }
    }

    public class RequestUsm
    {
        public string @base { get; set; }
        public string table { get; set; }
        public string where { get; set; }
   
    }
}

