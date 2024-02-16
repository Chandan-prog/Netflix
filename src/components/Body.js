import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", 
        element:<Browse/>
    },
  ]);

  return (
    <RouterProvider router={appRouter}/>
    
  );
}
