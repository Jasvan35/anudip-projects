package com.Store.Product_management_system.systemService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Store.Product_management_system.domainModel.ProductSystem;
import com.Store.Product_management_system.exception.ProductNotFoundException;
import com.Store.Product_management_system.systemRepository.SystemRepository;


@Service
public class SystemServiceIMPL implements SystemService {
	
	@Autowired
	private SystemRepository sysRepo;
	

	@Override
	public List<ProductSystem> findAll() {
		return sysRepo.findAll();
	}

	@Override
	public ProductSystem findById(Long id) {
		return sysRepo.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
	}

	@Override
	public ProductSystem save(ProductSystem product) {
		return sysRepo.save(product);
	}

	@Override
	public String deleteProduct(Long id) {
		
		ProductSystem product = sysRepo.findById(id).get();
		
		if (product != null) {
			sysRepo.delete(product);
			return "Product Delete Sucessfully";
		}

		return "Something wrong on server";
	}
	

	@Override
	public ProductSystem editProduct(ProductSystem p, Long id) {
		
		ProductSystem oldProduct = sysRepo.findById(id).get();
		
		oldProduct.setName(p.getName());
		oldProduct.setQuantity(p.getQuantity());
		oldProduct.setPrice(p.getPrice());
		oldProduct.setStatus(p.getStatus());
		
		return sysRepo.save(oldProduct);
	}
	
	
	
	
	
	

}
