package tlu.projekt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tlu.projekt.model.Item;
import tlu.projekt.service.ItemService;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemservice;
    private Long id;

    @GetMapping("items")
    public List<Item> getItems() {

        return itemservice.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemservice.saveItem(item);
        return "Ese edukalt lisatud ";
    }

    @PostMapping("edit")
    public String editItem(@RequestBody Item item, Long id) {
        itemservice.editItem(item, id);
        return "Ese edukalt lisatud ";
    }

    @PostMapping("delete")
    public String deleteItem(@RequestBody Long id) {
        itemservice.deleteItem(id);
        return "Ese edukalt lisatud ";
    }

    @GetMapping("item")
    public Item getItem(@RequestBody Long id) {

        return itemservice.getItem(id);
    }


}

    //DFELETE
    //edit
    //view one item päring

    // kodutöö github, linkj mwiliga õppejule

    //kategoorai