package com.carSharing.app.controller;

import com.carSharing.app.models.Availability;
import com.carSharing.app.models.Search;
import com.carSharing.app.models.User;
import com.carSharing.app.models.Vehicle;
import com.carSharing.app.repository.AvailabilityRepository;
import com.carSharing.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.List;

@RestController
public class AvailabilityController {

    @Autowired
    AvailabilityRepository availabilityRepository;

    @Autowired
    UserRepository userRepository;

//    @Autowired
//    SearchRepository searchRepository;

    @PostMapping(value = "/api/availability")
    public ResponseEntity<Availability> postAvailability(@RequestBody Availability availability) {
        availabilityRepository.save(availability);
        return new ResponseEntity<>(availability, HttpStatus.CREATED);
    }

    @PostMapping(value = "/api/search")
    public ResponseEntity<List<Availability>> searchAvailability(@RequestBody Search search) {
        System.out.println("ccccc" + search.getJourneyStartDate());

////
        List<Availability> aaa = availabilityRepository.findAvailabilityByDepartingCityAndDestinationCityAndJourneyStartDateAndJourneyStartTimeGreaterThanAndAvailable(search.getDepartingCity(), search.getDestinationCity(), search.getJourneyStartDate(), search.getJourneyStartTime(),true);
        System.out.println("yyy11111111111111"+aaa);
        return new ResponseEntity<>(availabilityRepository.findAvailabilityByDepartingCityAndDestinationCityAndJourneyStartDateAndJourneyStartTimeGreaterThanAndAvailable(search.getDepartingCity(), search.getDestinationCity(), search.getJourneyStartDate(), search.getJourneyStartTime(),true), HttpStatus.OK);
    }

    @PostMapping(value = "/api/idsearch")
    public ResponseEntity<User> getUserId (@RequestBody Availability availability) {
        User user=userRepository.findByVehiclesAvailabilities(availability);

        return new ResponseEntity<>(user , HttpStatus.OK);
    }
}





//AndJourneyStartTimeGreaterThan
//        List<Availability> filterByCities= availabilityRepository.findByDepartingCityAndDestinationCityAndJourney(search.getDepartingCity(), search.getDestinationCity());
//        List<Availability> filterByScedule= filterByCities.
//        return new ResponseEntity<>(availabilityRepository.findByDepartingCityAndDestinationCityAndJourneyS   tartDateAndJourneyStartTimeGreaterThan("Glasgow", "Edinburgh", new Date(2021, Calendar.JULY,8),LocalDate.now(), HttpStatus.CREATED));
//        long time = System.currentTimeMillis();
//        System.out.println("sssssssss1111111" + search.getDepartingCity());
//        System.out.println("sssssssss1111111");
//
//        Time journeyStartTime = new Time(1625742284270L);
//        return new ResponseEntity<>(availabilityRepository.findByDepartingCityAndDestinationCityAndJourneyStartDate("Glasgow", "Edinburgh", new Date(2021, Calendar.JULY, 8)), HttpStatus.CREATED);
