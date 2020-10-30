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

const EditSample = () => {

    const { reportId } = useParams();
    const { sampleId } = useParams();
    const { EditSample, getSingleSample } = useContext(SampleContext)
    const { structures, getStructuresByReportId } = useContext(StructureContext);
    const history = useHistory();
    const name = useRef(null)
    const structureId = useRef(null)
    const dateTaken = useRef(null)
    const image = useRef(null)
    const locationDescription = useRef(null)
    const roomNumber = useRef(null)
    const [sample, setSample] = useState();

    // "name": "Brendan762545270-0",
    // "userProfileId": 15,
    // "stratigraphyId": null,
    // "structureId": 32,
    // "dateTaken": "2020-08-16T00:00:00",
    // "image": "http://dummyimage.com/226x232.png/ff4444/ffffff",
    // "locationDescription": "main door, top.",
    // "roomNumber": 109

    const submit = () => {
        const editedSample = {
            id: parseInt(sampleId),
            name: name.current.value,
            //userProfileId: parseInt(),
            stratigraphyId: parseInt(sample.stratigraphyId),
            //stratigraphyId: null,
            structureId: parseInt(structureId.current.value),
            dateTaken: dateTaken.current.value,
            image: image.current.value,
            locationDescription: locationDescription.current.value,
            roomNumber: parseInt(roomNumber.current.value)
        };

        console.log(structureId.current.value)

        if (editedSample.structureId == null) {
            editedSample.structureId = sample.structureId
        }
        if (editedSample.dateTaken == "") {
            editedSample.dateTaken = sample.dateTaken
        }


        if (editedSample.name !== "" && editedSample.structureId !== 0 && editedSample.image !== "" && roomNumber.current.value !== "") {
            EditSample(editedSample).then((res) => {
                history.push(`/reports/${reportId}/samples`);
            });
        } else {
            window.alert("Please fill in all required fields")
        }

    };
    useEffect(() => {
        getStructuresByReportId(reportId);
        getSingleSample(sampleId).then(setSample);
    }, []);

    if (!structures || !sample) {
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
                                    defaultValue={sample.name}
                                    maxLength="250"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="structureId">Category</Label>
                                <select defaultValue={sample.structureId} name="structureId" ref={structureId} id="structureId" className="form-control">
                                    <option defaultValue={sample.structureId} hidden>{sample.structureName}</option>
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
                                    defaultValue={sample.dateTaken}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Image</Label>
                                <Input
                                    id="image"
                                    innerRef={image}
                                    defaultValue={sample.image}
                                    maxLength="3500"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="locationDescription">locationDescription</Label>
                                <Input
                                    id="locationDescription"
                                    innerRef={locationDescription}
                                    defaultValue={sample.locationDescription}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="roomNumber">roomNumber</Label>
                                <Input
                                    id="roomNumber"
                                    innerRef={roomNumber}
                                    defaultValue={sample.roomNumber}
                                    type="number"
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

export default EditSample;