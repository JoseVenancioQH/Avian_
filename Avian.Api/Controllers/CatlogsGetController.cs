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
    public class CatlogsGetController : ControllerBase
    {
        private readonly CatlogsGetBusiness CatlogsGetBusiness;
        public CatlogsGetController(CatlogsGetBusiness CatlogsGetBusiness)
        {
            this.CatlogsGetBusiness = CatlogsGetBusiness;
        }

        // GET: api/CatlogsGet
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(CatlogsGetBusiness.CatlogsGet());
        }

        // GET: api/CatlogsGet/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CatlogsGet
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/CatlogsGet/5
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
