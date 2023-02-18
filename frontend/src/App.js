import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import EventsPage, { loader as EventsLoader } from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventsDetailsPage";
import Root from "./pages/RootPage";
import EventsRoot from "./pages/EventsRootPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },

          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
