import React, { useContext } from "react";
import { EventsContext } from "../lib/context/EventsContext";
import EventItem from "./EventItem";

const EventList = () => {
  const { allEvents } = useContext(EventsContext);

  return (
    <div className="flex flex-col">
      {allEvents &&
        allEvents.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
    </div>
  );
};

export default EventList;
