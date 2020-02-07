import React from 'react';
import {Loader, Dimmer} from 'semantic-ui-react';

export default function Loading({ children, size }) {
  return (
    <>
      <Dimmer active>
        <Loader size={size}>
          {children}
        </Loader>
      </Dimmer>
    </>
  );
}
