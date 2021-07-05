import Button from "react-bootstrap/Button";

const OfferTable = ({ userName, rideInfo, index }) => {
    console.log(rideInfo);
    console.log("rideInfo");

    return (
        <>
            <tr>
                <td>{index+1} </td>
                <td>{userName}</td>
                <td>{rideInfo.journeyStartDate}</td>
                <td>{rideInfo.journeyStartTime}</td>
                <td>{4}</td>

                <td>
                    <Button>Book</Button>
                </td>
            </tr>
        </>
    );
};

export default OfferTable;
