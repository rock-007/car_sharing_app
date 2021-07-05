import Search from "./Search";
import DisplayBody from "./DisplayBody";
import React, { useState } from "react";
import { getSearchResults, getUserId } from "../../services/CarSharingServices";

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
            console.log(searchResult);
let tempArray=[];
            let result = searchResult.map((eachresult, index) => {
                return getUserId(eachresult).then((result) => {
                    let id = result.id;
                    let name = result.firstName;
                    // const map = new Map();
                    console.log(index);
                    console.log(id);
                    console.log(name);
                    console.log(eachresult);
                    let x = [index, name, eachresult, id];
                    console.log(x)
                    //map.set(id, [name, eachresult]);
                    return tempArray.push(x);
                });
            });
            setDisplaySearchResult(tempArray)
            console.log(result);
        });
    };

    return (
        <>
            <Search submitForm={submitForm} />
            <DisplayBody
                displaySearch={displaySearch}
                user={user}
                displaySearchResult={displaySearchResult}
            />
        </>
    );
};

export default MainBody;
