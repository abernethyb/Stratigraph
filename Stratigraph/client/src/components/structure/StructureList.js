import React, { useEffect, useContext, useState, useRef } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, CardImg, Table } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";
import Image from 'react-bootstrap/Image'
import ReactImageFallback from "react-image-fallback";


const StructuretList = () => {
    const { reportId } = useParams();
    const { structures, getStructuresByReportId } = useContext(StructureContext);
    const history = useHistory();


    useEffect(() => {
        getStructuresByReportId(reportId);
    }, []);

    if (!structures) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">
                    <Button color="info"
                        style={{ margin: 10 }}
                        onClick={() => { history.push(history.goBack()) }}>
                        Back
                    </Button>
                    <Button color="success"
                        ///reports/:reportId(\d+)/structures/add
                        onClick={() => { history.push(`/reports/${reportId}/structures/add`) }}
                    >
                        Add Structure
                    </Button>


                    <Table>

                        <thead>
                            <h2>Structures</h2>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Address</th>
                                <th>Year Built</th>
                            </tr>
                        </thead>

                        {structures.map((structure) => (
                            <tbody key={structure.id}>
                                <tr>
                                    <th scope="row">

                                        {structure.name}
                                        <hr />
                                        <Button
                                            style={{ margin: 10 }}
                                            color="warning"
                                            onClick={() => { history.push(`/reports/${reportId}/structures/edit/${structure.id}`) }}
                                        >Edit</Button>
                                        <Button
                                            color="info"
                                            style={{ margin: 10 }}
                                            ///reports/${reportId}/structures/${structure.id}/samples
                                            onClick={() => { history.push(`/reports/${reportId}/structures/${structure.id}/samples`) }}
                                        >View Samples</Button>
                                    </th>
                                    <td>

                                        <ReactImageFallback
                                            width="50%"
                                            src={`/api/image/${structure.image}`}
                                            fallbackImage={structure.image}
                                            alt={structure.name} />

                                    </td>

                                    <td>
                                        {structure.location}
                                    </td>
                                    <td>
                                        {structure.yearCunstructed}
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

export default StructuretList;
