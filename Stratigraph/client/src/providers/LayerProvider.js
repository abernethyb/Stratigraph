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


    const getSingleLayer = (id) =>
        getToken().then((token) =>
            fetch(`/api/layer/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
        );

    const addLayer = (layer) => {
        return getToken().then((token) =>
            fetch("/api/layer/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(layer)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));
    };


    const EditLayer = (layer) => {
        debugger
        return getToken().then((token) =>
            fetch(`/api/layer/${layer.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(layer),
            }));
    };

    const DeleteLayer = (id) =>
        getToken().then((token) =>
            fetch(`/api/layer/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }));

    return (
        <LayerContext.Provider value={{ layers, getLayersByStratigraphyId, addLayer, getSingleLayer, EditLayer, DeleteLayer }}>
            {props.children}
        </LayerContext.Provider>
    );
};