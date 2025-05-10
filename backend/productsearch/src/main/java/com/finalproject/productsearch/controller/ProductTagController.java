package com.finalproject.productsearch.controller;

import com.finalproject.productsearch.model.ProductTag;
import com.finalproject.productsearch.service.ProductTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tags")
public class ProductTagController {

    @Autowired
    private ProductTagService tagService;

    @PostMapping
    public ProductTag saveTag(@RequestBody ProductTag tag) {
        return tagService.saveTag(tag);
    }

    @GetMapping("/product/{productId}")
    public List<ProductTag> getTagsByProductId(@PathVariable Long productId) {
        return tagService.getTagsByProductId(productId);
    }
}