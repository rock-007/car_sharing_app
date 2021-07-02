package com.carSharing.app.components;


import com.carSharing.app.models.Booking;
import com.carSharing.app.models.User;
import com.carSharing.app.models.Vehicle;
import com.carSharing.app.repository.BookingRepository;
import com.carSharing.app.repository.UserRepository;
import com.carSharing.app.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;
    @Autowired
    VehicleRepository vehicleRepository;
    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("Umair", "Ashraf", "umair.ashraf@hotmail.co.uk", "Male");
        userRepository.save(user1);
        User user2 = new User("Asghar", "Ahmed", "asghar.ahmed@hotmail.co.uk", "Male");
        userRepository.save(user2);
        Vehicle vehicle1 = new Vehicle("Saloon", 5, "Gy4454", user1);
        vehicleRepository.save(vehicle1);
        System.out.println("date1xxxxx" + LocalDate.now());
        System.out.println("time1xxxx" + LocalDate.now());
        Booking booking1 = new Booking("Glasgow", "Edinburgh", LocalDate.now(), LocalTime.now(), vehicle1, user2);
        bookingRepository.save(booking1);

    }
}
