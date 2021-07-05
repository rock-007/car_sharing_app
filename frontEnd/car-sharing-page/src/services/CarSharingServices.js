const baseURL = "http://localhost:8080/api/user/availability";
const baseURL1 = "http://localhost:8080/api/users/";
const baseURL2 = "http://localhost:8080/api/search/";
const baseURL3 = "http://localhost:8080/api/idsearch/";

export const updateAvailability = (payload) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res);
};
//User_Availability_Schedule
export const getUserSchedules = (user) => {
    console.log(user);
    return fetch(baseURL1 + "user", {
        method: "POST", 
        body: JSON.stringify(user),
        headers: {  
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    }).then((res) => res.json());
};
//USer_Search_Result
export const getSearchResults = (searchInput) => {
    console.log(searchInput);
    return fetch(baseURL2, {
        method: "POST",
        body: JSON.stringify(searchInput),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((data) => data);
};

export const getUserId = (eachAvailability) => {
    console.log(eachAvailability);
    return fetch(baseURL3, {
        method: "POST",
        body: JSON.stringify(eachAvailability),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((data) => data);
};
