package com.carSharing.app.models;


import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "booking")
public class Booking {
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

    //LocalDate today = LocalDate.now();
    @ManyToOne
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Booking(String departingCity, String destinationCity, LocalDate journeyStartDate, LocalTime journeyStartTime, Vehicle vehicle, User hiringUser) {
        this.departingCity = departingCity;
        this.destinationCity = destinationCity;
        this.journeyStartDate = journeyStartDate;
        this.journeyStartTime = journeyStartTime;
        this.vehicle = vehicle;
        this.user = hiringUser;
    }

    public Booking() {
    }
}
