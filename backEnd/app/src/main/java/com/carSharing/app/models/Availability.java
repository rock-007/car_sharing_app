package com.carSharing.app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "availability")
public class Availability {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "departing_city")
    private String departingCity;
    @Column(name = "destination_city")
    private String destinationCity;
    @Column(name = "journey_start_date")
    private LocalDate journeyStartDate;
    @Column(name = "journey_start_time")
    private LocalTime journeyStartTime;
    @Column(name = "available")
    private boolean available ;

    public boolean getAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }



    //LocalDate today = LocalDate.now();
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;
    @JsonIgnoreProperties(value = "availability")

    @OneToOne(mappedBy = "availability")
    private Booking booking;

    //    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
    public Availability(String departingCity, String destinationCity, LocalDate journeyStartDate, LocalTime journeyStartTime, Vehicle vehicle) {
        this.departingCity = departingCity;
        this.destinationCity = destinationCity;
        this.journeyStartDate = journeyStartDate;
        this.journeyStartTime = journeyStartTime;
        this.vehicle = vehicle;


    }

    public Availability() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }


    public String getDepartingCity() {
        return departingCity;
    }

    public void setDepartingCity(String departingCity) {
        this.departingCity = departingCity;
    }

    public String getDestinationCity() {
        return destinationCity;
    }

    public void setDestinationCity(String destinationCity) {
        this.destinationCity = destinationCity;
    }

    public LocalDate getJourneyStartDate() {
        return journeyStartDate;
    }

    public void setJourneyStartDate(LocalDate journeyStartDate) {
        this.journeyStartDate = journeyStartDate;
    }

    public LocalTime getJourneyStartTime() {
        return journeyStartTime;
    }

    public void setJourneyStartTime(LocalTime journeyStartTime) {
        this.journeyStartTime = journeyStartTime;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }


}
