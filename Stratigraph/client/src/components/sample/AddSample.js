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
import { SampleContext } from "../../providers/SampleProvider";

const AddSample = () => {

    const { reportId } = useParams();
    const { addSample } = useContext(SampleContext)
    const { structures, getStructuresByReportId } = useContext(StructureContext);
    const history = useHistory();
    const name = useRef(null)
    const structureId = useRef(null)
    const dateTaken = useRef(null)
    const image = useRef(null)
    const locationDescription = useRef(null)
    const roomNumber = useRef(null)

    // "name": "Brendan762545270-0",
    // "userProfileId": 15,
    // "stratigraphyId": null,
    // "structureId": 32,
    // "dateTaken": "2020-08-16T00:00:00",
    // "image": "http://dummyimage.com/226x232.png/ff4444/ffffff",
    // "locationDescription": "main door, top.",
    // "roomNumber": 109

    const submit = () => {
        const sample = {
            name: name.current.value,
            //userProfileId: parseInt(),
            stratigraphyId: null,
            structureId: parseInt(structureId.current.value),
            dateTaken: dateTaken.current.value,
            image: image.current.value,
            locationDescription: locationDescription.current.value,
            roomNumber: parseInt(roomNumber.current.value)
        };


        if (sample.name !== "") {
            addSample(sample).then((res) => {
                history.push(`/reports/${reportId}/samples`);
            });
        } else {
            window.alert("Please add a name")
        }

    };
    useEffect(() => {
        getStructuresByReportId(reportId);
    }, []);

    if (!structures) {
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
                                />
                            </FormGroup>

                            {/* <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option> */}

                            <FormGroup>
                                <Label for="structureId">Category</Label>
                                <select defaultValue="" name="structureId" ref={structureId} id="structureId" className="form-control">
                                    <option value="0">Select a Structur</option>
                                    {structures.map(e => (
                                        <option key={e.id} value={e.id}>
                                            {e.name}
                                        </option>
                                    ))}
                                </select>
                            </FormGroup>



                            <FormGroup>
                                <Label for="dateTaken">dateTaken</Label>
                                <Input
                                    id="dateTaken"
                                    type="date"
                                    innerRef={dateTaken}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Image</Label>
                                <Input
                                    id="image"
                                    innerRef={image}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="locationDescription">locationDescription</Label>
                                <Input
                                    id="locationDescription"
                                    innerRef={locationDescription}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="roomNumber">roomNumber</Label>
                                <Input
                                    id="roomNumber"
                                    innerRef={roomNumber}
                                />
                            </FormGroup>

                        </Form>
                        <Button color="info" onClick={submit}>
                            SUBMIT
                        </Button>
                        <Button color="info"
                            onClick={() => { history.push(`/`) }}>
                            Cancel
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default AddSample;