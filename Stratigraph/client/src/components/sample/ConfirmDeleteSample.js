import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { SampleContext } from "../../providers/SampleProvider";
import Image from 'react-bootstrap/Image'


const ConfirmDeleteSample = () => {
    const [sample, setSample] = useState();
    const { getSingleSample, DeleteSample } = useContext(SampleContext);
    const { sampleId, reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleSample(sampleId).then(setSample);
    }, []);

    if (!sample) {
        return null;
    }

    if (sample.userProfileId === JSON.parse(sessionStorage.getItem("userProfile")).id) {


        return (
            <Card className="m-4">

                <h1>Please Confirm</h1>
                <h2> Are you sure you want to delete "{sample.name}"</h2>
                <Image fluid rounded src={sample.image} alt={sample.name}></Image>
                <CardBody>
                    <Button color="info"
                        style={{ margin: 10 }}
                        onClick={() => { history.push(`/reports/${reportId}/samples`) }}>
                        No, I've changed my mind. Take me back!
                </Button>
                    <Button color="danger"
                        style={{ margin: 10 }}
                        onClick={() => {
                            DeleteSample(sampleId)
                                .then(() => {
                                    history.push(`/reports/${reportId}/samples`)
                                })
                        }
                        }
                    >Yes, I know what I'm doing.
                </Button>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <h1>Unauthorized</h1>
        )
    }
};


export default ConfirmDeleteSample;