package com.codeb.ims.controller;
import com.codeb.ims.dto.UserResponse;
import com.codeb.ims.dto.LoginRequest;
import com.codeb.ims.dto.RegisterRequest;
import com.codeb.ims.entity.User;
import com.codeb.ims.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Optional<User> userOptional =
                userService.authenticate(request.getEmail(), request.getPassword());

        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body("Invalid email or password.");
        }

        User user = userOptional.get();

        if (user.getStatus() != User.Status.ACTIVE) {
            return ResponseEntity.badRequest()
                    .body("User account is inactive.");
        }

        UserResponse response = new UserResponse(
                user.getUserId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole(),
                user.getStatus().name()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody RegisterRequest request) {

        if (userService.emailExists(request.getEmail())) {
            return ResponseEntity.badRequest()
                    .body("Email already registered.");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPasswordHash(request.getPassword());
        user.setRole(request.getRole());
        user.setStatus(User.Status.ACTIVE);

        User savedUser = userService.saveUser(user);

        UserResponse response = new UserResponse(
                savedUser.getUserId(),
                savedUser.getFullName(),
                savedUser.getEmail(),
                savedUser.getRole(),
                savedUser.getStatus().name()
        );

        return ResponseEntity.ok(response);
    }
}