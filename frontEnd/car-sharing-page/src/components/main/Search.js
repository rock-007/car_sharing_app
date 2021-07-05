import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import "./Main.css";
const Search = ({ submitForm }) => {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        submitForm(e);
        //e.target.reset();
    };

    return (
        <>
            <div className="search-bar">
                <Form onSubmit={handleSubmitForm}>
                    <InputGroup>
                        <FormControl
                            name="departCity"
                            id="departCity"
                            placeholder="Departing City"
                            aria-label="Departing's City"
                            aria-describedby="Departing-city"
                            // value={state.update}
                        />
                        <FormControl
                            name="destCity"
                            id="destCity"
                            placeholder="Destination City"
                            aria-label="Destination's City"
                            aria-describedby="Destination-city"
                        />
                        <FormControl
                            name="date"
                            id="date"
                            type="date"
                            aria-label="Date"
                            aria-describedby="Date"
                        />
                        <FormControl
                            name="time"
                            id="time"
                            type="time"
                            aria-label="Time"
                            aria-describedby="Time"
                        />
                        <InputGroup.Append>
                            <Button type="submit" variant="outline-secondary">
                                Search
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        </>
    );
};

export default Search;
