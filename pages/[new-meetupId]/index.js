import { Fragment } from "react/cjs/react.production.min";
import MeetUpDetails from "../../components/meetups/MeetupDetails";


function MeetUpDetail() {
    return (
        <Fragment>
            <MeetUpDetails 
                img = "https://tripsteri.fi/wp-content/uploads/2020/09/Tampere-AdobeStock_157441764.jpg" 
                title = "This is where I live."
                address = "Pirkkamaa, Finland"
                description = "No description yet hehe, kinda cold atm."
            />
        </Fragment>
    )
};

export default MeetUpDetail ;