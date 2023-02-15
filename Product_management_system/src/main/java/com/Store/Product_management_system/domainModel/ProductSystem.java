package com.Store.Product_management_system.domainModel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProductSystem {
	
	 @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	 
	private String Name;
	
	private String quantity;
	
	private String price;
	
	private String status;
	
	public ProductSystem() {
		
	}
	
	
	
	public ProductSystem(Long id,String name, String quantity, String price, String status) {
		super();
		this.Name = name;
		this.quantity = quantity;
		this.price = price;
		this.status = status;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getName() {
		return Name;
	}



	public void setName(String name) {
		Name = name;
	}



	public String getQuantity() {
		return quantity;
	}



	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}



	public String getPrice() {
		return price;
	}



	public void setPrice(String price) {
		this.price = price;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}
	
	

}
