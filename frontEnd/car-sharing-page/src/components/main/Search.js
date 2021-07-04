import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./Main.css";
const Search = () => {
    const handleSubmitForm = (e) => {
        console.log(e);
    };

    return (
        <>

        </>
    );
};

export default Search;




// <div className="search-bar">
// <InputGroup>
//     <FormControl
//         placeholder="Departing City"
//         aria-label="Departing's City"
//         aria-describedby="Departing-city"
//         // value={state.update}
//         onSubmit={handleSubmitForm}
//     />
//     <FormControl
//         placeholder="Destination City"
//         aria-label="Destination's City"
//         aria-describedby="Destination-city"
//     />
//     <FormControl
//         type="date"
//         aria-label="Date"
//         aria-describedby="Date"
//     />
//     <FormControl
//         type="time"
//         aria-label="Time"
//         aria-describedby="Time"
//     />
//     <InputGroup.Append>
//         <Button type="submit" variant="outline-secondary">
//             Search
//         </Button>
//     </InputGroup.Append>
// </InputGroup>
// </div>
