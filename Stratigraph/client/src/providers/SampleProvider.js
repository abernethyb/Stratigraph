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

    const getSingleSample = (id) =>
        getToken().then((token) =>
            fetch(`/api/sample/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
        );

    const addSample = (sample) => {
        return getToken().then((token) =>
            fetch("/api/sample/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sample)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));
    };


    const EditSample = (sample) => {
        debugger
        return getToken().then((token) =>
            fetch(`/api/sample/${sample.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sample),
            }));
    };

    return (
        <SampleContext.Provider value={{ samples, getSamplesByStructureId, getSamplesByReportId, addSample, getSingleSample, EditSample }}>
            {props.children}
        </SampleContext.Provider>
    );
};