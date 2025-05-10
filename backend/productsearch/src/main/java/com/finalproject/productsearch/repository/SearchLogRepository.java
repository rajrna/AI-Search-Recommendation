package com.finalproject.productsearch.repository;

import com.finalproject.productsearch.model.SearchLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SearchLogRepository extends JpaRepository<SearchLog, Long> {
    List<SearchLog> findByUserId(Long userId);
}