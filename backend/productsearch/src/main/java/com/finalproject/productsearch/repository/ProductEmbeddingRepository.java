package com.finalproject.productsearch.repository;

import com.finalproject.productsearch.model.ProductEmbedding;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductEmbeddingRepository extends JpaRepository<ProductEmbedding, Long> {
    Optional<ProductEmbedding> findByProductId(Long productId);
}