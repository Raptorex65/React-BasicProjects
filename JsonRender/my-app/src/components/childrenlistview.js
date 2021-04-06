import React from "react";
import CreateChild from "./child";
function ChildrenListview (props){
    const childData = props.children.map((child)=> child)

    return (
        <div className="childrencards">
            <h5> CHILDREN INFO</h5>
            <CreateChild child={childData}/>
            <CreateChild child={childData}/>
            <CreateChild child={childData}/>
            <CreateChild child={childData}/>

        </div>
    )
}

export default ChildrenListview;