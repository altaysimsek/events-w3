import React from "react";

const LoginButton = ({ login, connectWallet }) => {
  return (
    <>
      <button
        onClick={connectWallet}
        className="p-2 rounded-lg text-black font-bold bg-amber-400 text-ellipsis overflow-hidden max-w-[220px]"
      >
        {login ? login : "Connect your Wallet"}
      </button>
      {login ? (
        <span className="text-emerald-400 flex items-center m-2">
          <span className=" inline-flex rounded-full h-3 w-3 bg-emerald-400 mr-2">
            <span className=" absolute animate-ping inline-flex h-3 w-3 rounded-full bg-emerald-300 opacity-75"></span>
          </span>
          <span className="text-xs font-medium">Ready to transaction.</span>
        </span>
      ) : (
        <span className="text-red-400 flex items-center m-2">
          <span className=" inline-flex rounded-full h-3 w-3 bg-red-400 mr-2">
            <span className=" absolute animate-ping inline-flex h-3 w-3 rounded-full bg-red-300 opacity-75"></span>
          </span>
          <span className="text-xs font-medium">Need wallet.</span>
        </span>
      )}
    </>
  );
};

export default LoginButton;
