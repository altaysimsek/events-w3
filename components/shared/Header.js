import { useContext } from "react";
import LoginButton from "../LoginButton";
import { EventsContext } from "../../lib/context/EventsContext";
const Header = () => {
  const { connectWallet, currentAccount } = useContext(EventsContext);
  return (
    <div className="flex items-start mb-6">
      <h1 className="text-2xl font-bold mr-6">Welcome to the Events</h1>
      <div className="flex flex-col items-end">
        <LoginButton login={currentAccount} connectWallet={connectWallet} />
      </div>
    </div>
  );
};

export default Header;
