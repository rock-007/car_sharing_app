package com.carSharing.app.repository;

import com.carSharing.app.models.Availability;
import com.carSharing.app.models.User;
import com.carSharing.app.models.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    List<Availability> findByVehicleUser(User user);
    List<Availability> findByVehicleUserId(Long id);

        List<Availability> findByDepartingCityAndDestinationCityAndJourneyStartDateAndJourneyStartTimeGreaterThan(String departingCity, String destinationCity, LocalDate journeyStartDate ,LocalTime journeyStartTime);
}


//    List<Availability> findByDepartingCityAndDestinationCityAndJourney(String departingCity, String destinationCity);
