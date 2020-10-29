import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, CardImg, Table } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";
import Image from 'react-bootstrap/Image'
import { SampleContext } from "../../providers/SampleProvider";


const SampletList = () => {
    const { reportId } = useParams();
    //const { structureId } = useParams();
    const { samples, getSamplesByReportId } = useContext(SampleContext);
    const history = useHistory();


    useEffect(() => {
        getSamplesByReportId(reportId);
    }, []);

    if (!samples) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">
                    <Button color="success"

                        onClick={() => { history.push(`/reports/${reportId}/samples/add`) }}
                    >
                        Add Sample
                    </Button>


                    <Table>

                        <thead>
                            <h2>All Samples</h2>
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

                                        {sample.name}
                                        <Button color="info"
                                        //onClick={() => { history.push(`/reports/${reportId}/structures/edit/${structure.id}`) }}
                                        >Stratigraphy</Button>
                                        <Button color="warning"
                                            ///reports/:reportId(\d+)/samples/edit/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/edit/${sample.id}`) }}
                                        >Edit</Button>
                                        <Button color="danger"

                                        // onClick={() => { history.push(`/reports/${reportId}/structures/edit/${structure.id}`) }}
                                        >DELETE</Button>

                                    </th>
                                    <td>
                                        <Image fluid rounded src={sample.image} alt={sample.name}></Image>

                                    </td>

                                    <td>
                                        {sample.dateTaken}
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

export default SampletList;
