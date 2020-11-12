import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const SampleContext = React.createContext();

export const SampleProvider = (props) => {
    const [samples, setSamples] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();

    const getSamplesByStructureId = (structureId, reportId) => {
        getToken().then((token) =>
            fetch(`/api/sample/structureSamples/${structureId}/${reportId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json().then(setSamples);
                } else {

                    (history.push(`/unauthorized`));
                    //throw new Error("Unauthorized")
                }
            })
        );
    }

    const getSamplesByReportId = (reportId) => {
        getToken().then((token) =>
            fetch(`/api/sample/reportSamples/${reportId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json().then(setSamples);
                } else {

                    (history.push(`/unauthorized`));
                    //throw new Error("Unauthorized")
                }
            })
        );
    }

    const getSamplesByStratigraphyId = (stratigraphyId) => {
        getToken().then((token) =>
            fetch(`/api/sample/stratigraphySamples/${stratigraphyId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setSamples));
    };

    ///api/sample/reportSamples/22/room/109
    const searcSamplesByRoomViaReport = (reportId, roomNumber) => {
        getToken().then((token) =>
            fetch(`/api/sample/reportSamples/${reportId}/room/${roomNumber}`, {
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
            }).then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {

                    (history.push(`/unauthorized`));
                    //throw new Error("Unauthorized")
                }
            }))



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
                } else {
                    (history.push(`/unauthorized`));
                }
            }));
    };


    const EditSample = (sample) => {
        return getToken().then((token) =>
            fetch(`/api/sample/${sample.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sample),
            }).then(resp => {
                if (!resp.ok) {
                    (history.push(`/unauthorized`));
                    //return resp.json();
                    //throw new Error("Unauthorized")
                }
            })
        );
    }
    const LinkStratigraphy = (sampleId, StratigraphyId) => {
        return getToken().then((token) =>
            fetch(`/api/sample/linkStratigraphy/${sampleId}/${StratigraphyId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            }).then(resp => {
                if (!resp.ok) {
                    (history.push(`/unauthorized`));
                    //return resp.json();
                    //throw new Error("Unauthorized")
                }
            })
        );
    }

    const UnLinkStratigraphy = (sampleId) => {
        return getToken().then((token) =>
            fetch(`/api/sample/unlinkStratigraphy/${sampleId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            }).then(resp => {
                if (!resp.ok) {
                    (history.push(`/unauthorized`));
                    //return resp.json();
                    //throw new Error("Unauthorized")
                }
            })
        );
    }

    const DeleteSample = (id) =>
        getToken().then((token) =>
            fetch(`/api/sample/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));

    return (
        <SampleContext.Provider value={{ samples, getSamplesByStructureId, getSamplesByReportId, addSample, getSingleSample, EditSample, DeleteSample, searcSamplesByRoomViaReport, getSamplesByStratigraphyId, LinkStratigraphy, UnLinkStratigraphy }}>
            {props.children}
        </SampleContext.Provider>
    );
};