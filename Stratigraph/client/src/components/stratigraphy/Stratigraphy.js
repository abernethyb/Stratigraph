import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { LayerContext } from "../../providers/LayerProvider";
import { StratigraphyContext } from "../../providers/StratigraphyProvider";


const Stratigraphy = () => {

    const { getSingleStratigraphy } = useContext(StratigraphyContext)
    const { layers, getLayersByStratigraphyId } = useContext(LayerContext)
    const [stratigraphy, setStratigraphy] = useState();
    const { stratigraphyId, reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleStratigraphy(stratigraphyId).then(setStratigraphy);
        getLayersByStratigraphyId(stratigraphyId);
    }, []);

    if (!stratigraphy) {
        return null;
    }


    //TO DO:
    //GET LAYERS AND ADD AS TABLE at bottom of page
    //GET SAMPLES BY STRATIGRAPHY ID (this stratigraphy) and display them at top of page

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">


                    <Table>

                        <thead>
                            <h2>Stratigraphy</h2>
                            <tr>
                                <th>Date Created</th>
                                <th>Notes</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <th scope="row">
                                    {stratigraphy.createDate}
                                </th>
                                <td>
                                    {stratigraphy.notes}
                                </td>
                            </tr>
                        </tbody>


                        <Button color="warning"
                            style={{ margin: 10 }}
                            ///reports/:reportId(\d+)/stratigraphies/edit/:stratigraphyId(\d+)
                            onClick={() => { history.push(`/reports/${reportId}/stratigraphies/edit/${stratigraphyId}`) }}
                        >
                            Edit
                    </Button>
                        {/* /reports/:reportId(\d+)/structures */}
                        <Button color="info"
                            style={{ margin: 10 }}
                        //onClick={() => { history.push(`/reports/${reportId}/structures`) }}
                        >
                            Add Layer
                    </Button>
                        {/* <Button color="info"
                            style={{ margin: 10 }}
                            //reports/:reportId(\d+)/samples
                            onClick={() => { history.push(`/reports/${reportId}/samples`) }}
                        >
                            View Samples
                    </Button> */}

                    </Table>
                    <Table>
                        {/* "stratigraphyId": 10,
                        "finishPeriod": "Speotyte cuniculata",
                        "beginDate": "1886-08-17T00:00:00",
                        "endDate": "2020-02-27T00:00:00",
                        "pigments": "Charadrius tricollaris",
                        "colors": "#73188a",
                        "medium": "Lorythaixoides concolor",
                        "gloss": "Phoenicopterus chilensis",
                        "notes": "POST FROM POSTMAN." */}
                        <thead>
                            <h2>Layers</h2>
                            <tr>
                                <th>FinishPeriod</th>
                                <th>Date Range</th>
                                <th>Pigments</th>
                                <th>Colors</th>
                                <th>Medium</th>
                                <th>Gloss</th>
                                <th>Notes</th>
                            </tr>
                        </thead>

                        {layers.map((layer) => (
                            <tbody key={layer.id}>
                                <tr>
                                    <th scope="row">

                                        {layer.finishPeriod}
                                        <hr />

                                        {/*  TODO:
                                         <Button color="warning"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/samples/edit/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/edit/${sample.id}`) }}
                                        >Edit</Button>
                                        <Button color="danger"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/samples/delete/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/delete/${sample.id}`) }}

                                        >DELETE</Button> */}

                                    </th>
                                    <td>
                                        From {layer.beginDate} To {layer.endDate}
                                    </td>

                                    <td>
                                        {layer.pigments}
                                    </td>
                                    <td>
                                        {layer.colors}
                                    </td>
                                    <td>
                                        {layer.gloss}
                                    </td>
                                    <td>
                                        {layer.medium}
                                    </td>
                                    <td>
                                        {layer.notes}
                                    </td>

                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Stratigraphy;
