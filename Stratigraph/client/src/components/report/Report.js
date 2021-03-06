import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { ReportContext } from "../../providers/ReportProvider";
import { Button, Table } from "reactstrap";


const Report = () => {

    const { getSingleReport, CompleteReport, ReOpenReport } = useContext(ReportContext)
    const [report, setReport] = useState();
    const { reportId } = useParams();
    const history = useHistory();
    const [completed, setCompleted] = useState(null)


    useEffect(() => {
        getSingleReport(reportId).then(setReport);
    }, [completed]);

    if (!report) {
        return null;
    }


    //readable create data
    const dateCreated = new Date(report.createDate)
    const HumanCreateDate = `${dateCreated.getMonth() + 1}/${dateCreated.getDate()}/${dateCreated.getFullYear()}`

    //readable completedate
    const dateCompleted = new Date(report.completeDate)
    const HumanCompleteDate = `${dateCompleted.getMonth() + 1}/${dateCompleted.getDate()}/${dateCompleted.getFullYear()}`

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">


                    <Table>

                        <thead>
                            <h2>{report.name} Report</h2>
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
                                    <hr />
                                    <Button color="warning"
                                        style={{ margin: 10 }}
                                        onClick={() => { history.push(`/reports/edit/${reportId}`) }}
                                    >
                                        Edit
                                    </Button>
                                </th>
                                <td>
                                    {/* {report.createDate} */}
                                    {HumanCreateDate}
                                </td>
                                {report.completeDate ?
                                    <td>
                                        {/* {report.completeDate} */}
                                        {HumanCompleteDate}
                                        <hr />
                                        <Button color="warning"
                                            style={{ margin: 10 }}
                                            onClick={() => { ReOpenReport(reportId).then(setCompleted(false)) }}
                                        >
                                            Re-Open
                                        </Button>

                                    </td>
                                    :
                                    <td>
                                        IN PROGRESS
                                        <hr />
                                        <Button color="warning"
                                            style={{ margin: 10 }}
                                            onClick={() => { CompleteReport(reportId).then(setCompleted(true)) }}
                                        >
                                            Mark Complete
                                        </Button>
                                    </td>
                                }


                            </tr>
                        </tbody>



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

                    </Table>
                </div>
            </div>
        </>
    );
};

export default Report;
