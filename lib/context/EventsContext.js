import React, { useState, useEffect, createContext } from "react";
import Web3Model from "web3modal";
import { ethers } from "ethers";

import { eventsAddr, eventsABI } from "./Constants";

const fetchContract = async (signerOrProvider) => {
  return new ethers.Contract(eventsAddr, eventsABI, signerOrProvider);
};

export const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState("");
  const [allEvents, setAllEvents] = useState([]);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return setError("Please install metamask");

    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(account[0]);
  };

  const getAllEvents = async () => {
    try {
      const web3Modal = new Web3Model();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);

      const getAllEvents = await contract.getEvents();
      console.log(getAllEvents);
      setAllEvents(getAllEvents);
    } catch (error) {
      console.log(error);
    }
  };

  const getOwnerOfContract = async () => {
    try {
      const web3Modal = new Web3Model();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);

      const getOwnerOfContract = await contract.ownerOfContract();
      console.log("getOwnerOfContract", getOwnerOfContract);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewEvent = async (name, description, image) => {
    try {
      const web3Modal = new Web3Model();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = await fetchContract(signer);

      const createEvent = await contract.createEvent(name, description, image);
      console.log("createEvent", createEvent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventsContext.Provider
      value={{
        checkIfWalletIsConnected,
        connectWallet,
        currentAccount,
        getAllEvents,
        createNewEvent,
        getOwnerOfContract,
        allEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
