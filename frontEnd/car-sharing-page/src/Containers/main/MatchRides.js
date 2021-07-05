import Paper from "@material-ui/core/Paper";
import Button from "react-bootstrap/Button";
import OfferTable from "../../components/main/OfferTable";
const MatchRides = ({ displaySearchResult }) => {
    console.log(displaySearchResult);
    displaySearchResult.map((eachResult) => {
        for (let [userId, userObject] of eachResult.entries()) {
            console.log(userId);
            console.log(userObject);
            <OfferTable userName={userObject[0]} rideInfo={userObject[1]}/>;
        }
    });
    // if (displaySearchResult.length>0){
    //     console.log(displaySearchResult[0].get("3"));

    //   }

    return (
        <>
            <Paper>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>DepartTime</th>
                            <th>A.Seats</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Button>Book</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@hat</td>
                            <td>
                                <Button>Book</Button>
                            </td>
                        </tr>{" "}
                    </tbody>
                </table>
            </Paper>
        </>
    );
};

export default MatchRides;
