const baseURL = "/api/user/availability";
const baseURL1 = "http://localhost:8080/api/users/";

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
