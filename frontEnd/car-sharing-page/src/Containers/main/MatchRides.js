import Paper from "@material-ui/core/Paper";
import OfferTable from "../../components/main/OfferTable";
const MatchRides = ({ displaySearchResult }) => {
    let displayResult = null;

    if (displaySearchResult.length > 0) {
        console.log(displaySearchResult.length);
        console.log(displaySearchResult);

        displayResult = displaySearchResult.map((eachResult, index) => {
            console.log(eachResult[0]);
            console.log(eachResult);
            // return eachResult;

            return (
                <OfferTable
                    userId={eachResult[0]["id"]}
                    userName={eachResult[0]["firstName"]}
                    rideInfo={eachResult[1]}
                    key={index}
                    index={index}
                />
            );
        });
        console.log("eeee");
    }

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
