import Button from "react-bootstrap/Button";

const OfferTable = ({ userName, rideInfo, index, bookSlotRequest }) => {
    console.log(userName);
    console.log(rideInfo);

    const bookSlot = (bookAvailabilty) => {
        console.log(bookAvailabilty);
        // bookAvailabilty.available= false;
        bookSlotRequest(bookAvailabilty);

    };

    return (
        <>
            <tr>
                <td>{index + 1} </td>
                <td>{userName}</td>
                <td>{rideInfo["journeyStartDate"]}</td>
                <td>{rideInfo["journeyStartTime"]}</td>
                <td>{4}</td>

                <td>
                    <Button value={rideInfo} onClick={() => bookSlot(rideInfo)}>
                        Book
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default OfferTable;
