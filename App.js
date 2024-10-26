import React from "react";
import ReactDOM from "react-dom/client"
const Heading = () => (<h1 id = "heading">This is react from jsx</h1>);
const Component = () => {return (
    
    <div id ="component">
        <Heading/>
        <h1>
            This is about functional components

        </h1> 

    </div>
) };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);