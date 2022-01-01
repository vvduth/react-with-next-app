import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';




function HomePage(props) {
   
    return (
        <Fragment>
            <Head>
                <title>Holo.</title>
                <meta 
                    name = 'description'
                    content='The world from different scopes'

                />
            </Head>
            <MeetupList meetups = {props.meetups} />
        </Fragment>
    )
}
export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://admin:tgp-k6Mzh9Xj2FM@cluster0.nwzid.mongodb.net/meetup?retryWrites=true&w=majority'); 
        
    const db = client.db() ;
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray() ;

    client.close() ;
    return{
        props: {
            meetups: meetups.map(meetup => ({
                title   : meetup.title,
                address : meetup.address,
                image   : meetup.image,
                id      : meetup._id.toString(),
            }))
        },
        revalidate : 1
    };
}
export default HomePage ;

//jnbasdnjkaskjkdsah