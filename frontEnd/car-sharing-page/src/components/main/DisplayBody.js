import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";
import MatchRides from "../../containers/main/MatchRides";

const DisplayBody = () => {
    return (
        <>
            <div className="container">
                <LeftDisplay />
                <RightDisplay />
                <MatchRides />
            </div>
        </>
    );
};

export default DisplayBody;
