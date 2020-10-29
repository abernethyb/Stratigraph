import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const SampleContext = React.createContext();

export const SampleProvider = (props) => {
    const [samples, setSamples] = useState([]);
    const { getToken } = useContext(UserProfileContext);




    const getSamplesByStructureId = (structureId) => {
        getToken().then((token) =>
            fetch(`/api/sample/structureSamples/${structureId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setSamples));
    };

    ///api/sample/reportSamples/9

    const getSamplesByReportId = (reportId) => {
        getToken().then((token) =>
            fetch(`/api/sample/reportSamples/${reportId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setSamples));
    };

    // const getSingleStructure = (id) =>
    //     getToken().then((token) =>
    //         fetch(`/api/structure/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then((res) => res.json())
    //     );

    // const addStructure = (structure) => {
    //     return getToken().then((token) =>
    //         fetch("/api/structure/", {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(structure)
    //         }).then(resp => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             }
    //             throw new Error("Unauthorized");
    //         }));
    // };


    // const EditStructure = (structure) => {
    //     return getToken().then((token) =>
    //         fetch(`/api/structure/${structure.id}`, {
    //             method: "PUT",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(structure),
    //         }));
    // };

    return (
        <SampleContext.Provider value={{ samples, getSamplesByStructureId, getSamplesByReportId }}>
            {props.children}
        </SampleContext.Provider>
    );
};