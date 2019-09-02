import React, { useState } from 'react';
import { Button, Stylesheet } from 'react-native';

const [isJa, setIsJa] = useState(false);

const setHookState = () => {
  setIsJa(!isJa);
};

const Dummy = () => {
  return(
    <Button title={(isJa)? "clock in" : "clock out"} onPress={setHookState}/>
  );
};

const styles = Stylesheet.create({
  container: {

  },
});

export default Dummy;
