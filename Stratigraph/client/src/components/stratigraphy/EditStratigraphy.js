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
import Stratigraphy from "./Stratigraphy";

const EditStratigraphy = () => {

    const { reportId, sampleId, stratigraphyId } = useParams();
    const { editStratigraphy, getSingleStratigraphy } = useContext(StratigraphyContext)
    const [stratigraphy, setStratigraphy] = useState();
    const history = useHistory();
    const notes = useRef(null)

    // {
    //     
    //     "reportId": 2,
    //     "createDate": "2020-04-27T00:00:00",
    //     "notes": "POST FROM POSTMAN ...Praesent id massa id nisl venenatis lacinia."
    // }

    const submit = () => {
        const Editedstratigraphy = {
            //createDate: createDate.current.value,
            id: parseInt(stratigraphyId),
            notes: notes.current.value
        };

        editStratigraphy(Editedstratigraphy).then((res) => {
            history.push(`/reports/${reportId}/stratigraphies/${stratigraphyId}`);
        });


    };

    useEffect(() => {
        getSingleStratigraphy(stratigraphyId).then(setStratigraphy);
    }, []);

    if (!stratigraphy) {
        return null;
    }

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
                                    defaultValue={stratigraphy.notes}
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

export default EditStratigraphy;