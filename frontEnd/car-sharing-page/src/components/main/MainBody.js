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

            searchResult.map((eachresult) => {
                return getUserId(eachresult).then((result) => {
                    let id = result.id;
                    let name = result.firstName;
                    const map = new Map();

                    console.log(name);
                    console.log(map);
                    map.set(id, [name, eachresult]);
                    setDisplaySearchResult(...displaySearchResult, [
                        map.set(id, [name, eachresult]),
                    ]);
                });
            });
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
