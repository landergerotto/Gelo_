import React, { useState } from "react";
import * as jwt from "jwt-decode";

export const DecoderContext = React.createContext();
DecoderContext.displayName = "Challenge";

export const DecoderProvider = ({ children }) => {
  const [jwtoken, setJwtoken] = useState({});

  function decode ()
  {
    const token = sessionStorage.getItem("token");
    const decodeToken = jwt.jwtDecode(token);
    setJwtoken(decodeToken);
    // console.log(decodeToken);
    // const { exp } = decodeToken;
  }

  function Rdecode ()
  {
    console.log("pog");
    const token = sessionStorage.getItem("token");
    const decodeToken = jwt.jwtDecode(token);
    setJwtoken(decodeToken);
    // console.log(decodeToken);
    return decodeToken;
    // const { exp } = decodeToken;
  }

  return (

    <DecoderContext.Provider
      value={{
        jwt: jwtoken,
        setJwt: setJwtoken,
        decode,
        Rdecode
      }}
    >
      {children}
    </DecoderContext.Provider>
    
  );
};
