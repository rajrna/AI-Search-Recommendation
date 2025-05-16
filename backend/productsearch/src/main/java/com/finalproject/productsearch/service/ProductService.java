package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {
    Product saveProductWithImage(String name, String description, String category, MultipartFile imageFile) throws IOException;
    Optional<Product> getProductById(Long id);
    List<Product> getAllProducts();
}