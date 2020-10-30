import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import HiThere from "./HiThere";
import ReportList from "./report/ReportList";
import Report from "./report/Report";
import AddReport from "./report/AddReport";
import EditReport from "./report/EditReport";
import StructuretList from "./structure/StructureList";
import AddStructure from "./structure/AddStructure";
import EditStructure from "./structure/EditStructure";
import SampletList from "./sample/SampleList";
import AddSample from "./sample/AddSample";
import EditSample from "./sample/EditSample";
import ConfirmDeleteSample from "./sample/ConfirmDeleteSample";
import SampleDetail from "./sample/SampleDetail";
import StructureSampletList from "./sample/StructureSampleList";

export default function ApplicationViews() {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>

                {/* Reports */}

                <Route path="/" exact>
                    {isLoggedIn ? <ReportList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/reports/:reportId(\d+)" exact>
                    {isLoggedIn ? <Report /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/add" exact>
                    {isLoggedIn ? <AddReport /> : <Redirect to="/login" />}
                </Route>

                <Route path="/reports/edit/:reportId(\d+)" exact>
                    {isLoggedIn ? <EditReport /> : <Redirect to="/login" />}
                </Route>

                {/* Structures */}

                <Route path="/reports/:reportId(\d+)/structures" exact>
                    {isLoggedIn ? <StructuretList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/reports/:reportId(\d+)/structures/add" exact>
                    {isLoggedIn ? <AddStructure /> : <Redirect to="/login" />}
                </Route>

                <Route path="/reports/:reportId(\d+)/structures/edit/:structureId(\d+)" exact>
                    {isLoggedIn ? <EditStructure /> : <Redirect to="/login" />}
                </Route>

                {/* Samples */}
                <Route path="/reports/:reportId(\d+)/samples" exact>
                    {isLoggedIn ? <SampletList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/:reportId(\d+)/structures/:structureId(\d+)/samples" exact>
                    {isLoggedIn ? <StructureSampletList /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/:reportId(\d+)/samples/add" exact>
                    {isLoggedIn ? <AddSample /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/:reportId(\d+)/samples/edit/:sampleId(\d+)" exact>
                    {isLoggedIn ? <EditSample /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/:reportId(\d+)/samples/delete/:sampleId(\d+)" exact>
                    {isLoggedIn ? <ConfirmDeleteSample /> : <Redirect to="/login" />}
                </Route>
                <Route path="/reports/:reportId(\d+)/samples/:sampleId(\d+)" exact>
                    {isLoggedIn ? <SampleDetail /> : <Redirect to="/login" />}
                </Route>


                {/* Auth */}

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
