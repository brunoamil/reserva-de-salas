import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const Load = ({ children, size }) => {
  return (
    <>
      <Dimmer active>
        <Loader size={size}>  
          {children}
        </Loader>
      </Dimmer>
    </>
  )
};
export default Load;
