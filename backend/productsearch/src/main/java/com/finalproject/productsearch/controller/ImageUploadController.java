package com.finalproject.productsearch.controller;

import com.finalproject.productsearch.utils.FileStorageUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/images")
public class ImageUploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = FileStorageUtil.saveFile(file);
            return ResponseEntity.ok("Image uploaded successfully: " + fileName);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Image upload failed");
        }
    }
}
