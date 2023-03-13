import React from "react";
import Index from "../components";

class Detail extends React.Component {

    render() {
        return <div>detail</div>
    }
}


class Home extends React.Component {

    render() {
        return <div>Home</div>
    }

}

export const routes = [

    {
        path: "/",
        exact: true,
        component: Index
    },
    {
        path: '/detail', exact: true,
        component: Detail,
    },
    {
        path: '/detail/:a/:b', exact: true,
        component: Detail
    }

];

