import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const LayerContext = React.createContext();

export const LayerProvider = (props) => {
    const [layers, setLayers] = useState([]);
    const { getToken } = useContext(UserProfileContext);


    const getLayersByStratigraphyId = (StratigraphyId) => {
        getToken().then((token) =>
            fetch(`/api/layer/stratigraphyLayers/${StratigraphyId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setLayers));
    };

    // const getSamplesByReportId = (reportId) => {
    //     getToken().then((token) =>
    //         fetch(`/api/sample/reportSamples/${reportId}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then((res) => res.json())
    //             .then(setSamples));
    // };

    // const getSingleSample = (id) =>
    //     getToken().then((token) =>
    //         fetch(`/api/sample/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then((res) => res.json())
    //     );

    // const addSample = (sample) => {
    //     return getToken().then((token) =>
    //         fetch("/api/sample/", {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(sample)
    //         }).then(resp => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             }
    //             throw new Error("Unauthorized");
    //         }));
    // };


    // const EditSample = (sample) => {
    //     return getToken().then((token) =>
    //         fetch(`/api/sample/${sample.id}`, {
    //             method: "PUT",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(sample),
    //         }));
    // };

    // const DeleteSample = (id) =>
    //     getToken().then((token) =>
    //         fetch(`/api/sample/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }));

    return (
        <LayerContext.Provider value={{ layers, getLayersByStratigraphyId }}>
            {props.children}
        </LayerContext.Provider>
    );
};