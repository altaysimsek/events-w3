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
  const [allTodos, setAllTodos] = useState([]);
  const [myList, setMyList] = useState([]);

  const [allAddresses, setAllAddresses] = useState([]);

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

  return (
    <EventsContext.Provider
      value={{
        checkIfWalletIsConnected,
        connectWallet,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
