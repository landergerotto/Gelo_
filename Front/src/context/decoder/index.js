import React, { useState } from "react";
import * as jwt from "jwt-decode";

export const DecoderContext = React.createContext();
DecoderContext.displayName = "Challenge";

export const DecoderProvider = ({ children }) => {
  const [jwtoken, setJwt] = useState({});
  
  function decoder ()
  {
    const token = sessionStorage.getItem("token");
    const decodeToken = jwt.jwtDecode(token);
    setJwt(decodeToken);
    console.log(decodeToken);
    // const { exp } = decodeToken;
  }

  function Rdecoder ()
  {
    const token = sessionStorage.getItem("token");
    const decodeToken = jwt.jwtDecode(token);
    setJwt(decodeToken);
    console.log(decodeToken);
    return decodeToken;
    // const { exp } = decodeToken;
  }

  return (

    <DecoderContext.Provider
      value={{
        jwt: jwtoken,
        setJwt: setJwt,
        decoder,
        Rdecoder
      }}
    >
      {children}
    </DecoderContext.Provider>
    
  );
};
