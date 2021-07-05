package com.carSharing.app.models;

 import java.sql.*;
import java.time.LocalDate;
 import java.time.LocalTime;

public class Search {

    private String departingCity;
    private String destinationCity;
    private LocalDate journeyStartDate;
    private LocalTime journeyStartTime;



    public Search(String departingCity, String destinationCity, LocalDate journeyStartDate,LocalTime journeyStartTime ) {
        this.departingCity = departingCity;
        this.destinationCity = destinationCity;
        this.journeyStartDate = journeyStartDate;
        this.journeyStartTime= journeyStartTime;
     }

    public LocalTime getJourneyStartTime() {
        return journeyStartTime;
    }

    public void setJourneyStartTime(LocalTime journeyStartTime) {
        this.journeyStartTime = journeyStartTime;
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


//    public Date convertToDateViaSqlTimestamp(LocalDate dateToConvert) {
//        return java.sql.Timestamp.valueOf(dateToConvert);
//    }
}
