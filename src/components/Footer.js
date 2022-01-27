import React from 'react';

export default function Footer(props) {
    return <footer>
        <p> The weight is 
            {
                props.kilos > 1000
            ? <span className='red'>HIGHER</span>
            : <span className='green'>LOWER</span>
            }
            than one tonne</p> 
    </footer>
}
