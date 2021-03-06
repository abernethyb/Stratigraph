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
import { ImageContext } from "../../providers/ImageProvider";

const AddStructure = () => {

    const { reportId } = useParams();
    const { addStructure } = useContext(StructureContext)
    const { addImage } = useContext(ImageContext)
    const history = useHistory();
    const name = useRef(null)
    const image = useRef(null)
    const location = useRef(null)
    const yearCunstructed = useRef(null)
    const [imageUpload, setImageUpload] = useState();

    const HandleImageUpload = (event) => {
        setImageUpload(event.target.files[0])
        console.log(event.target.files[0])
        console.log(imageUpload)
    }


    const submit = () => {

        if (imageUpload) {

            const formData = new FormData();
            const fileName = `${new Date().getTime()}.${imageUpload.name.split('.').pop()}`
            formData.append('imageUpload', imageUpload, fileName)

            addImage(formData, fileName)

            const structure = {
                reportId: parseInt(reportId),
                name: name.current.value,
                image: fileName,
                location: location.current.value,
                yearCunstructed: parseInt(yearCunstructed.current.value)
            };

            if (yearCunstructed.current.value == "") {
                structure.yearCunstructed = null;
            }

            if (structure.name !== "") {
                addStructure(structure).then((res) => {
                    history.push(`/reports/${reportId}/structures`);
                });
            } else {
                window.alert("Please add a name")
            }

        } else {
            window.alert("Please Upload an image")
        }

    };

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
                                    maxLength="250"
                                />
                            </FormGroup>
                            <div>
                                <hr />
                                {imageUpload ? <img width="50%" src={URL.createObjectURL(imageUpload)} alt="unable to show preview"></img> : <p>No image chosen</p>}
                            </div>
                            <FormGroup>
                                <Label for="image">Upload Image</Label>
                                <Input
                                    id="image"
                                    maxLength="3500"
                                    type="file"
                                    onChange={HandleImageUpload}
                                />
                            </FormGroup>
                            <hr />

                            <FormGroup>
                                <Label for="location">Address</Label>
                                <Input
                                    id="location"
                                    innerRef={location}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="yearCunstructed">Year Constructed (YYYY)</Label>
                                <Input
                                    id="yearCunstructed"
                                    innerRef={yearCunstructed}
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

export default AddStructure;