
import classes from './MeetupDetails.module.css' ;

function MeetUpDetails(props) {
    return (
        <section className={classes.detail}>
            <img 
                src = {props.image} 
                alt = {props.title} /> 
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
};

export default MeetUpDetails ;