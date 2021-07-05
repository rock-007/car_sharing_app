package com.carSharing.app.controller;

import com.carSharing.app.models.User;
import com.carSharing.app.models.Vehicle;
import com.carSharing.app.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VehicleController {

    @Autowired
    VehicleRepository vehicleRepository;

    @PostMapping(value = "/api/vehicles")
    public ResponseEntity<Vehicle> postVehicle(@RequestBody Vehicle vehicle) {
        System.out.println("xx1"+vehicle);
        vehicleRepository.save(vehicle);
        return new ResponseEntity<>(vehicle, HttpStatus.CREATED);
    }
}
