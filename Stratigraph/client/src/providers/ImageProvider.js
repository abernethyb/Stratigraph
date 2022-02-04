import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

let ApiUrl = process.env.REACT_APP_BASE_URL;

export const ImageContext = React.createContext();

export const ImageProvider = (props) => {
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();


    const addImage = (image) => {
        return getToken().then((token) =>
            fetch(`${ApiUrl}/api/image`, {
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