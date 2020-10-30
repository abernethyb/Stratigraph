import React, { useState, useContext, useEffect, useRef } from "react";
import {
    Form,
    FormGroup,
    Card,
    CardBody,
    Label,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Alert
} from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { StructureContext } from "../../providers/StructureProvider";

const EditStructure = () => {

    const { structureId, reportId } = useParams();
    const { EditStructure, getSingleStructure } = useContext(StructureContext)
    const history = useHistory();
    const name = useRef(null)
    const image = useRef(null)
    const location = useRef(null)
    const yearCunstructed = useRef(null)
    const [structure, setStructure] = useState();

    // "reportId": 8,
    // "name": "edited Structure for 8th rpt from postman",
    // "image": "http://dummyimage.com/216x206.bmp/dddddd/000000",
    // "location": "6598 Novick Plaza",
    // "yearCunstructed": 2090

    const submit = () => {
        const Editedstructure = {
            id: parseInt(structureId),
            reportId: parseInt(structure.reportId),
            name: name.current.value,
            image: image.current.value,
            location: location.current.value,
            yearCunstructed: parseInt(yearCunstructed.current.value)
        };


        if (structure.name !== "") {
            EditStructure(Editedstructure).then((res) => {
                history.push(`/reports/${reportId}/structures`);
            });
        } else {
            window.alert("Please add a name")
        }

    };

    useEffect(() => {
        getSingleStructure(structureId).then(setStructure);
    }, []);

    if (!structure) {
        return null;
    }


    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form encType="multipart/form-data">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    id="name"
                                    innerRef={name}
                                    defaultValue={structure.name}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Image</Label>
                                <Input
                                    id="image"
                                    innerRef={image}
                                    defaultValue={structure.image}
                                    maxLength="3900"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="location">Address</Label>
                                <Input
                                    id="location"
                                    innerRef={location}
                                    defaultValue={structure.location}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="yearCunstructed">Year Cunstructed (YYYY)</Label>
                                <Input
                                    id="yearCunstructed"
                                    innerRef={yearCunstructed}
                                    defaultValue={structure.yearCunstructed}
                                />
                            </FormGroup>

                        </Form>
                        <Button color="info" onClick={submit}>
                            SUBMIT
                        </Button>
                        <Button color="info"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(history.goBack()) }}>
                            CANCEL
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default EditStructure;