import { useRouter } from 'next/router';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm' ;
import Head from 'next/dist/next-server/lib/head';
import { Fragment } from 'react/cjs/react.production.min';

function NewMeetupPage() {
    const router = useRouter() ;

    async function addMeetupHandler(enteredMeetUpData) {
        const response = await fetch('/api/new-meetup' ,{
            method: 'POST',
            body: JSON.stringify(enteredMeetUpData),
            headers :{
                'Content-Type': 'application/json'
            }
        }) ;
        const data = await response.json() ;
        console.log(data);
        router.push('/');
    };

    return (
        <Fragment>
            <Head>
                <title>Your scope!</title>
                <meta 
                    name     = 'description' 
                    content  = 'How you see the world? Let me know!'
                />
            </Head>
            <NewMeetUpForm onAddMeetUp = {addMeetupHandler}/> 
        </Fragment>
    )
};

export default NewMeetupPage ;