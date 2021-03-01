import React from 'react';
function Blocks(props) {

    const list = ['red', 'blue', 'green'];
    const [click, setClick] = React.useState(1)

    let block1 = {
        height:"100px",
        width:"100px",
        borderStyle:"solid",
        borderWeight:"2px",
        backgroundColor:"red",
        boarderColor:"blue",
    };

    // take care of your clicks i
    const handleColorChange = () => {
        setClick(click+1);
        if(click >= list.length-1){
            setClick(0);
        }
    }

    //style here
    block1.backgroundColor = list[click];

    if(block1.backgroundColor === "red") {
        block1.borderColor = "blue";
    }
    if(block1.backgroundColor === "blue") {
        block1.borderColor = "green";

    }if(block1.backgroundColor === "green") {
        block1.borderColor = "red";
    }

    return(
        <div>
            <div style={block1} onClick={handleColorChange}></div>
        </div>
    )
}



// way to export box function to other files
export default Blocks;