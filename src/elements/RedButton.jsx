import React from 'react';

export const RedButton = ({
    label,
    width,
    ...props}) => {
    return(
        <span style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#CC2840",
            cursor: "pointer",
            color: "#fff",
            padding: "10px",
            width: {width}
        }}>{label}</span>
    )
}

export default RedButton;