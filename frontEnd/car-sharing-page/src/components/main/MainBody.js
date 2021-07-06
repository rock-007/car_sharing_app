import Search from "./Search";
import DisplayBody from "./DisplayBody";
import React, { useState } from "react";
import { getSearchResults, getUserId,bookAvailableSlot } from "../../services/CarSharingServices";

const MainBody = ({ user }) => {
    const [displaySearch, setDisplaySearch] = useState(false);
    const [displaySearchResult, setDisplaySearchResult] = useState([]);

    const submitForm = (event) => {
        userSearch(event);
        setDisplaySearch(true);
    };

    const userSearch = (event) => {
        let departingCity = event.target.departCity.value;
        let destinationCity = event.target.destCity.value;
        let journeyStartDate = event.target.date.value;
        let journeyStartTime = event.target.time.value;
        console.log(departingCity);
        getSearchResults({
            departingCity,
            destinationCity,
            journeyStartDate,
            journeyStartTime,
        }).then((searchResult) => {
            console.log(searchResult[0]);
            setDisplaySearchResult(searchResult);
            // console.log(searchResult);
            // let tempArray = [];
            // let result = searchResult.map((eachresult, index) => {
            //     getUserId(eachresult).then((result) => {
            //         let id = result.id;
            //         let name = result.firstName;
            //         // const map = new Map();
            //         // console.log(index);
            //         // console.log(id);
            //         // console.log(name);
            //         // console.log(eachresult);
            //         let eachOfferRide = [index, id, name, eachresult];
            //         // return [index, id, name, eachresult];
            //         // console.log(eachOfferRide);
            //         //map.set(id, [name, eachresult]);
            //         tempArray.push(eachOfferRide);
            //         // return 1;
            //     });
            // });
            // setDisplaySearchResult([...displaySearchResult, tempArray]);
        });
    };
    
    const bookSlotRequest = (bookAvailabilty) => {
        console.log(bookAvailabilty);
        setDisplaySearch(false);
        bookAvailableSlot(bookAvailabilty,user);

        // console.log(e);
        // need to dispaly the main screen
        // need booking username
        //need Availabilty object
    };

    return (
        <>
            <Search submitForm={submitForm} />
            <DisplayBody
                displaySearch={displaySearch}
                user={user}
                displaySearchResult1={displaySearchResult}
                bookSlotRequest={bookSlotRequest}
            />
        </>
    );
};

export default MainBody;
