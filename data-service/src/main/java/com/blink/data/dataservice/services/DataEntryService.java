package com.blink.data.dataservice.services;

import java.util.List;

import com.blink.data.dataservice.model.DataEntity;

public interface DataEntryService {
	public DataEntity saveData(DataEntity dataMode);
	public List<DataEntity> getData();

}
