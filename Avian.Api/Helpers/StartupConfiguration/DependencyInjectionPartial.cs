using Avian.Core.BusinessLogic;
using Avian.Core.Contracts.Repositories;
using Avian.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avian.Api.Helpers.StartupConfiguration
{
    public partial class StartupConfiguration
    {
        public static void SetupDependencyInjection(IServiceCollection services)
        {           

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<UserBusiness>();

            services.AddTransient<IProfileRepository, ProfileRepository>();
            services.AddTransient<UserBusiness>();

            services.AddTransient<IProfileUserRepository, ProfileUserRepository>();
            services.AddTransient<UserBusiness>();

            services.AddTransient<IPermissionsRepository, PermissionsRepository>();
            services.AddTransient<UserBusiness>();

            services.AddTransient<IAgencyRepository, AgencyRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IAgencyMigrateRepository, AgencyMigrateRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IEmailRepository, EmailRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IPhoneRepository, PhoneRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IProductWrittenRepository, ProductWrittenRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<ICarrierRepository, CarrierRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IContAutRepository, ContAutRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IOwnerOfficerRepository, OwnerOfficerRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<ICatlogsGetRepository, CatlogsGetRepository>();
            services.AddTransient<CatlogsGetBusiness>();

            services.AddTransient<IStatesGetRepository, StatesGetRepository>();
            services.AddTransient<StatesGetBusiness>();

            services.AddTransient<IDocumentRepository, DocumentRepository>();
            services.AddTransient<DocumentBusiness>();

            services.AddTransient<IEmailStatusRepository, EmailStatusRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<IStatusChangeSetRepository, StatusChangeSetRepository>();
            services.AddTransient<AgencyBusiness>();

            services.AddTransient<ILogsRepository, LogsRepository>();
            services.AddTransient<AgencyBusiness>();


        }
    }
}
