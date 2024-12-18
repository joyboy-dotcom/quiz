package com.project.quiz.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.quiz.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    List<Users> findByNameAndPassword(String fname, String lname);

    Users findByEmail(String name);

    Object findByName(String username);

    boolean existsByEmail(String email);
}

