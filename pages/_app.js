import "../styles/globals.css";
import EventsProvider from "../lib/context/EventsContext";

function MyApp({ Component, pageProps }) {
  return (
    <EventsProvider>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </EventsProvider>
  );
}

export default MyApp;
