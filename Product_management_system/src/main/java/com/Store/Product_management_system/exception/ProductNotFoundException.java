package com.Store.Product_management_system.exception;

public class ProductNotFoundException extends RuntimeException {
	
	
    public ProductNotFoundException(Long id) {
        super("Product with id " + id + " not found.");
    }
    
}
