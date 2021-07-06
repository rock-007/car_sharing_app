package com.carSharing.app.models;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "vehicals")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "Type")
    private String type;
    @Column(name = "total_no_of_seats")
    private int totalNoOfSeats;
    @Column(name = "reg_no")
    private String regNo;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

     @OneToMany(mappedBy = "vehicle", fetch = FetchType.LAZY)
    private List<Availability> availabilities;

    public List<Availability> getAvailabilities() {
        return availabilities;
    }

    public void setAvailabilities( Availability  availabilities) {
        this.availabilities.add(availabilities);
    }
//    @ManyToOne
//    @JoinColumn(name = "vehicle_id", nullable = false)
//    private Vehicle vehicle;

    public Vehicle(String type, int totalNoOfSeats, String regNo, User user) {
        this.type = type;
        this.totalNoOfSeats = totalNoOfSeats;
        this.regNo = regNo;
        this.user = user;
    }

    public Vehicle() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Availability> getBooking() {
        return availabilities;
    }

    public void setBooking(Availability availability) {
        this.availabilities.add(availability);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getTotalNoOfSeats() {
        return totalNoOfSeats;
    }

    public void setTotalNoOfSeats(int totalNoOfSeats) {
        this.totalNoOfSeats = totalNoOfSeats;
    }

    public String getRegNo() {
        return regNo;
    }

    public void setRegNo(String regNo) {
        this.regNo = regNo;
    }
}
