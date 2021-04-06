import Person from './person';
import ChildrenListview from './childrenlistview';
import FriendListview from './friendlistview';

function PersonDetails (props){

    return(
        <div>
        <Person person={props.personData}/>
        <ChildrenListview children={props.personData.children}/>
        <FriendListview friends={props.personData.friends}/>
        </div>
    )
}

export default PersonDetails;