import React from "react";

function Button({filter}) {
    return (
        <div>
            <button type="button" onClick={()=> filter('Grec')}>Grec</button>
        </div>
    )
}

export default Button;