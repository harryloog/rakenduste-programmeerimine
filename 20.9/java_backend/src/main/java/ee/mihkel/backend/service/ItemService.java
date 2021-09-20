package ee.mihkel.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ee.mihkel.backend.model.Item;
import ee.mihkel.backend.repository.ItemRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired //Kogu aeg ühendus selle elemendiga
    ItemRepository itemrepository;

    public List<Item> getItems() {
        return itemrepository.findAll();
    }

    public void saveItem(Item item) {
        itemrepository.save(item);
    }

    public void editItem(Item item, Long id) {
        item.setId(id);
        itemrepository.save(item);
    }

    public void deleteItem(Long id) {
        Item item = itemrepository.getById(id);
        itemrepository.delete(item);
    }

    public Optional<Item> getItem(Long id) { return itemrepository.findById(id); }
}
