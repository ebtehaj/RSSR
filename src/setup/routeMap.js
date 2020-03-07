import Error404 from "../App/Error404/Error404";
import Home from "../App/Home/Home";
import Post from "../App/Post/Post";
import ResetPassword from "../Component/Auth/ResetPassword";
import {route} from "./route";
import Sign from "../App/Sign/Sign";


export const routeMap = [
    {
        path: route.home,
        component: Home,
        exact: true
    },
    {
        path: route.post( ':postId'),
        component: Post
    },
    {
        path: route.resetPassword(':token'),
        component: ResetPassword
    },

    {
        path: route.sign(':type'),
        component: Sign
    },

    // ------- E404 -------
    {
        path: "*",
        component: Error404,
        status: 404
    }
];
