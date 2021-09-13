package tlu.projekt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tlu.projekt.model.Item;
import tlu.projekt.repository.ItemRepository;

import java.util.List;

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

    public Item getItem(Long id) {
        Item item = itemrepository.getById(id);
        return item;
    }
}
