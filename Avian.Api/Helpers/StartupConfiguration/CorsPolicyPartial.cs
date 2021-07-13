using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avian.Api.Helpers.StartupConfiguration
{
    public partial class StartupConfiguration
    {
        public static void SetupCorsPolicy(IServiceCollection services, string corsPolicyName)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(corsPolicyName,
                    builder => builder.WithOrigins( "http://localhost:4200","http://localhost:4202", "http://localhost:4002")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
        }
    }
}
