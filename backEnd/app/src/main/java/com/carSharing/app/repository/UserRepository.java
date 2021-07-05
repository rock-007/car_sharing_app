package com.carSharing.app.repository;

 import com.carSharing.app.models.Availability;
 import com.carSharing.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


 User findByVehiclesAvailabilities(Availability availability);
}
