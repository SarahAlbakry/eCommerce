using Microsoft.AspNetCore.Mvc;

namespace eCommerceShopping.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
