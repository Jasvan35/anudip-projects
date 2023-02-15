package com.Store.Product_management_system.systemService;

import java.util.List;

import com.Store.Product_management_system.domainModel.ProductSystem;

public interface SystemService {
	
	
	public List<ProductSystem> findAll();
	
	public ProductSystem findById(Long id);
	
	public ProductSystem save(ProductSystem product);
	
	public String deleteProduct(Long id);
	
	public ProductSystem editProduct(ProductSystem product, Long id);
	
	

}
