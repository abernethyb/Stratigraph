import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const StructureContext = React.createContext();

export const StructureProvider = (props) => {
    const [structures, setStructures] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();




    const getStructuresByReportId = (reportId) => {
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/structure/reportStructures/${reportId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json().then(setStructures);
                } else {

                    (history.push(`/unauthorized`));
                    //throw new Error("Unauthorized")
                }
            })
        );
    }



    const getSingleStructure = (id) =>
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/structure/${id}`, {
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
            })
        );


    const addStructure = (structure) => {
        return getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/structure/`, {
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
            fetch(`${process.env.REACT_APP_BASE_URL}/api/structure/${structure.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(structure),
            }));
    };

    const DeleteStructure = (id) =>
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/structure/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));

    return (
        <StructureContext.Provider value={{ structures, getStructuresByReportId, addStructure, getSingleStructure, EditStructure, DeleteStructure }}>
            {props.children}
        </StructureContext.Provider>
    );
};