import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { ReportContext } from "../../providers/ReportProvider";
import { Button, Table } from "reactstrap";


const ReportList = () => {

    const { reports, getReportsByUserId } = useContext(ReportContext)
    const { reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getReportsByUserId();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">
                    <Button color="danger"
                    // onClick={() => { history.push(`/ReportForm/`) }}
                    >
                        Add Report
                    </Button>


                    <Table>

                        <thead>
                            <h2>My Reports</h2>
                            <tr>
                                <th>Name</th>
                                <th>Start date</th>
                                <th>Complete date</th>
                            </tr>
                        </thead>

                        {reports.map((report) => (
                            <tbody key={report.id}>
                                <tr>
                                    <th scope="row">
                                        {/* <Link to={`/reports/${report.id}`}>
                                            {report.title}
                                        </Link> */}
                                        {report.name}
                                    </th>
                                    <td>
                                        {report.createDate}
                                    </td>
                                    <td>
                                        {report.completeDate}
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

export default ReportList;
