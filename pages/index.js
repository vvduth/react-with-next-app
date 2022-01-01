import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';



const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Tampere',
        image: 'https://tripsteri.fi/wp-content/uploads/2020/09/Tampere-AdobeStock_157441764.jpg',
        address: 'Pirkkamaa, Finland',
        description: 'Place where I live.'
    },
    {
        id: 'm2',
        title: 'Etihad Stadium',
        image: 'https://media.gettyimages.com/photos/general-view-inside-the-stadium-prior-to-the-carabao-cup-third-round-picture-id1276476537?s=2048x2048',
        address: 'Manchester City, England',
        description: 'My favourite Stadium.'
    }
]

function HomePage(props) {
   

    
    return (
            <MeetupList meetups = {props.meetups} />
    )
}
export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://admin:tgp-k6Mzh9Xj2FM@cluster0.nwzid.mongodb.net/meetup?retryWrites=true&w=majority'); 
        
    const db = client.db() ;
    const meetupsCollection = db.collection('meetup');

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