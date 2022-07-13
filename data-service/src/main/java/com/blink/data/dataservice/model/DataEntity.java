package com.blink.data.dataservice.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class DataEntity {
	
	@Id
	private long id;
	private String fname;
	private String lname;
	private String gender;
	private String dob;
	private String address;
	private String city;
	private String state;
	private String postalCode;
	private String email;
	private String phone;
	private long creditcard_no;
	private int cvv_no;
	private String expiry_date;
	private String ss_no;
	private String drivinglic_no;
	private String passport_number;
	private String bank_ac_number;
	private String details;
	
	public DataEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public long getCreditcard_no() {
		return creditcard_no;
	}

	public void setCreditcard_no(long creditcard_no) {
		this.creditcard_no = creditcard_no;
	}

	public int getCvv_no() {
		return cvv_no;
	}

	public void setCvv_no(int cvv_no) {
		this.cvv_no = cvv_no;
	}

	public String getExpiry_date() {
		return expiry_date;
	}

	public void setExpiry_date(String expiry_date) {
		this.expiry_date = expiry_date;
	}

	public String getSs_no() {
		return ss_no;
	}

	public void setSs_no(String ss_no) {
		this.ss_no = ss_no;
	}

	public String getDrivinglic_no() {
		return drivinglic_no;
	}

	public void setDrivinglic_no(String drivinglic_no) {
		this.drivinglic_no = drivinglic_no;
	}

	public String getPassport_number() {
		return passport_number;
	}

	public void setPassport_number(String passport_number) {
		this.passport_number = passport_number;
	}

	public String getBank_ac_number() {
		return bank_ac_number;
	}

	public void setBank_ac_number(String bank_ac_number) {
		this.bank_ac_number = bank_ac_number;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
}
