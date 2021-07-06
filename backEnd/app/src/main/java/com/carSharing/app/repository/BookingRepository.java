package com.carSharing.app.repository;

import com.carSharing.app.models.Booking;
import com.carSharing.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findBookingByUser(User user);
}
