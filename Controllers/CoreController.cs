using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.VisualBasic;
using Newtonsoft.Json;
using usmbase.ControllerPublicator;
using usmbase.ControllerPublicator.Models;

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

        [HttpPost]//
        public IActionResult Post( [FromBody] string json)
        {
            RequestUsm body = JsonConvert.DeserializeObject<RequestUsm>(json);
            string @base = "suz";
            switch (body.@base)
            {
                case 1:
                {
                    @base = "suz";
                    break;
                }
                case 2:
                {
                    @base = "suz21";
                    break;
                }
                case 3:
                {
                    @base = "suz22";
                    break;
                }
                
            }
            switch (body.table)
            {
                case "order":
                {
                    var res=OrderPublicator.GetDataOrder(body.@base, body.where);
                    return Ok(res);
                    break;
                }
                case "pallet":
                {
                    var res=OrderPublicator.GetDataPallet(body.@base, body.where);
                    return Ok(res);
                }
                case "box":
                {
                    var res= OrderPublicator.GetDataBox(body.@base, body.where);
                    return Ok(res);
                }
                case "block":
                {
                    var res=OrderPublicator.GetDataBlock(body.@base, body.where);
                    return Ok(res);
                    break;
                }
                case "pack":
                {
                    var res=OrderPublicator.GetDataPack(body.@base, body.where);
                    return Ok(res);
                    break;
                }
            }

            return BadRequest(new Exception($"не могу обработать: {body.table}"));
        }
    }

    public class RequestUsm
    {
        public int @base { get; set; }
        public string table { get; set; }
        public string where { get; set; }
   
    }
}

