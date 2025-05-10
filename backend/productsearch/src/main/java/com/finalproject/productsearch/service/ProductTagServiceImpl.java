package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.ProductTag;
import com.finalproject.productsearch.repository.ProductTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTagServiceImpl implements ProductTagService {

    @Autowired
    private ProductTagRepository productTagRepository;

    @Override
    public ProductTag saveTag(ProductTag tag) {
        return productTagRepository.save(tag);
    }

    @Override
    public List<ProductTag> getTagsByProductId(Long productId) {
        return productTagRepository.findByProductId(productId);
    }
}