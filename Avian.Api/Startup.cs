using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avian.Api.Helpers.StartupConfiguration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Http.Features;
using Avian.Api.Helpers;

namespace Avian.Api
{
    public class Startup
    {
        private const string CORS_POLICY_NAME = "AvianV2CorsPolicy";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public IRazorViewToStringRenderer RazorViewToStringRenderer { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            .AddJsonOptions(options => {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();                    
            });
            services.AddTransient<IRazorViewToStringRenderer, RazorViewToStringRenderer>();

            StartupConfiguration.SetupDependencyInjection(services);
            StartupConfiguration.SetupDatabases(services, Configuration);
            StartupConfiguration.SetupCorsPolicy(services, CORS_POLICY_NAME);

            services.Configure<FormOptions>(o => {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;                
            });

            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(CORS_POLICY_NAME);
            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");

                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}/{id?}",
                   defaults: new { Controller = "Users", action = "Authentication" }
                );
                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}/{id?}",
                   defaults: new { Controller = "DocumentUpload", action = "Upload" }
                );
                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}",
                   defaults: new { Controller = "Agency", action = "GetToken" }
                );
                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}",
                   defaults: new { Controller = "Users", action = "Profile" }
                );
                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}",
                   defaults: new { Controller = "Users", action = "Add" }
                );
                routes.MapRoute(
                  name: "api",
                  template: "api/{controller}/{action}",
                  defaults: new { Controller = "Agency", action = "GetStatusEmail" }
               );
               routes.MapRoute(
                  name: "api",
                  template: "api/{controller}/{action}",
                  defaults: new { Controller = "DownloadFile", action = "Download" }
               );
               routes.MapRoute(
                  name: "api",
                  template: "api/{controller}/{action}",
                  defaults: new { Controller = "DownloadFile", action = "FileList" }
               );
               routes.MapRoute(
                  name: "api",
                  template: "api/{controller}/{action}",
                  defaults: new { Controller = "Agency", action = "EmailStatus" }
               );
                routes.MapRoute(
                  name: "api",
                  template: "api/{controller}/{action}",
                  defaults: new { Controller = "Agency", action = "Delete" }
               ); 
                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}",
                   defaults: new { Controller = "Agency", action = "IEnumerableAgency" }
                );
                routes.MapRoute(
                  name: "api",
                  template: "api/{controller}/{action}/{RequestNumber?}",
                  defaults: new { Controller = "Agency", action = "ProgressDocument" }
                );                
            });


        }
    }
}
