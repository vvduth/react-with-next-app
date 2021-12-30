import NewMeetUpForm from '../../components/meetups/NewMeetupForm' ;

function NewMeetupPage() {

    function addMeetupHandler(enteredMeetUpData) {
        console.log(enteredMeetUpData);
    };

    return (
        <NewMeetUpForm onAddMeetUp = {addMeetupHandler}/> 
    )
};

export default NewMeetupPage ;