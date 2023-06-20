import { createBrowserRouter, RouterProvider } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Account from "./pages/Account";
//Routing
import RootLayout from "./pages/Root";

//DEFINING ROUTES
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/clients", element: <Clients /> },
      { path: "/account", element: <Account /> },
    ],
  },
]);


function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
