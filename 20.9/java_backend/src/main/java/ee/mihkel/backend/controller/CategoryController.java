package ee.mihkel.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ee.mihkel.backend.model.Category;
import ee.mihkel.backend.service.CategoryService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService categoryservice;

    @GetMapping("categories")
    public List<Category> getCategories() {

        return categoryservice.getCategories();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category) {
        categoryservice.saveCategory(category);
        return "Kategooria edukalt lisatud!";
    }

    @PostMapping("editcategory/{id}")
    public String editCategory(@PathVariable("id") long id, @RequestBody Category category) {
        categoryservice.editCategory(category, id);
        return "Kategooria edukalt muudetud!";
    }

    @PostMapping("deletecategory/{id}")
    public String deleteCategory(@PathVariable("id") long id) {
        categoryservice.deleteCategory(id);
        return "Kategooria edukalt kustutatud!";
    }

    @GetMapping("category/{id}")
    public Optional<Category> getCategory(@PathVariable("id") long id) {

        return categoryservice.getCategory(id);
    }


}

//delete
//edit
//view one item päring
//kategooriatega sama
//kodutöö githubi, link meiliga õppejõule

