package com.finalproject.productsearch.controller;

import com.finalproject.productsearch.model.ProductEmbedding;
import com.finalproject.productsearch.service.ProductEmbeddingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/embeddings")
public class ProductEmbeddingController {

    @Autowired
    private ProductEmbeddingService embeddingService;

    @PostMapping
    public ProductEmbedding saveEmbedding(@RequestBody ProductEmbedding embedding) {
        return embeddingService.saveEmbedding(embedding);
    }

    @GetMapping("/product/{productId}")
    public Optional<ProductEmbedding> getByProductId(@PathVariable Long productId) {
        return embeddingService.getByProductId(productId);
    }
}