package com.carSharing.app.models;


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

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    @OneToMany(mappedBy = "vehicle", fetch = FetchType.LAZY)
    private List<Booking> booking;



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

    public List<Booking> getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking.add(booking);
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
