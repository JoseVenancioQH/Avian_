using System;

namespace Avian.Core.BusinessLogic
{
    public abstract class BaseBusiness
    {
        protected IServiceProvider ServiceProvider;
 

        public BaseBusiness(IServiceProvider ServiceProvider, bool IsNullOrEmpty)
        {
            this.ServiceProvider = ServiceProvider;
        }    

        public T GetService<T>()
        {
            return (T)ServiceProvider.GetService(typeof(T));
        }

        public bool IsNullOrEmpty(Guid? guid)
        {
            return (guid!=null || guid != Guid.Empty);
        }
    }
}
