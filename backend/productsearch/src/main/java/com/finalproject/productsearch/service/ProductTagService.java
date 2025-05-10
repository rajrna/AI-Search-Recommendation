package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.ProductTag;

import java.util.List;

public interface ProductTagService {
    ProductTag saveTag(ProductTag tag);
    List<ProductTag> getTagsByProductId(Long productId);
}