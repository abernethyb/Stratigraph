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
import { useHistory } from "react-router-dom";
import { ReportContext } from "../../providers/ReportProvider";

const AddReport = () => {

    const { addReport } = useContext(ReportContext);
    const history = useHistory();
    const name = useRef(null)

    const submit = () => {
        const report = {
            name: name.current.value
        };


        if (report.name !== "") {
            addReport(report).then((res) => {
                history.push(`/reports/${res.id}`);
            });
        } else {
            window.alert("Please add a name")
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

export default AddReport;