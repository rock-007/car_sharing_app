const baseURL = "http://localhost:8080/api/availability";
const baseURL1 = "http://localhost:8080/api/users/";
const baseURL2 = "http://localhost:8080/api/search/";
const baseURL3 = "http://localhost:8080/api/idsearch/";
const baseURL4 = "http://localhost:8080/api/bookings";

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
    const userAvailabilty = `${baseURL1}user`;
    const userBooking = `${baseURL1}bookings`;
    console.log(userBooking);

    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    };

    return Promise.all([
        fetch(userAvailabilty, options),
        fetch(userBooking, options),
    ]).then((res) => {
        return Promise.all(
            res.map(function (res) {
                return res.json();
            })
        );
    });
};

//USer_Search_Result
export const getSearchResults = (searchInput) => {
    console.log(searchInput);

    let tempArray = [];
    return fetch(baseURL2, {
        method: "POST",
        body: JSON.stringify(searchInput),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((availableRides) => {
            tempArray = availableRides;
            // console.log("/api/search avaiable object"+availableRides )

            const result = availableRides.map((eachAvailableRide) => {
                console.log("/api/search each object", eachAvailableRide);
                return getUserId(eachAvailableRide);
            });
            // It will result is each user name corresponding to the aviaalbe rider offers
            return Promise.all(result);
        })
        .then((x) => {
            console.log(x);
            console.log(tempArray[0]);

            return x.map((y, index) => {
                return [y, tempArray[index]];
            });
        });
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

export const bookAvailableSlot = (bookAvailabilty, user) => {
    console.log("xxxxxxxxxxxxxxxxx" + bookAvailabilty.available);
    console.log("xxxxxxxxxxxxxxxxx" + user);

    return fetch(baseURL4, {
        method: "POST",
        body: JSON.stringify({
            availability: bookAvailabilty,
            user,
        }),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((data) => data);
};

export const setAvailableSlot = (availability) => {
    console.log(availability)
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(availability),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            // "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((data) => data);
};
