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

    const getSingleStructure = (id) =>
        getToken().then((token) =>
            fetch(`/api/structure/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
        );

    const addStructure = (structure) => {
        return getToken().then((token) =>
            fetch("/api/structure/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(structure)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));
    };


    const EditStructure = (structure) => {
        return getToken().then((token) =>
            fetch(`/api/structure/${structure.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(structure),
            }));
    };

    return (
        <StructureContext.Provider value={{ structures, getStructuresByReportId, addStructure, getSingleStructure, EditStructure }}>
            {props.children}
        </StructureContext.Provider>
    );
};