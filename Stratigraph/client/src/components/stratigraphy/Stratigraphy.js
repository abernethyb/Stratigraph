import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { StratigraphyContext } from "../../providers/StratigraphyProvider";


const Stratigraphy = () => {

    const { getSingleStratigraphy } = useContext(StratigraphyContext)
    const [stratigraphy, setStratigraphy] = useState();
    const { stratigraphyId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleStratigraphy(stratigraphyId).then(setStratigraphy);
    }, []);

    if (!stratigraphy) {
        return null;
    }

    //TO DO:
    //GET LAYERS AND ADD AS TABLE at bottom of page
    //GET SAMPLES BY STRATIGRAPHY ID (this stratigraphy) and display them at top of page

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
                        //onClick={() => { history.push(`/reports/edit/${reportId}`) }}
                        >
                            Edit
                    </Button>
                        {/* /reports/:reportId(\d+)/structures */}
                        <Button color="info"
                            style={{ margin: 10 }}
                        //onClick={() => { history.push(`/reports/${reportId}/structures`) }}
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
                </div>
            </div>
        </>
    );
};

export default Stratigraphy;
