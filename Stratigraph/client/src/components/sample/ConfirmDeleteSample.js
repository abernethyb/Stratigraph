import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { SampleContext } from "../../providers/SampleProvider";
import Image from 'react-bootstrap/Image'
import ReactImageFallback from "react-image-fallback";


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


    return (
        <Card className="m-4">

            <CardBody>
                <CardTitle>Please Confirm</CardTitle>
                <CardSubtitle>Are you sure you want to delete "{sample.name}"</CardSubtitle>
                <Button color="info"
                    style={{ margin: 10 }}
                    onClick={() => { history.push(history.goBack()) }}>
                    No, I've changed my mind. Take me back!
                    </Button>
                <Button color="danger"
                    style={{ margin: 10 }}
                    onClick={() => {
                        DeleteSample(sampleId)
                            .then(() => {
                                history.push(history.goBack())
                            })
                    }
                    }
                >   Yes, I know what I'm doing.
                    </Button>

                <div>
                    <ReactImageFallback
                        width="50%"
                        src={`/api/image/${sample.image}`}
                        fallbackImage={sample.image}
                        alt={sample.name} />
                </div>

            </CardBody>
        </Card>
    );

};


export default ConfirmDeleteSample;