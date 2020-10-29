import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const StructureContext = React.createContext();

export const StructureProvider = (props) => {
    const [structures, setStructures] = useState([]);
    const { getToken } = useContext(UserProfileContext);




    const getStructuresByReportId = (reportId) => {
        getToken().then((token) =>
            fetch(`/api/structure/reportStructures/${reportId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setStructures));
    };

    // const getSingleReport = (id) =>
    //     getToken().then((token) =>
    //         fetch(`/api/Report/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then((res) => res.json())
    //     );
    // //Name, CreateDate, CompleteDate

    // const addReport = (report) => {
    //     return getToken().then((token) =>
    //         fetch("/api/Report/", {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(report)
    //         }).then(resp => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             }
    //             throw new Error("Unauthorized");
    //         }));
    // };


    // const EditReport = (report) => {
    //     return getToken().then((token) =>
    //         fetch(`/api/Report/${report.id}`, {
    //             method: "PUT",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(report),
    //         }));
    // };

    return (
        <StructureContext.Provider value={{ structures, getStructuresByReportId }}>
            {props.children}
        </StructureContext.Provider>
    );
};