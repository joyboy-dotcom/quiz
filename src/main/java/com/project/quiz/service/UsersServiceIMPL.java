package com.project.quiz.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.quiz.model.Users;
import com.project.quiz.repository.UsersRepository;

@Service
public class UsersServiceIMPL implements UsersService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public String registerUser(Users user) {
        if (usersRepository.existsByEmail(user.getEmail())) {
            return "Email is already registered!";
        }
        usersRepository.save(user);
        return "Registration successful!";
    }

    @Override
    public List<Users> getByNameAndPassword(String name, String password) {
        return usersRepository.findByNameAndPassword(name, password);
    }
}

