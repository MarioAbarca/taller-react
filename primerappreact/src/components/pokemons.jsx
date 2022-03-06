import React, { useState } from 'react';

function Pokemon(props){
    const [name, setName] = useState(props.name);

    return(
        <div>
            <h1>Pokemon: {name}</h1>
            <button onClick={() => setName('Harizard')}>Pushame</button>
        </div>
    );
}

export default Pokemon;