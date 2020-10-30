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
import { StratigraphyContext } from "../../providers/StratigraphyProvider";

const AddStratigraphy = () => {

    const { reportId, sampleId } = useParams();
    const { addStratigraphy } = useContext(StratigraphyContext)
    const history = useHistory();
    const notes = useRef(null)

    // {
    //     
    //     "reportId": 2,
    //     "createDate": "2020-04-27T00:00:00",
    //     "notes": "POST FROM POSTMAN ...Praesent id massa id nisl venenatis lacinia."
    // }

    const submit = () => {
        const stratigraphy = {
            reportId: parseInt(reportId),
            //createDate: createDate.current.value,
            notes: notes.current.value,
            initialSampleId: parseInt(sampleId)
        };

        addStratigraphy(stratigraphy).then((res) => {
            history.push(`/reports/${reportId}/stratigraphies/${res.id}`);
        });


    };

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form encType="multipart/form-data">
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
                            onClick={() => { history.push(`/`) }}>
                            Cancel
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default AddStratigraphy;