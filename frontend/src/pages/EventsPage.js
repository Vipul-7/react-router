import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  // // if(data.isError){
  // //   return <p>{data.message}</p>
  // // }
  // const events = data.events;
  // return <EventsList events={events} />;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => 
          <EventsList events={loadedEvents} />
        }
      </Await>
    </Suspense>
  );
}

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  // const response = await fetch("http://localhost:8080/events");

  // if (!response.ok) {
  //   // return {isError:true , message : 'could not fetch the data'};
  //   // throw {message : 'could not fetch the data'};
  //   // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
  //   //   status: 500,
  //   // });
  //   throw json({ message: "Could not fetch events" }, { status: 500 });
  // } else {
  //   // const resData = await response.json();
  //   // return resData.events;
  //   return response;
  // }

  return defer({
    events: loadEvents(),
  });
};

export default EventsPage;
