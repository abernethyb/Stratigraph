import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";


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
                    // onClick={() => { history.push(`/structures/add`) }}
                    >
                        Add Structure
                    </Button>


                    <Table>

                        <thead>
                            <h2>My Reports</h2>
                            <tr>
                                <th>Name</th>
                                <th>Imang</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        {structures.map((structure) => (
                            <tbody key={structure.id}>
                                <tr>
                                    <th scope="row">
                                        {/* <Link to={`/structures/${structure.id}`}>
                                            {structure.name}
                                        </Link> */}
                                        {structure.name}
                                    </th>
                                    <td>
                                        {structure.image}
                                    </td>

                                    <td>
                                        {structure.location}
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
