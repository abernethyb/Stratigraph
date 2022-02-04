import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";
import { useHistory } from "react-router-dom";

export const LayerContext = React.createContext();

export const LayerProvider = (props) => {
    const [layers, setLayers] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const history = useHistory();


    const getLayersByStratigraphyId = (StratigraphyId) => {
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/layer/stratigraphyLayers/${StratigraphyId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setLayers));
    };


    const getSingleLayer = (id, reportId) =>
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/layer/${id}/${reportId}`, {
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

    const addLayer = (layer) => {
        return getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}api/layer/`, {
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
                else {
                    (history.push(`/unauthorized`));
                }
            }));
    };


    const EditLayer = (layer) => {
        return getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/layer/${layer.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(layer),
            }).then(resp => {
                if (!resp.ok) {
                    (history.push(`/unauthorized`));
                    //return resp.json();
                    //throw new Error("Unauthorized")
                }
            })
        );
    }

    const DeleteLayer = (id, stratigraphyId) =>
        getToken().then((token) =>
            fetch(`${process.env.REACT_APP_BASE_URL}/api/layer/${id}/${stratigraphyId}`, {
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