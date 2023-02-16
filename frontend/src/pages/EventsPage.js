import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Prakarsh 2023",
    date: "14/03/2023",
    description:
      "Prakarsh is the national lavel event. Which is organized by our college student central committe",
  },
  {
    id: "e2",
    title: "Mood Indigo 2023",
    date: "17/08/2023",
    description:
      "Mood Indigo is the IIT bombay cultural event. This is the one of the famous college event in the world.",
  },
];

const EventsPage = () => {
  return (
    <div>
      <main>
        <ul>
          {DUMMY_EVENTS.map((evnt) => (
            <li key={evnt.id}>
              <Link to={evnt.id}>{evnt.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default EventsPage;
