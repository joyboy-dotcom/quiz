package com.project.quiz.DTO;

import java.time.LocalDateTime;

public class UserDTO {
	private long id;
	private String name;
	private String email;
	private String password;
    private LocalDateTime tokenExpirationTime;
	
	
	public UserDTO() {
		super();
	}

	public UserDTO(long id, String name, String email, String password,LocalDateTime tokenExpirationTime) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.tokenExpirationTime = tokenExpirationTime;
	}



	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LocalDateTime getTokenExpirationTime() {
		return tokenExpirationTime;
	}

	public void setTokenExpirationTime(LocalDateTime tokenExpirationTime) {
		this.tokenExpirationTime = tokenExpirationTime;
	}
	
}
