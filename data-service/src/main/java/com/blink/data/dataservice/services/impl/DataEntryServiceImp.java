package com.blink.data.dataservice.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blink.data.dataservice.dao.DataDao;
import com.blink.data.dataservice.model.DataEntity;
import com.blink.data.dataservice.services.DataEntryService;

@Service
public class DataEntryServiceImp implements DataEntryService {
	
	@Autowired
	private DataDao dataDao;
	
	public DataEntryServiceImp() {
	}

	@Override
	public DataEntity saveData(DataEntity dataMode) {
		return dataDao.save(dataMode);
	}

	@Override
	public List<DataEntity> getData() {
		// TODO Auto-generated method stub
		
		return dataDao.findAll();
	}

}
