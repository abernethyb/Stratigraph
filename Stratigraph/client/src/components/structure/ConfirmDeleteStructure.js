import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { SampleContext } from "../../providers/SampleProvider";
import Image from 'react-bootstrap/Image'
import ReactImageFallback from "react-image-fallback";
import { StructureContext } from "../../providers/StructureProvider";
import StructureSampletList from "../sample/StructureSampleList";


const ConfirmDeleteStructure = () => {
    const [structure, setStructure] = useState();
    const { getSingleStructure, DeleteStructure } = useContext(StructureContext);
    const { structureId, reportId } = useParams();
    const history = useHistory();


    useEffect(() => {
        getSingleStructure(structureId).then(setStructure);
    }, []);

    if (!structure) {
        return null;
    }


    return (
        <Card className="m-4">

            <CardBody>
                <CardTitle>Please Confirm</CardTitle>
                <CardSubtitle>Are you sure you want to delete "{structure.name}"</CardSubtitle>
                <Button color="info"
                    style={{ margin: 10 }}
                    onClick={() => { history.push(history.goBack()) }}>
                    No, I've changed my mind. Take me back!
                    </Button>
                <Button color="danger"
                    style={{ margin: 10 }}
                    onClick={() => {
                        DeleteStructure(structureId)
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
                        src={`/api/image/${structure.image}`}
                        fallbackImage={structure.image}
                        alt={structure.name} />
                </div>
                <h2>The following samples will no longer be associated with a structure</h2>
                <h4>Consider editing the associated structure or deleting the samples before deleting this structure</h4>
                <StructureSampletList />

            </CardBody>
        </Card>
    );

};


export default ConfirmDeleteStructure;