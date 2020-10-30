import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const ReportContext = React.createContext();

export const ReportProvider = (props) => {
    const [reports, setReports] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();




    const getReportsByUserId = () => {
        getToken().then((token) =>
            fetch(`/api/Report/`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setReports));
    };

    const getSingleReport = (id) =>
        getToken().then((token) =>
            fetch(`/api/Report/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {

                    (history.push(`/unauthorized`));
                    //throw new Error("Unauthorized")
                }
            }));
    //Name, CreateDate, CompleteDate

    const addReport = (report) => {
        return getToken().then((token) =>
            fetch("/api/Report/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(report)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));
    };


    const EditReport = (report) => {
        return getToken().then((token) =>
            fetch(`/api/Report/${report.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(report),
            }));
    };

    return (
        <ReportContext.Provider value={{ reports, getReportsByUserId, getSingleReport, addReport, EditReport }}>
            {props.children}
        </ReportContext.Provider>
    );
};