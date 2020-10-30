import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { SampleContext } from "../../providers/SampleProvider";
import Image from 'react-bootstrap/Image'
import { LayerContext } from "../../providers/LayerProvider";


const ConfirmDeleteLayer = () => {
    const [layer, setLayer] = useState();
    const { getSingleLayer, DeleteLayer } = useContext(LayerContext);
    const { reportId, stratigraphyId, layerId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleLayer(layerId).then(setLayer);
    }, []);

    if (!layer) {
        return null;
    }

    return (
        <Card className="m-4">

            <CardBody>
                <CardTitle>Please Confirm</CardTitle>
                <CardSubtitle>Are you sure you want to delete "{layer.finishPeriod}?"</CardSubtitle>
                <Button color="info"
                    style={{ margin: 10 }}
                    onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}`) }}>
                    No, I've changed my mind. Take me back!
                    </Button>
                <Button color="danger"
                    style={{ margin: 10 }}
                    onClick={() => {
                        DeleteLayer(layerId)
                            .then(() => {
                                history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}`)
                            })
                    }
                    }
                >   Yes, I know what I'm doing.
                    </Button>

            </CardBody>
        </Card>
    );

};


export default ConfirmDeleteLayer;