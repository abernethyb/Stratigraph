import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const StratigraphyContext = React.createContext();

export const StratigraphyProvider = (props) => {
    const { getToken } = useContext(UserProfileContext);

    const getSingleStratigraphy = (id) =>
        getToken().then((token) =>
            fetch(`/api/stratigraphy/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
        );

    const addStratigraphy = (stratigraphy) => {
        return getToken().then((token) =>
            fetch("/api/stratigraphy/", {
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
            fetch(`/api/stratigraphy/${stratigraphy.id}`, {
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