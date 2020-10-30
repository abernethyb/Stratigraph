import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { SampleContext } from "../../providers/SampleProvider";
import Image from 'react-bootstrap/Image'


const SampleDetail = () => {
    const [sample, setSample] = useState();
    const { getSingleSample } = useContext(SampleContext);
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
                <CardTitle>Sample: {sample.name}</CardTitle>
                <CardSubtitle>Structure: {sample.structureName}</CardSubtitle>
                <Button color="info"
                    style={{ margin: 10 }}
                    onClick={() => { history.push(`/reports/${reportId}/samples`) }}>
                    back to list
                    </Button>
                <Button color="info"
                //onClick={() => { history.push(`/reports/${reportId}/structures/edit/${structure.id}`) }}
                >Stratigraphy</Button>
                <Button color="warning"
                    style={{ margin: 10 }}
                    ///reports/:reportId(\d+)/samples/edit/:sampleId(\d+)
                    onClick={() => { history.push(`/reports/${reportId}/samples/edit/${sample.id}`) }}
                >Edit</Button>
                <Button color="danger"
                    style={{ margin: 10 }}

                    ///reports/:reportId(\d+)/samples/delete/:sampleId(\d+)
                    onClick={() => { history.push(`/reports/${reportId}/samples/delete/${sample.id}`) }}

                >DELETE</Button>

                <CardImg src={sample.image} alt={sample.name}></CardImg>

            </CardBody>
        </Card>
    );


};


export default SampleDetail;