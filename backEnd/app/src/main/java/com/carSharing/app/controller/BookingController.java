package com.carSharing.app.controller;

import com.carSharing.app.models.Booking;
import com.carSharing.app.models.Vehicle;
import com.carSharing.app.repository.BookingRepository;
import com.carSharing.app.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;

    @PostMapping(value = "/api/bookings")
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {

        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }
}
