package com.Store.Product_management_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Store.Product_management_system.domainModel.ProductSystem;
import com.Store.Product_management_system.exception.ProductNotFoundException;
import com.Store.Product_management_system.systemService.SystemService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController

public class SystemController {
	
	@Autowired
	private SystemService systemService;
	
	//Welcome 
	@GetMapping("/wel")
    public String wel()
 {
   return "hello spring boot";
 }
	//CREATE PRODUCT REST API	
	@PostMapping("/save")
	public ResponseEntity<ProductSystem> save(@RequestBody ProductSystem product) {
		ProductSystem savedProduct = systemService.save(product);
		return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
	}
	

	
	
	
	//GET ALL PRODUCT LIST API
	@GetMapping("/")
	public ResponseEntity<?> findAll() {
		return new ResponseEntity<>(systemService.findAll(), HttpStatus.OK);
	}

	
	//Delete Product REST API 
	@GetMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
		systemService.deleteProduct(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	//EDIT OR UPDATE PRODUCT REST API
	@PutMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody ProductSystem product, @PathVariable Long id) {
		return new ResponseEntity<>(systemService.editProduct(product, id), HttpStatus.CREATED);
		
	}
	
	//GET PRODUCT BY ID REST API 
	@GetMapping("/products/{id}")
	public ResponseEntity<ProductSystem> findById(@PathVariable Long id) {
	    try {
	        ProductSystem product = systemService.findById(id);
	        return new ResponseEntity<>(product, HttpStatus.OK);
	    } catch (ProductNotFoundException e) {
	        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	    }
	}
	
	

}
