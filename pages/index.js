import MeetupList from '../components/meetups/MeetupList';


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

function HomePage() {
    return (
        
            <MeetupList meetups = {DUMMY_MEETUPS} />
        
    )
}

export default HomePage ;