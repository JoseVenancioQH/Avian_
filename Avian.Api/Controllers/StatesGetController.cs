using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Avian.Core.DomainModelsAvian;
using Avian.Core.BusinessLogic;

namespace Avian.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatesGetController : ControllerBase
    {
        private readonly StatesGetBusiness StatesGetBusiness;
        public StatesGetController(StatesGetBusiness StatesGetBusiness)
        {
            this.StatesGetBusiness = StatesGetBusiness;
        }
        // GET: api/StatesGet
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(StatesGetBusiness.StatesGet());
       }
        

        // POST: api/StatesGet
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/StatesGet/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
