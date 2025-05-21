package com.finalproject.productsearch.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.UUID;

public class FileStorageUtil {

    public static String saveFile(MultipartFile file) throws IOException {
        // Project root directory
        String projectRoot = System.getProperty("user.dir");

        // Upload directory path
        String uploadDirPath = Paths.get(projectRoot, "uploads").toString();

        // Create uploads directory if it doesn't exist
        File uploadDir = new File(uploadDirPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        // Generate a unique filename
        String originalFilename = file.getOriginalFilename();
        String extension = "";

        if (originalFilename != null && originalFilename.contains(".")) {
            extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        }

        String uniqueFileName = UUID.randomUUID() + extension;

        // Save the file
        File destinationFile = new File(uploadDir, uniqueFileName);
        file.transferTo(destinationFile);

        return uniqueFileName;
    }
}
