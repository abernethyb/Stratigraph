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
import { LayerContext } from "../../providers/LayerProvider";

const AddLayer = () => {

    const { stratigraphyId, reportId } = useParams();
    const { addLayer } = useContext(LayerContext)
    const history = useHistory();
    const finishPeriod = useRef(null)
    const beginDate = useRef(null)
    const endDate = useRef(null)
    const pigments = useRef(null)
    const colors = useRef(null)
    const medium = useRef(null)
    const gloss = useRef(null)
    const notes = useRef(null)

    // "stratigraphyId": 10,
    // "finishPeriod": "Speotyte cuniculata",
    // "beginDate": "1886-08-17T00:00:00",
    // "endDate": "2020-02-27T00:00:00",
    // "pigments": "Charadrius tricollaris",
    // "colors": "#73188a",
    // "medium": "Lorythaixoides concolor",
    // "gloss": "Phoenicopterus chilensis",
    // "notes": "POST FROM POSTMAN."

    const submit = () => {
        const layer = {
            stratigraphyId: parseInt(stratigraphyId),
            finishPeriod: finishPeriod.current.value,
            beginDate: beginDate.current.value,
            endDate: endDate.current.value,
            pigments: pigments.current.value,
            colors: colors.current.value,
            medium: medium.current.value,
            gloss: gloss.current.value,
            notes: notes.current.value
        };

        if (layer.beginDate == "") {
            layer.beginDate = null
        }
        if (layer.endDate == "") {
            layer.endDate = null
        }


        addLayer(layer).then((res) => {
            history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}`);
        });


    };


    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form encType="multipart/form-data">
                            <FormGroup>
                                <Label for="finishPeriod">Finish Period</Label>
                                <Input
                                    id="finishPeriod"
                                    innerRef={finishPeriod}
                                    maxLength="49"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="beginDate">Period Start Date</Label>
                                <Input
                                    id="beginDate"
                                    type="date"
                                    innerRef={beginDate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="endDate">Period End Date</Label>
                                <Input
                                    id="endDate"
                                    type="date"
                                    innerRef={endDate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pigments">Pigments</Label>
                                <Input
                                    id="pigments"
                                    innerRef={pigments}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="colors">Colors</Label>
                                <Input
                                    id="colors"
                                    innerRef={colors}
                                    maxLength="250"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="medium">Medium</Label>
                                <Input
                                    id="medium"
                                    innerRef={medium}
                                    maxLength="49"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gloss">Gloss</Label>
                                <Input
                                    id="gloss"
                                    innerRef={gloss}
                                    maxLength="49"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="notes">Notes</Label>
                                <Input
                                    id="notes"
                                    innerRef={notes}
                                    type="textarea"
                                    maxLength="500"
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

export default AddLayer;