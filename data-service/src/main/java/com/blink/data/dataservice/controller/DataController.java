package com.blink.data.dataservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.blink.data.dataservice.model.DataEntity;
import com.blink.data.dataservice.services.DataEntryService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DataController {
	
	@Autowired
	DataEntryService dataService;

	@PostMapping(path= "/saveData")
	public ResponseEntity<DataEntity> saveData(@RequestBody DataEntity dataModel)
	{
		boolean isValid = validateRequest(dataModel);
	    if (!isValid)
	    {
	      return ResponseEntity.badRequest().build();
	    }
		DataEntity modelResponse;
		modelResponse = this.dataService.saveData(dataModel);
		return ResponseEntity.ok(modelResponse);
	}
	
	@GetMapping(path = "/records")
	public List<DataEntity> getRecords()
	{
		return this.dataService.getData();
	}
	
	
	private boolean validateRequest(DataEntity dataModel) {
		boolean isValid = true;
		if (dataModel.getId() <= 0) {
			isValid = false;
		} else if (dataModel.getFname().isBlank() || dataModel.getFname().isEmpty()) {
			isValid = false;
		}
		
		return isValid;
	}
}
