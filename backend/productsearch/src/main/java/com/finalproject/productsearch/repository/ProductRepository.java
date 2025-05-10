package com.finalproject.productsearch.repository;


import com.finalproject.productsearch.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}