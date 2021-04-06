import React from "react";
import CreateFriend from "./friend";
function FriendListview (props){
    const friendData = props.friends.map((friend)=> friend)

    return (
        <div className="friendcards">
             <h5> FRIENDS INFO</h5>

            <CreateFriend friend={friendData}/>
            <CreateFriend friend={friendData}/>

        </div>
    )
}

export default FriendListview;