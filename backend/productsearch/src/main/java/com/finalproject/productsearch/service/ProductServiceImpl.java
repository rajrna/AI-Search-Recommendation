package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.Product;
import com.finalproject.productsearch.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Change this to a real directory or storage solution
    private static final String IMAGE_UPLOAD_DIR = "uploads/";

    @Override
    public Product saveProductWithImage(String name, String description, String category, MultipartFile imageFile) throws IOException {
        // Create directories if not exists
        File uploadDir = new File(IMAGE_UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        // Generate unique filename
        String fileExtension = imageFile.getOriginalFilename().substring(imageFile.getOriginalFilename().lastIndexOf("."));
        String uniqueFilename = UUID.randomUUID() + fileExtension;

        // Save the file
        String filePath = IMAGE_UPLOAD_DIR + uniqueFilename;
        File dest = new File(filePath);
        imageFile.transferTo(dest);

        // Construct image URL (assuming served via static mapping)
        String imageUrl = "/images/" + uniqueFilename;

        // Create and save the product
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setCategory(category);
        product.setImageUrl(imageUrl);
        product.setCreatedAt(new Timestamp(System.currentTimeMillis()));

        return productRepository.save(product);
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}