import { BoardPage } from '../pages';
import { IRoutes } from './@types/routesTypes';

const routes: IRoutes[] = [
    {
        path: '/board',
        element: <BoardPage />,
    },
];

const basicPath = '/board';

export { basicPath };
export default routes;
