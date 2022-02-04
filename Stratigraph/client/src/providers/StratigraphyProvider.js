import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const StratigraphyContext = React.createContext();

export const StratigraphyProvider = (props) => {
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();

    const getSingleStratigraphy = (id) =>
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/stratigraphy/${id}`, {
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


    const addStratigraphy = (stratigraphy) => {
        return getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/stratigraphy/`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(stratigraphy)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));
    };


    const editStratigraphy = (stratigraphy) => {
        return getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/stratigraphy/${stratigraphy.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(stratigraphy),
            }));
    };


    return (
        <StratigraphyContext.Provider value={{ getSingleStratigraphy, addStratigraphy, editStratigraphy }}>
            {props.children}
        </StratigraphyContext.Provider>
    );
};