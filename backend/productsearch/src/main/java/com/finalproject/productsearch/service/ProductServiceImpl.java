package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.Product;
import com.finalproject.productsearch.model.ProductEmbedding;
import com.finalproject.productsearch.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.sql.Timestamp;
import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {

    private static final String IMAGE_UPLOAD_DIR = "D:\\Final Project\\AI-Search-Recommendation\\backend\\productsearch\\uploads";

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductEmbeddingService productEmbeddingService;

    @Override
    public Product saveProductWithImage(String name, String description, String category, MultipartFile imageFile) throws IOException {
        // Ensure upload dir exists
        File uploadDir = new File(IMAGE_UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        // Generate unique filename
        String fileExtension = imageFile.getOriginalFilename().substring(imageFile.getOriginalFilename().lastIndexOf("."));
        String uniqueFilename = UUID.randomUUID() + fileExtension;

        // Save file
        File dest = new File(uploadDir, uniqueFilename);
        imageFile.transferTo(dest);
        String imageUrl = "/images/" + uniqueFilename;

        // Save product
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setCategory(category);
        product.setImageUrl(imageUrl);
        product.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        product = productRepository.save(product); // save and get ID

        // Read image bytes
        byte[] imageBytes = Files.readAllBytes(dest.toPath());

        // Send to Python FastAPI
        RestTemplate restTemplate = new RestTemplate();
        MultipartBodyBuilder builder = new MultipartBodyBuilder();
        builder.part("file", new ByteArrayResource(imageBytes) {
            @Override
            public String getFilename() {
                return uniqueFilename;
            }
        });
        HttpEntity<MultiValueMap<String, HttpEntity<?>>> requestEntity = new HttpEntity<>(builder.build());

        ResponseEntity<Map> response = restTemplate.exchange(
                "http://localhost:8000/extract-embedding/",
                HttpMethod.POST,
                requestEntity,
                Map.class
        );

        // Save embedding if successful
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            List<Double> embeddingList = (List<Double>) response.getBody().get("embedding");
            double[] embeddingArray = embeddingList.stream().mapToDouble(Double::doubleValue).toArray();

            ProductEmbedding productEmbedding = new ProductEmbedding();
            productEmbedding.setProduct(product);
            productEmbedding.setEmbedding(embeddingArray);
            productEmbeddingService.saveEmbedding(productEmbedding);
        }

        return product;
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