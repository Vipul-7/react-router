import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Event detail show here</h1>
      <main>
        <h1>{params.eventId}</h1>
      </main>
    </>
  );
};
export default EventDetailPage;
