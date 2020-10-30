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
import { ReportContext } from "../../providers/ReportProvider";

const EditReport = () => {

    const { EditReport, getSingleReport } = useContext(ReportContext);
    const [report, setReport] = useState();
    const history = useHistory();
    const name = useRef(null)
    const { reportId } = useParams();

    const submit = () => {
        const Updatedreport = {
            id: parseInt(reportId),
            name: name.current.value,
            createDate: report.createDate,
            completeDate: report.completeDate
        };


        if (report.name !== "") {

            EditReport(Updatedreport)
                .then(() => history.push(`/`));

            //     EditReport(Updatedreport).then((res) => {
            //         history.push(`/reports/${res.id}`);
            // });
        } else {
            window.alert("Please add a name")
        }

    };

    useEffect(() => {
        getSingleReport(reportId).then(setReport);
    }, []);

    if (!report) {
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
                                    defaultValue={report.name}
                                    innerRef={name}
                                    maxLength="250"
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

export default EditReport;