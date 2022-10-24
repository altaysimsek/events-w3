import React, { useEffect, useContext } from "react";
import { EventsContext } from "../lib/context/EventsContext";

import Header from "../components/shared/Header";
const Home = () => {
  const { checkIfWalletIsConnected, getAllEvents } = useContext(EventsContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="bg-black border-2 border-amber-400 text-white p-4 rounded-lg flex flex-col">
      <Header />
      <div className="flex justify-start ">
        <div className="">
          <h2 className="text-lg mr-6 text-gray-300">Events</h2>
          <button onClick={getAllEvents}>AAAA</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
