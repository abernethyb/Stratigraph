import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { LayerContext } from "../../providers/LayerProvider";
import { SampleContext } from "../../providers/SampleProvider";
import { StratigraphyContext } from "../../providers/StratigraphyProvider";
import Image from 'react-bootstrap/Image'


const Stratigraphy = () => {

    const { getSingleStratigraphy } = useContext(StratigraphyContext)
    const { getSamplesByStratigraphyId, samples } = useContext(SampleContext)
    const { layers, getLayersByStratigraphyId } = useContext(LayerContext)
    const [stratigraphy, setStratigraphy] = useState();
    const { stratigraphyId, reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleStratigraphy(stratigraphyId).then(setStratigraphy);
        getLayersByStratigraphyId(stratigraphyId);
        getSamplesByStratigraphyId(stratigraphyId);
    }, [samples]);

    if (!stratigraphy) {
        return null;
    }


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
                        <Button color="success"
                            style={{ margin: 10 }}
                            ///reports/:reportId(\d+)/stratigraphies/:stratigraphyId(\d+)/layers/add
                            onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}/layers/add`) }}
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
                    <div className="stragraphySamples">
                        <h2>Corresponding Samples</h2>
                        {samples.map((sample) => (
                            <div key={sample.id}>
                                <p>Structure: {sample.structureName}</p>
                                <p>Room: {sample.roomNumber}</p>
                                <Image fluid rounded src={sample.image} alt={sample.name}></Image>
                            </div>
                        ))}
                    </div>

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


                                        <Button color="warning"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/stratigraphies/:stratigraphyId(\d+)/layers/edit/:layerId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}/layers/edit/${layer.id}`) }}
                                        >Edit</Button>
                                        <Button color="danger"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/stratigraphies/:stratigraphyId(\d+)/layers/delete/:layerId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}/layers/delete/${layer.id}`) }}

                                        >DELETE</Button>

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
