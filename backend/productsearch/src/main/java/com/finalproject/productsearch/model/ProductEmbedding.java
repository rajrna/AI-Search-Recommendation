package com.finalproject.productsearch.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_embeddings")
public class ProductEmbedding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(columnDefinition = "float8[]", nullable = false)
    private float[] embedding;

    // Getters and setters
}