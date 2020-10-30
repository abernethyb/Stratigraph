import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, CardImg, Table } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";
import Image from 'react-bootstrap/Image'


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
                    <Button color="danger"
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
                                        <Button

                                            onClick={() => { history.push(`/reports/${reportId}/structures/edit/${structure.id}`) }}
                                        >Edit</Button>
                                        <Button

                                        //onClick={() => { history.push(`/reports/${reportId}/structures/edit/${structure.id}`) }}
                                        >View Samples</Button>
                                    </th>
                                    <td>
                                        <Image fluid rounded src={structure.image} alt={structure.name}></Image>

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
