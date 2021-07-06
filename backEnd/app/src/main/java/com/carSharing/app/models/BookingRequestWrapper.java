package com.carSharing.app.models;

public class BookingRequestWrapper {
    Availability availability;
    User requestingUser;

    public BookingRequestWrapper(Availability availability, User requestingUser) {
        this.availability = availability;
        this.requestingUser = requestingUser;
    }

    public Availability getAvailability() {
        return availability;
    }

    public void setAvailability(Availability availability) {
        this.availability = availability;
    }

    public User getRequestingUser() {
        return requestingUser;
    }

    public void setRequestingUser(User requestingUser) {
        this.requestingUser = requestingUser;
    }
}
