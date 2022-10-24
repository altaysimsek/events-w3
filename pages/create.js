import React, { useEffect, useContext, useState } from "react";
import { EventsContext } from "../lib/context/EventsContext";

import Header from "../components/shared/Header";
const Create = () => {
  const { checkIfWalletIsConnected, createNewEvent, getOwnerOfContract } =
    useContext(EventsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewEvent(name, description, image);
    setDescription("");
    setName("");
    setImage("");
  };

  useEffect(() => {
    getOwnerOfContract();
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="bg-black border-2 border-amber-400 text-white p-4 rounded-lg flex flex-col">
      <Header />
      <div className="flex flex-col justify-start">
        <h2 className="text-xs text-gray-400 mb-6">Create new event</h2>
        <div className="flex flex-col">
          <div className="flex flex-col mb-2">
            <label className="mb-2" htmlFor="eventName">
              Event name
            </label>
            <input
              className="p-2 bg-white rounded-lg text-black"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Type the name of event"
              id="eventName"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="mb-2" htmlFor="eventDesc">
              Event Description:
            </label>
            <input
              className="p-2 bg-white rounded-lg text-black"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Type the description of event"
              id="eventDesc"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="mb-2" htmlFor="eventImg">
              Event Image(URL):
            </label>
            <input
              className="p-2 bg-white rounded-lg text-black"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Type the image url of event"
              id="eventImg"
            />
          </div>
          <div className="flex flex-col items-end mb-2 mt-2">
            <button
              onClick={() => createNewEvent(name, description, image)}
              className="p-2 rounded-lg text-black font-bold bg-amber-400 text-ellipsis overflow-hidden max-w-[220px]"
            >
              Create new event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
