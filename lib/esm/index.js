import React from "react";
const introduceMe = ({ name, profession }) => {
    return (React.createElement("p", null,
        "Hey , my name is ",
        name,
        " , I am a ",
        profession));
};
export default introduceMe;
