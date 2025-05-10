package com.finalproject.productsearch.service;

import com.finalproject.productsearch.model.SearchLog;
import com.finalproject.productsearch.repository.SearchLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchLogServiceImpl implements SearchLogService {

    @Autowired
    private SearchLogRepository searchLogRepository;

    @Override
    public SearchLog logSearch(SearchLog log) {
        return searchLogRepository.save(log);
    }

    @Override
    public List<SearchLog> getLogsByUserId(Long userId) {
        return searchLogRepository.findByUserId(userId);
    }
}