import React, { useEffect, useState, useContext } from "react";
import { EventsContext } from "../lib/context/EventsContext";
const Home = () => {
  const { checkIfWalletIsConnected, connectWallet } = useContext(EventsContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return <div className="container">Merhaba</div>;
};

export default Home;
