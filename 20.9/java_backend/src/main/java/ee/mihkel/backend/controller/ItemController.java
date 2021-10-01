package ee.mihkel.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ee.mihkel.backend.model.Item;
import ee.mihkel.backend.service.ItemService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemservice;

    @GetMapping("items")
    public List<Item> getItems() {

        return itemservice.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemservice.saveItem(item);
        return "Ese edukalt lisatud ";
    }

    @PostMapping("edititem/{id}")
    public String editItem(@PathVariable("id") long id,@RequestBody Item item) {
        itemservice.editItem(item, id);
        return "Ese edukalt muudetud ";
    }

    @PostMapping("deleteitem/{id}")
    public String deleteItem(@PathVariable("id") long id) {
        itemservice.deleteItem(id);
        return "Ese edukalt kustutatud ";
    }

    @GetMapping("item/{id}")
    public Optional<Item> getItem(@PathVariable("id") long id) {

        return itemservice.getItem(id);
    }


}

//DFELETE
//edit
//view one item päring

// kodutöö github, linkj mwiliga õppejule

//kategoorai