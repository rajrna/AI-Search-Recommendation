package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.ProductEmbedding;
import com.finalproject.productsearch.repository.ProductEmbeddingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductEmbeddingServiceImpl implements ProductEmbeddingService {

    @Autowired
    private ProductEmbeddingRepository embeddingRepository;

    @Override
    public ProductEmbedding saveEmbedding(ProductEmbedding embedding) {
        return embeddingRepository.save(embedding);
    }

    @Override
    public Optional<ProductEmbedding> getByProductId(Long productId) {
        return embeddingRepository.findByProductId(productId);
    }
}