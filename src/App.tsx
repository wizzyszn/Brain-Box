import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";
// Import your components here
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding/index";
import "@/index.css";

// Root component with Outlet for nested routes
const Root = () => {
    return (
        <div className="">
            <Outlet /> {/* Nested routes will render here please take note */}
        </div>
    );
};

// App component with router setup
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<NotFound />}>
                <Route index element={<Onboarding />} /> {/* Default route */}
                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
