import Header from "../components/header/Header";
import MainBody from "../components/main/MainBody";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

const CarSharingPage = () => {
    const [user, setUser] = useState({
        firstName: "John",
        lastName: "ash",
        email: "dfsdfsdf",
        gender: "Male",
        id:3
    });

    return (
        <>
            <Header />
            <MainBody user={user} />
            {/* <Button>fgfd</Button> */}
        </>
    );
};

export default CarSharingPage;
