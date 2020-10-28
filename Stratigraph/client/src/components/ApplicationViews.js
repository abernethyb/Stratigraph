import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import HiThere from "./HiThere";
import ReportList from "./report/ReportList";
import Report from "./report/Report";
import AddReport from "./report/AddReport";

export default function ApplicationViews() {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <ReportList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/reports/:reportId(\d+)" exact>
                    {isLoggedIn ? <Report /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/add" exact>
                    {isLoggedIn ? <AddReport /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};
