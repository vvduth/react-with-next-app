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


export async function getStaticPaths() {
    return {
        fallback: false ,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId =  context.params.meetupId;
    // meetupId because that is the identifire between the square brackets
    console.log(meetupId);
    return {
        props : {
            meetupData: {
                img : "https://tripsteri.fi/wp-content/uploads/2020/09/Tampere-AdobeStock_157441764.jpg",
                id : meetupId ,
                title: 'This is where I live',
                address: 'Pirkkamaa, Finland',
                description: 'No description yet, kinda cold at the moment.'
            }
        }
    }
}

export default MeetUpDetail ;