import LeftDisplay from "../../containers/main/LeftDisplay";
import RightDisplay from "../../containers/main/RightDisplay";

const DisplayBody = () => {
    return (
        <>
            <div className="container">
                <LeftDisplay />
                <RightDisplay />
            </div>
        </>
    );
};

export default DisplayBody;
