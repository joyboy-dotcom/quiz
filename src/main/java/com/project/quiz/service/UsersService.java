package com.project.quiz.service;

import java.util.List;

import com.project.quiz.model.Users;

public interface UsersService {
	List<Users> getByNameAndPassword(String name,String password);
	String registerUser(Users user);
}
