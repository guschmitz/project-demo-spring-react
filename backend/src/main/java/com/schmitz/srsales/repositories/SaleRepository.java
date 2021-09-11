package com.schmitz.srsales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.schmitz.srsales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
