import { Fragment } from "react/cjs/react.production.min";
import MeetUpDetails from "../../components/meetups/MeetupDetails";
import {MongoClient, ObjectId} from 'mongodb';
import Head from "next/dist/next-server/lib/head";


function MeetUpDetail(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
            </Head>
            <MeetUpDetails 
                image = {props.meetupData.image}
                title = {props.meetupData.title}
                address = {props.meetupData.address}
                description = {props.meetupData.description}
            />
        </Fragment>
    )
};


export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://admin:tgp-k6Mzh9Xj2FM@cluster0.nwzid.mongodb.net/meetup?retryWrites=true&w=majority'); 
        
    const db = client.db() ;
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray() ;
    client.close() ;
    return {
        fallback: false ,
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}})),
    }
}

export async function getStaticProps(context) {

    const meetupId =  context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://admin:tgp-k6Mzh9Xj2FM@cluster0.nwzid.mongodb.net/meetup?retryWrites=true&w=majority'); 
        
    const db = client.db() ;
    const meetupsCollection = db.collection('meetups');
    

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    // meetupId because that is the identifire between the square brackets
    console.log(meetupId);
    return {
        props : {
            meetupData: {
                id: selectedMeetup._id.toString() ,
                title : selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetUpDetail ;