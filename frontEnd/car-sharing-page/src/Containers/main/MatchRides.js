import Paper from "@material-ui/core/Paper";
import Button from "react-bootstrap/Button";
const MatchRides = () => {
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
                            <td>@fat</td>
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
