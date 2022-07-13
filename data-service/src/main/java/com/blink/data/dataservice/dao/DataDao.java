package com.blink.data.dataservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blink.data.dataservice.model.DataEntity;

public interface DataDao extends JpaRepository<DataEntity, Long> {

}
