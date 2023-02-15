package com.Store.Product_management_system.systemRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Store.Product_management_system.domainModel.ProductSystem;

public interface SystemRepository extends JpaRepository<ProductSystem, Long> {

}
