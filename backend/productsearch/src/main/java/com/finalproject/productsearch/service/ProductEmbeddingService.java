package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.ProductEmbedding;

import java.util.Optional;

public interface ProductEmbeddingService {
    ProductEmbedding saveEmbedding(ProductEmbedding embedding);
    Optional<ProductEmbedding> getByProductId(Long productId);
}