import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./Main.css";
const Search = () => {
    return (
        <>
            <div className="search-bar">
                <InputGroup>
                    <FormControl
                        placeholder="Departing City"
                        aria-label="Departing's City"
                        aria-describedby="Departing-city"
                        // value={state.update}
                        // onChange={handleFieldChange}

                    />
                    <FormControl
                        placeholder="Destination City"
                        aria-label="Destination's City"
                        aria-describedby="Destination-city"
                    />
                    <FormControl
                        type="date"
                        aria-label="Date"
                        aria-describedby="Date"
                    />
                    <FormControl
                        type="time"
                        aria-label="Time"
                        aria-describedby="Time"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </>
    );
};

export default Search;
