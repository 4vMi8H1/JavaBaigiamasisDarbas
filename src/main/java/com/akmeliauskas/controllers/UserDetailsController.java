package com.akmeliauskas.controllers;

import com.akmeliauskas.entities.UserDetails;
import com.akmeliauskas.services.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserDetailsController {

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/addUserDetails")
    public UserDetails addUserDetails(@RequestBody UserDetails userDetails) {
        return userDetailsService.createUserDetails(userDetails);
    }

    @GetMapping("/userDetails/{id}")
    public UserDetails getUserDetailsById(@PathVariable Long id) {
        return userDetailsService.getUserDetailsById(id);
    }

    @GetMapping("/usersDetails")
    public List<UserDetails> getAllUsersDetails() {
        return userDetailsService.getUsersDetails();
    }
}
