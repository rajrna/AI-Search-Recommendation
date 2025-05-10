package com.finalproject.productsearch.controller;

import com.finalproject.productsearch.model.SearchLog;
import com.finalproject.productsearch.service.SearchLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/searchlogs")
public class SearchLogController {

    @Autowired
    private SearchLogService searchLogService;

    @PostMapping
    public SearchLog saveSearchLog(@RequestBody SearchLog searchLog) {
        return searchLogService.logSearch(searchLog);  // matches interface method
    }

    @GetMapping("/user/{userId}")
    public List<SearchLog> getLogsByUserId(@PathVariable Long userId) {
        return searchLogService.getLogsByUserId(userId);  // matches interface method
    }
}