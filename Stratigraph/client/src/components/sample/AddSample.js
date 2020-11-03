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
import { ImageContext } from "../../providers/ImageProvider";

const AddSample = () => {

    const { reportId } = useParams();
    const { addSample } = useContext(SampleContext)
    const { addImage } = useContext(ImageContext)
    const { structures, getStructuresByReportId } = useContext(StructureContext);
    const history = useHistory();
    const name = useRef(null)
    const structureId = useRef(null)
    const dateTaken = useRef(null)
    const image = useRef()
    const locationDescription = useRef(null)
    const roomNumber = useRef(null)
    const [imageUpload, setImageUpload] = useState();

    // "name": "Brendan762545270-0",
    // "userProfileId": 15,
    // "stratigraphyId": null,
    // "structureId": 32,
    // "dateTaken": "2020-08-16T00:00:00",
    // "image": "http://dummyimage.com/226x232.png/ff4444/ffffff",
    // "locationDescription": "main door, top.",
    // "roomNumber": 109

    const HandleImageUpload = (event) => {
        setImageUpload(event.target.files[0])
        console.log(event.target.files[0])
        console.log(imageUpload)
    }

    const submit = () => {

        const formData = new FormData();
        const fileName = `${new Date().getTime()}.${imageUpload.name.split('.').pop()}`
        formData.append('imageUpload', imageUpload, fileName)

        addImage(formData, fileName)
        const sample = {
            name: name.current.value,
            stratigraphyId: null,
            structureId: parseInt(structureId.current.value),
            dateTaken: dateTaken.current.value,
            //image: image.current.value,
            image: fileName,
            locationDescription: locationDescription.current.value,
            roomNumber: parseInt(roomNumber.current.value)
        };


        if (sample.name !== "" && sample.structureId !== 0 && sample.image !== "" && roomNumber.current.value !== "") {
            addSample(sample).then((res) => {
                history.push(`/reports/${reportId}/samples`);
            });
        } else {
            window.alert("Please fill in Required fields")
        }

    };
    useEffect(() => {
        getStructuresByReportId(reportId);
    }, [imageUpload]);



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
                                    maxLength="100"
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
                            {/* <div className="imagePreview">
                                </div>{imageUpload ? <img src={imageUpload}/> : <p>No Image Chosen</p>}
                            </div> */}
                            <div>
                                {imageUpload ? <img src={URL.createObjectURL(imageUpload)} alt="unable to show preview"></img> : <p>No image chosen</p>}
                            </div>
                            <FormGroup>
                                <Label for="image">Upload Image</Label>
                                <Input
                                    id="image"
                                    // innerRef={image}
                                    maxLength="3500"
                                    type="file"
                                    onChange={HandleImageUpload}
                                />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="image">Image Link</Label>
                                <Input
                                    id="image"
                                    innerRef={image}
                                    maxLength="3500"
                                />
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="locationDescription">locationDescription</Label>
                                <Input
                                    id="locationDescription"
                                    innerRef={locationDescription}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="roomNumber">roomNumber</Label>
                                <Input
                                    id="roomNumber"
                                    innerRef={roomNumber}
                                    type="number"
                                />
                            </FormGroup>

                        </Form>
                        <Button color="info" onClick={submit}>
                            SUBMIT
                        </Button>
                        <Button color="info"
                            onClick={() => { history.goBack() }}>
                            Cancel
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default AddSample;