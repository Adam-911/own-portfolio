import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Projects from "../pages/ProjectsPage/Projects";
import { OwnRoutes } from "../types";

export default function RoutesComponent(): JSX.Element {
    const routes: Array<OwnRoutes> = [
        { path: "/", element: <MainPage/> },
        { path: "/projects", element: <Projects/> }
    ];

    return (
        <Routes>
            { routes.map((el: OwnRoutes) => (
                <Route key={el.path} path={el.path} element={el.path}/>
            )) }
        </Routes>
    );
}
