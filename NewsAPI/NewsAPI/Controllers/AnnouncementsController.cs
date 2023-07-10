using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewsAPI.Models;
using NewsAPI.Services;

namespace NewsAPI.Controllers
{
    [Route("api/[controller]")]                                                                                                          //[controller] -> ia numele clasei pana la "Controller"
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {
        IAnnouncementCollectionService _announcementCollectionService;

        public AnnouncementsController(IAnnouncementCollectionService announcementCollectionService)
        {
            _announcementCollectionService = announcementCollectionService ?? throw new ArgumentNullException(nameof(AnnouncementCollectionService));
        }


        /// <summary>
        /// returns all announcements
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Announcement> Announcements = await _announcementCollectionService.GetAll();
            return Ok(Announcements);
        }
        /// <summary>
        /// returns every announcement having categoryId
        /// </summary>
        /// <param name="categoryId"></param>
        /// <returns></returns>
        [HttpGet("getByCategoryId/{categoryId}")]
        public async Task<IActionResult> getByCategoryId([FromRoute] string categoryId)
        {
            var result = await _announcementCollectionService.GetAnnouncementsByCategoryId(categoryId);

            return result.Count > 0 ? Ok(result) : NotFound();
        }
        /// <summary>
        /// return an annoucement by its ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("getById/{id}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var result = await _announcementCollectionService.Get(id);

            return Ok(result);
        }

        ///// <summary>
        ///// adds an announcement
        ///// </summary>
        ///// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Announcement announcement)
        {
            var result = await _announcementCollectionService.Create(announcement);

            return StatusCode(result ? 200 : 400);
        }
        ///// <summary>
        ///// updates an announcement
        ///// </summary>
        ///// <param name="announcement"></param>
        ///// <returns></returns>
        [HttpPut("update/{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] Announcement announcement)
        {
            var result = await _announcementCollectionService.Update(id, announcement);

            return result ? StatusCode(200) : NotFound();
        }
        ///// <summary>
        ///// deletes an announcement
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnnouncement([FromRoute] Guid id)
        {
            var result = await _announcementCollectionService.Delete(id);

            return result ? StatusCode(200) : NotFound();
        }



    }
}
