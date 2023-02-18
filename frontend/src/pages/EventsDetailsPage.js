import { json, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event}/>
  );
};

export const loader = async({params}) => {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+id);

  if(!response.ok){
    json({message : 'could not fetch details for selected event'},{status : 500})
  } 
  else{
    return response;
  }
}
export default EventDetailPage;
