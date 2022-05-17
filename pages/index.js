import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import classes from "../styles/Home.module.css";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <h1 className={classes.center}>Featured Events</h1>
      <div className={classes.underline}></div>
      <EventList events={featuredEvents} />
    </>
  );
}
export default HomePage;
