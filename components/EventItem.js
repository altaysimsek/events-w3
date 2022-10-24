import React from "react";
import Image from "next/image";

const EventItem = ({ event }) => {
  return (
    <>
      <div className="flex p-3 border-gray-700/50 border- border-2 rounded-lg mt-2">
        <img
          src={event.imageUrl}
          alt="Event picture"
          width={100}
          height={100}
        />
        <div className="ml-4 flex flex-col">
          <span>{event?.title}</span>
          <span>{event?.description}</span>
        </div>
      </div>
    </>
  );
};

export default EventItem;
