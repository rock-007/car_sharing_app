import Paper from "@material-ui/core/Paper";
import Button from "react-bootstrap/Button";
import OfferTable from "../../components/main/OfferTable";
const MatchRides = ({ displaySearchResult }) => {
    console.log(displaySearchResult);
    let displayResult = displaySearchResult.map((eachResult, index) => {
        for (let [userId, userObject] of eachResult.entries()) {
            console.log("ddddddddddddd"+index)
            console.log(userId);
            console.log(userObject);
            return (
                <OfferTable
                    userName={userObject[0]}
                    rideInfo={userObject[1]}
                    key={index}
                    index={index}
                />
            );
        }
    });
    // if (displaySearchResult.length>0){
    //     console.log(displaySearchResult[0].get("3"));

    //   }

    return (
        <>
            <Paper>
                <table className="table">
                    {/* <span>{displaySearchResult[0]}</span> */}
                    <thead>
                        <tr>
                            <th>S.No</th>

                            <th>Name</th>
                            <th>Date</th>
                            <th>DepartTime</th>
                            <th>A.Seats</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>{displayResult}</tbody>
                </table>
            </Paper>
        </>
    );
};

export default MatchRides;
