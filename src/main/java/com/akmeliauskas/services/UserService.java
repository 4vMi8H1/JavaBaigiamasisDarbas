package com.akmeliauskas.services;

import com.akmeliauskas.dao.UserRepository;
import com.akmeliauskas.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository usersRepository;

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElse(null);
    }

    public List<User> getUsers() {
        return usersRepository.findAll();
    }

    public User updateUser(User user) {
        Optional<User> optionalUser = usersRepository.findById(user.getId());
        User oldUser;
        if (optionalUser.isPresent()) {
            oldUser = optionalUser.get();

            oldUser.setUserName(user.getUserName());
            oldUser.setPassword(user.getPassword());
            usersRepository.save(oldUser);
        } else {
            return new User();
        }
        return oldUser;
    }

    public String deleteUser(Long id) {
        usersRepository.deleteById(id);
        return "User deleted";
    }

    // createUser -> nereikia, nes sukuriamas per createUserDetails
}
