import React from "react";
import {Icon} from 'semantic-ui-react';

export default () => (
  <>
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0d4b81",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
      }}
    >
      <Icon name="ban" size="massive" color="grey"/>
      <h1 style={{ fontFamily: "Arial", color: "#fff", fontSize: "3em" }}>
        Opa! Estamos terminando está página!!
      </h1>
    </div>
  </>
);
