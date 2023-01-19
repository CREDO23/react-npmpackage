import React from "react";

interface Props {
  name: string;
  profession: string;
}

const introduceMe = ({ name, profession }: Props): JSX.Element => {
  return (
    <p>
      Hey , my name is {name} , I am a {profession}
    </p>
  );
};

export default introduceMe;
