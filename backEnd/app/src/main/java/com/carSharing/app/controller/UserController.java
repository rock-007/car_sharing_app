package com.carSharing.app.controller;

import com.carSharing.app.models.Availability;
import com.carSharing.app.models.Booking;
import com.carSharing.app.models.User;
import com.carSharing.app.repository.AvailabilityRepository;
import com.carSharing.app.repository.BookingRepository;
import com.carSharing.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    AvailabilityRepository availabilityRepository;
    @Autowired
    BookingRepository bookingRepository;
    @PostMapping(value = "/api/users")
    public ResponseEntity<User> postUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    @PostMapping(value = "/api/users/user")
    public ResponseEntity<List<Availability>> getUserAvailability(@RequestBody User user){
        System.out.println(user);
        List<Availability> availabilities1 =availabilityRepository.findByVehicleUserId(3L);
        System.out.println("xxxx"+availabilities1);
//
//        List<Availability> availabilities =availabilityRepository.findByVehicleUser(user);
//        System.out.println(availabilities);
          return new ResponseEntity<>(availabilities1, HttpStatus.OK);
    }
    @PostMapping(value = "/api/users/bookings")
    public ResponseEntity<List<Booking>> getUserBookings(@RequestBody User user){
        Long userId= user.getId();
        System.out.println("ddUserId"+userId);

        User userObj = userRepository.findUserById(userId);
         List<Booking> bookings =bookingRepository.findBookingByUser(userObj);
        System.out.println(bookings);

        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

}
