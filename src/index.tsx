import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.css';
import RootStore from './store/RootStore';
import { Provider } from 'mobx-react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import routes, { basicPath } from './routes/routes';

const rootStore: RootStore = new RootStore();

const routesElement = routes.map((route) => {
    return <Route path={route.path} element={route.element} />;
});
const notFoundRoute = <Route path="*" element={<Navigate to={basicPath} />} />;
routesElement.push(notFoundRoute);

const router = createBrowserRouter(createRoutesFromElements(routesElement));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider {...rootStore}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
