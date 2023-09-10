import React from "react";

//JSx wae
const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Evanikus</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {
            id: 'hello',
            className: 'dummyClass'
        },
        React.createElement('h1', null, 'Hello evanikus'))
}

export default Hello;