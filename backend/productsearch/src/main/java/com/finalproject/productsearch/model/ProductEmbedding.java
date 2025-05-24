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
    private double[] embedding;

    // Default constructor
    public ProductEmbedding() {}

    // Constructor with fields
    public ProductEmbedding(Product product, double[] embedding) {
        this.product = product;
        this.embedding = embedding;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public double[] getEmbedding() {
        return embedding;
    }

    public void setEmbedding(double[] embedding) {
        this.embedding = embedding;
    }
}