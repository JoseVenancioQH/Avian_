using Avian.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avian.Api.Helpers.StartupConfiguration
{
    public partial class StartupConfiguration
    {
        public static void SetupDatabases(IServiceCollection services, IConfiguration Configuration)
        {
            services.AddDbContextPool<AvianBAPContext>(options
                => options.UseSqlServer(Configuration.GetConnectionString("AvianBAPConnectionString")));
            
        }
        
    }
}
