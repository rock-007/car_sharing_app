package com.carSharing.app.controller;

import com.carSharing.app.models.*;
import com.carSharing.app.repository.AvailabilityRepository;
import com.carSharing.app.repository.BookingRepository;
import com.carSharing.app.repository.VehicleRepository;
import org.apache.el.parser.AstFalse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    AvailabilityRepository availabilityRepository;


    @PostMapping(value = "/api/bookings")
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {

        Long availableId= booking.getAvailability().getId();
        System.out.println("availableIdxxxzzzz");

        System.out.println(availableId);

        Availability  availability= availabilityRepository.findAvailabilityById(availableId) ;
         availability.setAvailable(false);
         availabilityRepository.save(availability);
         Vehicle vehicle= availability.getVehicle();
         booking.getAvailability().setVehicle(vehicle);

//        System.out.println(booking);
//        System.out.println(booking.getAvailability().getDestinationCity());
//        System.out.println(booking.getAvailability().getAvailable());
//        System.out.println(booking.getAvailability().getVehicle());
//
//        Availability availability1 = booking.getAvailability();
//        System.out.println(availability1);
//        booking.getAvailability().setAvailable(Boolean.FALSE);
//        System.out.println(booking.getAvailability().getId());
//
//        Availability availability = booking.getAvailability();
        System.out.println(availability);

        System.out.println(availability);

       bookingRepository.save(booking);
        //bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }


//    @PostMapping(value = "/api/booking")
//    public ResponseEntity<User> userBookingRequest(@RequestBody BookingRequestWrapper bookingRequestWrapper) {
//
//        User requestingUser = bookingRequestWrapper.getRequestingUser();
//        Availability availability = bookingRequestWrapper.getAvailability();
//        System.out.println("requestingUser---"+requestingUser);
//        System.out.println("availability---"+availability);
//        return new ResponseEntity<>(requestingUser,HttpStatus.OK);
//    }
}
