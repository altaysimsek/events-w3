import React, { useEffect, useContext } from "react";
import { EventsContext } from "../lib/context/EventsContext";
import Image from "next/image";

import Header from "../components/shared/Header";
import EventList from "../components/EventList";
const Home = () => {
  const { checkIfWalletIsConnected, getAllEvents } = useContext(EventsContext);

  useEffect(() => {
    getAllEvents();
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="bg-black border-2 border-amber-400 text-white p-4 rounded-lg flex flex-col">
      <Header />
      <div className="flex flex-col justify-start ">
        <h2 className="text-lg mr-6 text-gray-300">Events</h2>
        <EventList />
      </div>
    </div>
  );
};

export default Home;
