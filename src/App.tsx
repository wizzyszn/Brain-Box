import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
// Import your components here
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

// Root component with Outlet for nested routes
const Root = () => {
    return (
        <>
            <Outlet /> {/* Nested routes will render here please take note */}
        </>
    );
};

// App component with router setup
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<NotFound />}>
                <Route index element={<Home />} /> {/* Default route */}
                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
