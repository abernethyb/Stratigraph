import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, CardImg, Table } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";
import Image from 'react-bootstrap/Image'
import { SampleContext } from "../../providers/SampleProvider";
import ReactImageFallback from "react-image-fallback";


const StructureSampletList = () => {
    const { reportId, structureId } = useParams();
    //const { structureId } = useParams();
    const { samples, getSamplesByStructureId } = useContext(SampleContext);
    const history = useHistory();


    useEffect(() => {
        getSamplesByStructureId(structureId, reportId);
    }, []);

    if (!samples) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">
                    <div>
                        <Button color="info"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(history.goBack()) }}>
                            Back
                    </Button>
                        <Button color="success"

                            onClick={() => { history.push(`/reports/${reportId}/samples/add`) }}
                        >
                            Add Sample
                    </Button>
                    </div>


                    <Table>

                        <thead>
                            <h2>Structure Samples</h2>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Date Taken</th>
                                <th>Location Description</th>
                                <th>Room Number</th>
                            </tr>
                        </thead>

                        {samples.map((sample) => (
                            <tbody key={sample.id}>
                                <tr>
                                    <th scope="row">

                                        <Link to={`/reports/${reportId}/samples/${sample.id}`}>
                                            {sample.name}
                                        </Link>
                                        <hr />
                                        {sample.stratigraphyId ?
                                            <Button color="info"
                                                style={{ margin: 10 }}
                                                ///reports/:reportId(\d+)/stratigraphies/:stratigraphyId(\d+)
                                                onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${sample.stratigraphyId}`) }}
                                            >View Stratigraphy</Button>

                                            :
                                            <Button color="info"
                                                style={{ margin: 10 }}
                                                ///reports/:reportId(\d+)/stratigraphies/add/:sampleId(\d+)
                                                onClick={() => { history.push(`/reports/${reportId}/stratigraphies/add/${sample.id}`) }}
                                            >Add Stratigraphy</Button>

                                        }
                                        <Button color="warning"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/samples/edit/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/edit/${sample.id}`) }}
                                        >Edit</Button>
                                        <Button color="danger"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/samples/delete/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/delete/${sample.id}`) }}

                                        >DELETE</Button>

                                    </th>
                                    <td>
                                        <Link to={`/reports/${reportId}/samples/${sample.id}`}>
                                            <ReactImageFallback
                                                width="50%"
                                                src={`/api/image/${sample.image}`}
                                                fallbackImage={sample.image}
                                                alt={sample.name} />
                                        </Link>

                                    </td>

                                    <td>
                                        {/* {sample.dateTaken} */}
                                        {`${new Date(sample.dateTaken).getMonth() + 1}/${new Date(sample.dateTaken).getDate()}/${new Date(sample.dateTaken).getFullYear()}`}
                                    </td>
                                    <td>
                                        {sample.locationDescription}
                                    </td>
                                    <td>
                                        {sample.roomNumber}
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

export default StructureSampletList;
