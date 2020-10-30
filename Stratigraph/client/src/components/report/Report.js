import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { ReportContext } from "../../providers/ReportProvider";
import { Button, Table } from "reactstrap";


const Report = () => {

    const { getSingleReport } = useContext(ReportContext)
    const [report, setReport] = useState();
    const { reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleReport(reportId).then(setReport);
    }, []);

    if (!report) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">


                    <Table>

                        <thead>
                            <h2>Report</h2>
                            <tr>
                                <th>Name</th>
                                <th>Start date</th>
                                <th>Complete date</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <th scope="row">
                                    {report.name}
                                </th>
                                <td>
                                    {report.createDate}
                                </td>
                                {report.completeDate ?
                                    <td>
                                        {report.completeDate}
                                    </td>
                                    :
                                    <td>
                                        IN PROGRESS
                                        </td>
                                }


                            </tr>
                        </tbody>


                        <Button color="warning"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(`/reports/edit/${reportId}`) }}
                        >
                            Edit
                    </Button>
                        {/* /reports/:reportId(\d+)/structures */}
                        <Button color="info"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(`/reports/${reportId}/structures`) }}
                        >
                            View Structures
                    </Button>
                        <Button color="info"
                            style={{ margin: 10 }}
                            //reports/:reportId(\d+)/samples
                            onClick={() => { history.push(`/reports/${reportId}/samples`) }}
                        >
                            View Samples
                    </Button>
                        {/* TO DO */}
                        {/* <Button color="info"
                            style={{ margin: 10 }}
                        //onClick={() => { history.push(`/reports/${reportId}/structures`) }}
                        >
                            View Stratigraphies
                        </Button> */}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Report;
