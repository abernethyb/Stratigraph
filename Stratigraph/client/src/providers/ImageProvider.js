import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const ImageContext = React.createContext();

export const ImageProvider = (props) => {
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();





    // const getSingleSample = (id) =>
    //     getToken().then((token) =>
    //         fetch(`/api/sample/${id}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then(resp => {
    //             if (resp.ok) {
    //                 return resp.json()
    //             } else {

    //                 (history.push(`/unauthorized`));
    //                 //throw new Error("Unauthorized")
    //             }
    //         }))



    // const addImage = (image) => {
    //     //debugger
    //     return getToken().then((token) =>
    //         fetch("/api/Image/", {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: image
    //         }).then(resp => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             } else {
    //                 (history.push(`/unauthorized`));
    //             }

    //         }));
    // };


    const addImage = (image) => {
        return getToken().then((token) =>
            fetch('/api/image', {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: image
            }).then(resp => {
                if (resp.ok) {
                    return;
                } else {
                    (history.push(`/unauthorized`));
                }
            }));
    }






    return (
        <ImageContext.Provider value={{ addImage }}>
            {props.children}
        </ImageContext.Provider>
    );
};