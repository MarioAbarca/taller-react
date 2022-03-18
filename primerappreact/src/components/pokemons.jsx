import React, { useState } from 'react';

function Pokemon(props){
    const [name, setName] = useState(props.name);

    return(
        <div>
            <h1>Pokemon: {name}</h1>
        </div>
    );
}

export default Pokemon;