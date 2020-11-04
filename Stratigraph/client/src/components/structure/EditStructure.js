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
import ReactImageFallback from "react-image-fallback";
import { ImageContext } from "../../providers/ImageProvider";


const EditStructure = () => {

    const { structureId, reportId } = useParams();
    const { EditStructure, getSingleStructure } = useContext(StructureContext)
    const { addImage } = useContext(ImageContext)
    const history = useHistory();
    const name = useRef(null)
    const image = useRef(null)
    const location = useRef(null)
    const yearCunstructed = useRef(null)
    const [structure, setStructure] = useState();
    const [imageUpload, setImageUpload] = useState();



    const HandleImageUpload = (event) => {
        setImageUpload(event.target.files[0])
        console.log(event.target.files[0])
        console.log(imageUpload)
    }

    const submit = () => {
        const Editedstructure = {
            id: parseInt(structureId),
            reportId: parseInt(structure.reportId),
            name: name.current.value,
            location: location.current.value,
            yearCunstructed: parseInt(yearCunstructed.current.value)
        };
        if (imageUpload) {


            const formData = new FormData();
            const fileName = `${new Date().getTime()}.${imageUpload.name.split('.').pop()}`
            formData.append('imageUpload', imageUpload, fileName)

            addImage(formData, fileName)
            Editedstructure.image = fileName;
        } else {
            Editedstructure.image = structure.image
        }


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
                                            src={`/api/image/${structure.image}`}
                                            fallbackImage={structure.image}
                                            alt={structure.name} />
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