package com.project.quiz.controller;

import org.springframework.web.bind.annotation.RestController;
import com.project.quiz.model.Users;
import com.project.quiz.response.ResponseMessage;
import com.project.quiz.service.UsersService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/user")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody Users user) {
        String result = usersService.registerUser(user);

        if (result.equals("Registration successful!")) {
            return ResponseEntity.ok(new ResponseMessage(result));
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage(result)); // Send the message in JSON format
        }
    }


    @GetMapping("/login/nameandpassword")
    public List<Users> searchByNameAndPassword(@RequestParam("username") String name, @RequestParam String password) {
        return usersService.getByNameAndPassword(name, password);
    }
}
