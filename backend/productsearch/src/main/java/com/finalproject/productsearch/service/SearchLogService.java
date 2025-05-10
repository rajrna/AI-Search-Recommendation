package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.SearchLog;

import java.util.List;

public interface SearchLogService {
    SearchLog logSearch(SearchLog log);
    List<SearchLog> getLogsByUserId(Long userId);
}