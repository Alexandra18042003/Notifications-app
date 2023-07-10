using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewsAPI.Models;

namespace NewsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        static List<Category> _categories = new List<Category> {
            new Category { Id = Guid.NewGuid(), Name="Course"},
            new Category { Id = Guid.NewGuid(), Name="General"},
            new Category { Id = Guid.NewGuid(), Name="Laboratory"}
        };

        /// <summary>
        /// This is a method to get categories list.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get() { return Ok(_categories); }

        [HttpGet("getById/{id}")]
        public IActionResult GetById(Guid id)
        {
            var category = _categories.FirstOrDefault(c => c.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        /// <summary>
        /// This is a method used to delete a category.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var category = _categories.FirstOrDefault(c => c.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            _categories.Remove(category);
            return NoContent();
        }

        /// <summary>
        /// This is a method used to post a category.
        /// </summary>
        /// <param name="category"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Create(Category category)
        {
            category.Id = Guid.NewGuid();
            _categories.Add(category);
            return CreatedAtAction(nameof(GetById), new { id = category.Id }, category);
        }
    }
}
