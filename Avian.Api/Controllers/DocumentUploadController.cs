using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Avian.Core.DomainModelsAvian;
using Avian.Core.BusinessLogic;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Hosting;

namespace Avian.Api.Controllers
{    
    class DocumentAgency
    {
        public List<string> PCLicense { get; set; }
        public List<string> CurrentEO { get; set; }
        public List<string> W9 { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class DocumentUploadController : ControllerBase
    {
        private readonly DocumentBusiness DocumentBusiness;
        private readonly IHostingEnvironment _env;
        public DocumentUploadController(DocumentBusiness DocumentBusiness, IHostingEnvironment env)
        {
            this.DocumentBusiness = DocumentBusiness;
            _env = env;
        }
        // GET: api/DocumentUpload
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/DocumentUpload/5
        /*[HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }*/

        [HttpPost("Upload/{id}"), DisableRequestSizeLimit]
        public IActionResult Upload(int id)
        {
            int IdDocument = id;
            try
            {
               
                if (!Directory.Exists(Path.Combine(_env.ContentRootPath,"Resources", "Document")))
                {
                    Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, "Resources", "Document"));
                }                     
                
                if (IdDocument == 0 || String.IsNullOrEmpty(IdDocument.ToString()))
                {
                    Abdocument DocumentFetch;
                    Abdocument IDocumentFetch = new Abdocument
                    {
                        DocumentFile = ""
                    };
                    DocumentFetch = DocumentBusiness.FetchDocument(IDocumentFetch);
                    IdDocument = DocumentFetch.DocumentId;
                }

                if (Request.Form.Files.Count() > 0)
                {                               

                    List<string> PCLicenseList = new List<string>();
                    List<string> CurrentEOList = new List<string>();
                    List<string> W9List = new List<string>();                    
                    
                    foreach (IFormFile file in Request.Form.Files)
                    { 
                        if (!Directory.Exists(Path.Combine(_env.ContentRootPath, "Resources", "Document", IdDocument.ToString())))
                        {
                            Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, "Resources", "Document", IdDocument.ToString()));                            
                        }
                        if (!Directory.Exists(Path.Combine(_env.ContentRootPath, "Resources", "Document", IdDocument.ToString(), file.Name)))
                        {
                            Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, "Resources", "Document", IdDocument.ToString(), file.Name));
                        }
                        var folderName = Path.Combine(_env.ContentRootPath, "Resources", "Document", IdDocument.ToString(), file.Name);
                        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                        if (file.Length > 0)
                        {
                            string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                            var fullPath = Path.Combine(pathToSave, fileName);
                            var dbPath = Path.Combine(folderName, fileName);
                                                  
                            using (var stream = new FileStream(fullPath, FileMode.Create))
                            {
                                file.CopyTo(stream);
                            }
                        }                        
                    }                    
                }

                return Ok(
                new
                    {
                        DocumentDirectory = IdDocument
                    }
                );
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error"+ex.Message);
            }
        }        

        // PUT: api/DocumentUpload/5
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
