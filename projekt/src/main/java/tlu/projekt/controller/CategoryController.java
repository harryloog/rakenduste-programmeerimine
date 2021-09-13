package tlu.projekt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tlu.projekt.model.Category;
import tlu.projekt.service.CategoryService;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryservice;
    private Long id;

    @GetMapping("categories")
    public List<Category> getCategories() {

        return categoryservice.getCategories();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category) {
        categoryservice.saveCategory(catgeory);
        return "Kategooria edukalt lisatud!";
    }

    @PostMapping("edit")
    public String editCategory(@RequestBody Category category, Long id) {
        categoryservice.editCategory(category, id);
        return "Kategooria edukalt muudetud!";
    }

    @PostMapping("delete")
    public String deleteCategory(@RequestBody Long id) {
        categoryservice.deleteCategory(id);
        return "Kategooria edukalt kustutatud!";
    }

    @GetMapping("category")
    public Category getCategory(@RequestBody Long id) {

        return categoryservice.getCategory(id);
    }


}

//delete
//edit
//view one item päring
//kategooriatega sama
//kodutöö githubi, link meiliga õppejõule

