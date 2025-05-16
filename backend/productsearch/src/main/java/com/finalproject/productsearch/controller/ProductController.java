package com.finalproject.productsearch.controller;

import com.finalproject.productsearch.model.Product;
import com.finalproject.productsearch.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(consumes = {"multipart/form-data"})
    public Product createProduct(
            @RequestPart("name") String name,
            @RequestPart("description") String description,
            @RequestPart("category") String category,
            @RequestPart("image") MultipartFile imageFile
    ) throws IOException {
        return productService.saveProductWithImage(name, description, category, imageFile);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id).orElse(null);
    }
}