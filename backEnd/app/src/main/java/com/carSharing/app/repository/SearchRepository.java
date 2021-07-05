//package com.carSharing.app.repository;
//
//import com.carSharing.app.models.Availability;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.sql.Time;
//import java.util.Date;
//import java.util.List;
//
//@Repository
//public interface SearchRepository extends JpaRepository<Availability, Long> {
//    List<Availability> findByDepartingcityAndDestinationcityAndJourneystartdateAndJourneystarttimeGreaterthan(String departingCity, String destinationCity, Date journeyStartDate, Time journeyStartTime);
//}
