import React from 'react'

const Scroll = (props) => {
    return(
        <div style = {{overflow:'scroll', borderTop:'1.8px dotted yellow'
        ,borderBottom:'1.8px dotted yellow', height:'30em'}}>
            {props.children}
        </div>
    ) 
}

export default Scroll;