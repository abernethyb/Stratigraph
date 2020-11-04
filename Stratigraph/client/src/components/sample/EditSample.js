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
import ReactImageFallback from "react-image-fallback";

const EditSample = () => {

    const { reportId } = useParams();
    const { sampleId } = useParams();
    const { EditSample, getSingleSample } = useContext(SampleContext)
    const { addImage } = useContext(ImageContext)
    const { structures, getStructuresByReportId } = useContext(StructureContext);
    const history = useHistory();
    const name = useRef(null)
    const structureId = useRef(null)
    const dateTaken = useRef(null)
    const image = useRef(null)
    const locationDescription = useRef(null)
    const roomNumber = useRef(null)
    const [sample, setSample] = useState();
    const [imageUpload, setImageUpload] = useState();



    const HandleImageUpload = (event) => {
        setImageUpload(event.target.files[0])
        console.log(event.target.files[0])
        console.log(imageUpload)
    }

    const submit = () => {



        const editedSample = {
            id: parseInt(sampleId),
            name: name.current.value,
            stratigraphyId: parseInt(sample.stratigraphyId),
            structureId: parseInt(structureId.current.value),
            dateTaken: dateTaken.current.value,
            locationDescription: locationDescription.current.value,
            roomNumber: parseInt(roomNumber.current.value)
        };
        if (imageUpload) {


            const formData = new FormData();
            const fileName = `${new Date().getTime()}.${imageUpload.name.split('.').pop()}`
            formData.append('imageUpload', imageUpload, fileName)

            addImage(formData, fileName)
            editedSample.image = fileName;
        } else {
            editedSample.image = sample.image
        }

        console.log(structureId.current.value)

        if (editedSample.structureId == null) {
            editedSample.structureId = sample.structureId
        }
        if (editedSample.dateTaken == "") {
            editedSample.dateTaken = sample.dateTaken
        }


        if (editedSample.name !== "" && editedSample.structureId !== 0 && editedSample.image !== "" && roomNumber.current.value !== "") {
            debugger
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
                            <div>
                                {imageUpload ?
                                    <div>
                                        <hr />
                                        <p>New Image:</p>
                                        <img width="50%" src={URL.createObjectURL(imageUpload)} alt="unable to show preview"></img>
                                        <hr />
                                    </div>
                                    :
                                    <div>
                                        <hr />
                                        <p>Current Image:</p>
                                        <ReactImageFallback
                                            width="50%"
                                            src={`/api/image/${sample.image}`}
                                            fallbackImage={sample.image}
                                            alt={sample.name} />
                                        <hr />
                                    </div>}
                            </div>

                            <FormGroup>
                                <Label for="image">Change Uploaded Image</Label>
                                <Input
                                    id="image"
                                    maxLength="3500"
                                    type="file"
                                    onChange={HandleImageUpload}
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
                            onClick={() => { history.goBack() }}>
                            Cancel
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default EditSample;