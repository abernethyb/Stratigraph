import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { LayerContext } from "../../providers/LayerProvider";
import { SampleContext } from "../../providers/SampleProvider";
import { StratigraphyContext } from "../../providers/StratigraphyProvider";
import Image from 'react-bootstrap/Image'
import ReactImageFallback from "react-image-fallback";
import "./strat.css"


const Stratigraphy = () => {

    const { getSingleStratigraphy } = useContext(StratigraphyContext)
    const { getSamplesByStratigraphyId, samples, UnLinkStratigraphy } = useContext(SampleContext)
    const { layers, getLayersByStratigraphyId } = useContext(LayerContext)
    const [stratigraphy, setStratigraphy] = useState();
    const { stratigraphyId, reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleStratigraphy(stratigraphyId).then(setStratigraphy);
        getLayersByStratigraphyId(stratigraphyId);
        getSamplesByStratigraphyId(stratigraphyId);
    }, []);

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
                                    {/* {stratigraphy.createDate} */}
                                    {` ${new Date(stratigraphy.createDate).getMonth() + 1}/${new Date(stratigraphy.createDate).getDate()}/${new Date(stratigraphy.createDate).getFullYear()} `}
                                </th>
                                <td>
                                    {stratigraphy.notes}
                                </td>
                            </tr>
                        </tbody>

                        <Button color="info"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(history.goBack()) }}>
                            back
                            </Button>
                        <Button color="info"
                            style={{ margin: 10 }}
                            //reports/:reportId(\d+)/samples
                            onClick={() => { history.push(`/reports/${reportId}/samples`) }}
                        >
                            View All Samples
                         </Button>
                        <Button color="info"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(`/reports/${reportId}/structures`) }}
                        >
                            View Structures
                        </Button>
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
                        <hr />

                    </Table>
                    <div className="stragraphySamples">
                        <div className="listTitle">
                            <h2>Corresponding Samples</h2>
                            <Button
                                color="info"
                                style={{ margin: 10 }}
                                ///reports/:reportId(\d+)/stratigraphies/:stratigraphyId(\d+)/samples
                                onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}/samples`) }}
                            > Link existing Samples
                        </Button>
                        </div>
                        {samples.map((sample) => (


                            <div className="samples" key={sample.id}>
                                < Link to={`/reports/${reportId}/samples/${sample.id}`}>
                                    <p>Name: {sample.name}</p>
                                    <p>Structure: {sample.structureName}</p>
                                    <p>Room: {sample.roomNumber}</p>
                                    {/* <Image fluid rounded src={sample.image} alt={sample.name}></Image> */}

                                    <ReactImageFallback
                                        width="100%"
                                        src={`/api/image/${sample.image}`}
                                        fallbackImage={sample.image}
                                        alt={sample.name} />
                                </Link>
                                <div className="unlink">
                                    {samples.length >= 2 && <Button color="info"
                                        style={{ margin: 10 }}
                                        onClick={() => { UnLinkStratigraphy(sample.id) }}
                                    >Unlink from Stratigraphy</Button>
                                    }
                                </div>
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
                                <th>Finish Period</th>
                                <th>Date Range</th>
                                <th>Pigments</th>
                                <th>Colors</th>
                                <th>Gloss</th>
                                <th>Medium</th>
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
                                        {layer.endDate && "From:"}

                                        {/* {layer.beginDate} */}

                                        {layer.beginDate && ` ${new Date(layer.beginDate).getMonth() + 1}/${new Date(layer.beginDate).getDate()}/${new Date(layer.beginDate).getFullYear()} `}
                                        <hr />


                                        {/* {layer.endDate} */}

                                        {layer.endDate && `To: ${new Date(layer.endDate).getMonth() + 1}/${new Date(layer.endDate).getDate()}/${new Date(layer.endDate).getFullYear()} `}
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
