using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Avian.Api.Controllers
{
    public class BaseController : ControllerBase
    {
        private readonly IMemoryCache CacheService;
        protected ILogger Logger;

        #region Constructors

        public BaseController(IMemoryCache CacheService)
        {
            this.CacheService = CacheService;
        }

        public BaseController()
        {
                
        }
        #endregion

        #region Logger

        public void UseLoggerForExceptions<T>(ILogger<T> logger)
        {
            Logger = logger;
        }

        private void LogException(Exception ex)
        {
            if (Logger == null) return;
            Logger.LogError(ex, "Exception catched on BAPV2 Api");
        }

        #endregion

        #region Cache Service

        protected bool CacheExist(string key) => CacheService.Get(key) != null;

        public T CacheGet<T>(string key) => CacheService.Get<T>(key);

        protected T SetCache<T>(string key, T value)
        {
            MemoryCacheEntryOptions cacheEntryOptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromDays(3));
            string json = JsonConvert.SerializeObject(value);
            T finalValue = JsonConvert.DeserializeObject<T>(json);
            CacheService.Set(key, finalValue, cacheEntryOptions);
            return finalValue;
        }

        #endregion

        #region Execute Actions
        
        protected IActionResult Execute<T>(Func<T> action)
        {
            try
            {
                var data = action.Invoke();
                return Ok(data);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, ex.Message);
            }
        }

        protected async Task<IActionResult> ExecuteAsync<T>(Task<T> action)
        {
            try
            {
                var data = await action;
                return Ok(data);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, ex.Message);
            }
        }

        protected async Task<IActionResult> ExecuteAsync(Task action)
        {
            try
            {
                await action;
                return Ok(null);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, ex.Message);
            }
        }

        protected IActionResult Execute(Action action)
        {
            try
            {
                action.Invoke();
                return Ok(null);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, ex.Message);
            }
        }

        protected async Task<IActionResult> ExecuteAsync<T>(Func<Task<T>> action)
        {
            try
            {
                var data = await action.Invoke();
                return Ok(data);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, ex.Message);
            }
        }

        protected async Task<IActionResult> ExecuteAsync<T>(Func<T> action)
        {
            try
            {
                var data = await Task.Factory.StartNew(() => action.Invoke());
                return Ok(data);
            }
            catch (Exception ex)
            {
                LogException(ex);
                return StatusCode(500, ex.Message);
            }
        }

        #endregion

        #region Claims From Identity

        protected string UserId { get => User.Claims.First(a => a.Type == "UserId").Value; }

        protected string UserEmail{ get => User.Identity.Name; }

        #endregion
    }
}
