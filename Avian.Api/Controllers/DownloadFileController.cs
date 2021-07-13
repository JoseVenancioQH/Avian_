using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using Avian.Core.DomainModels;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.StaticFiles;


namespace Avian.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DownloadFileController : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;

        public DownloadFileController(IHostingEnvironment environment)
        {
            _hostingEnvironment = environment;
        }
        // GET: api/DownloadFile
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost("FileList")]
        public IActionResult FileList([FromBody] string Id)
        {
            List<ModelDownload> ListFile = new List<ModelDownload>();
            var uploads = Path.Combine(_hostingEnvironment.ContentRootPath, "DocumentGenerate", "Document", Id);
            if (Directory.Exists(uploads))
            {   
                var provider = _hostingEnvironment.ContentRootFileProvider;
                foreach (string fileName in Directory.GetFiles(uploads))
                {
                    var fileInfo = provider.GetFileInfo(fileName);
                    string[] ArrayFileName = fileInfo.Name.ToString().Split('\\');
                    string FileName = ArrayFileName[ArrayFileName.Length - 1].ToString();
                    string FileDisplay = string.Empty;
                    if (FileName.Contains("ElectronicFunds")) { FileDisplay = "Broker Electronic Funds Agreement"; }
                    if (FileName.Contains("ElectronicTransaction")) { FileDisplay = "Electronic Transaction Agreement"; }
                    if (FileName.Contains("BFAgreement")) { FileDisplay = "Finance BF Agreement Avian"; }
                    if (FileName.Contains("BrokerApplication")) { FileDisplay = "Retail Broker Application Master"; }
                    ListFile.Add(new 
                                     ModelDownload 
                                       { 
                                                    Type = "",
                                                    Id= Id,
                                                    Root="",
                                                    File = FileName,
                                                    NameDisplay = FileDisplay
                                      }
                                );
                }
            }
            return Ok(ListFile);
        }

        [HttpPost("Download")]
        public async Task<IActionResult> Download([FromBody] ModelDownload ModelDownload)
        {
            string PathDownload = string.Empty;
            if (ModelDownload.Type.Contains("FileUpload")){ PathDownload = Path.Combine(_hostingEnvironment.ContentRootPath, "Resources", "Document", ModelDownload.Id, ModelDownload.Root); }
            if (ModelDownload.Type.Contains("DocumentGenerate")) { PathDownload = Path.Combine(_hostingEnvironment.ContentRootPath, "DocumentGenerate", "Document", ModelDownload.Id, ModelDownload.Root); }
            var filePath = Path.Combine(PathDownload, ModelDownload.File);
            if (!System.IO.File.Exists(filePath))
                return NotFound();

            var memory = new MemoryStream();
            using (var stream = new FileStream(filePath, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;

            return File(memory, GetContentType(filePath), ModelDownload.File);
        }

        private string GetContentType(string path)
        {
            var provider = new FileExtensionContentTypeProvider();
            string contentType;
            if (!provider.TryGetContentType(path, out contentType))
            {
                contentType = "application/octet-stream";
            }
            return contentType;
        }

        // PUT: api/DownloadFile/5
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
