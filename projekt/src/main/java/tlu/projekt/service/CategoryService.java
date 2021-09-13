package tlu.projekt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tlu.projekt.model.Category;
import tlu.projekt.repository.CategoryRepository;

import java.util.List;

@Service
public class CategoryService {

    @Autowired //Kogu aeg ühendus selle elemendiga
    CategoryRepository categoryrepository;

    public List<Category> getCategories() {
        return categoryrepository.findAll();
    }

    public void saveCategory(Category category) {
        categoryrepository.save(category);
    }

    public void editCategory(Category category, Long id) {
        category.setId(id);
        categoryrepository.save(category);
    }

    public void deleteCategory(Long id) {
        Category category = categoryrepository.getById(id);
        categoryrepository.delete(category);
    }

    public Category getCategory(Long id) {
        Category category = categoryrepository.getById(id);
        return category;
    }
}
