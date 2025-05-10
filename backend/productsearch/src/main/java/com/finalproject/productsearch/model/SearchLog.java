package com.finalproject.productsearch.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "search_logs")
public class SearchLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Store user input, like keywords (optional)
    private String queryText;

    // Path or URL to the uploaded image (if image search)
    @Column(name = "image_path")
    private String imagePath;

    // Time the search was made
    @Column(name = "searched_at", nullable = false)
    private Timestamp searchedAt;

    // Optional reference to user (nullable for guest search)
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Constructors
    public SearchLog() {}

    public SearchLog(String queryText, String imagePath, Timestamp searchedAt, User user) {
        this.queryText = queryText;
        this.imagePath = imagePath;
        this.searchedAt = searchedAt;
        this.user = user;
    }

    // Getters and setters
    public Long getId() { return id; }

    public String getQueryText() { return queryText; }
    public void setQueryText(String queryText) { this.queryText = queryText; }

    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    public Timestamp getSearchedAt() { return searchedAt; }
    public void setSearchedAt(Timestamp searchedAt) { this.searchedAt = searchedAt; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}