import React, { useEffect, useContext, useState, useRef } from "react";
//import { ListGroup, ListGroupItem, Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, Container } from "reactstrap";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, CardImg, Form, Table, FormGroup, Label, Input } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";
import Image from 'react-bootstrap/Image'
import { SampleContext } from "../../providers/SampleProvider";
import { ImageContext } from "../../providers/ImageProvider";


const SampletList = () => {
    const { reportId } = useParams();
    //const { structureId } = useParams();
    const { samples, getSamplesByReportId, searcSamplesByRoomViaReport } = useContext(SampleContext);
    const { getImageUrl } = useContext(ImageContext);
    const history = useHistory();
    const roomNumbersearch = useRef(null);
    const [search, setsearch] = useState();



    const submit = () => {
        const roomSearch = parseInt(roomNumbersearch.current.value)

        if (roomNumbersearch.current.value == "") {
            getSamplesByReportId(reportId);
        } else {

            searcSamplesByRoomViaReport(reportId, roomSearch)
        }


    };


    useEffect(() => {
        getSamplesByReportId(reportId);
    }, []);

    if (!samples) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">
                    <Button color="info"
                        style={{ margin: 10 }}
                        onClick={() => { history.push(history.goBack()) }}>
                        Back
                    </Button>
                    <Button color="success"

                        onClick={() => { history.push(`/reports/${reportId}/samples/add`) }}
                    >
                        Add Sample
                    </Button>
                    {/* <Form class="example" action="action_page.php">
                        <input type="text" placeholder="Search.." name="search">
                            <button type="submit"><i class="fa fa-search"></i></button>
                    </form> */}
                    <hr />
                    <FormGroup>
                        <Label for="roomNumbersearch">Search by Room</Label>
                        <Input
                            id="roomNumbersearch"
                            type="search"
                            placeholder="ex: 201"
                            innerRef={roomNumbersearch}

                        />
                        <Button color="info" onClick={submit}>
                            SEARCH
                        </Button>
                    </FormGroup>


                    <Table>

                        <thead>
                            <h2>All Samples</h2>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Date Taken</th>
                                <th>Location Description</th>
                                <th>Room Number</th>
                            </tr>
                        </thead>

                        {samples.map((sample) => (
                            <tbody key={sample.id}>
                                <tr>
                                    <th scope="row">

                                        <Link to={`/reports/${reportId}/samples/${sample.id}`}>
                                            {sample.name}
                                        </Link>
                                        <hr />
                                        {sample.stratigraphyId ?
                                            <Button color="info"
                                                style={{ margin: 10 }}
                                                ///reports/:reportId(\d+)/stratigraphies/:stratigraphyId(\d+)
                                                onClick={() => { history.push(`/reports/${reportId}/stratigraphies/${sample.stratigraphyId}`) }}
                                            >View Stratigraphy</Button>

                                            :
                                            <Button color="info"
                                                style={{ margin: 10 }}
                                                ///reports/:reportId(\d+)/stratigraphies/add/:sampleId(\d+)
                                                onClick={() => { history.push(`/reports/${reportId}/stratigraphies/add/${sample.id}`) }}
                                            >Add Stratigraphy</Button>

                                        }

                                        <Button color="warning"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/samples/edit/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/edit/${sample.id}`) }}
                                        >Edit</Button>
                                        <Button color="danger"
                                            style={{ margin: 10 }}
                                            ///reports/:reportId(\d+)/samples/delete/:sampleId(\d+)
                                            onClick={() => { history.push(`/reports/${reportId}/samples/delete/${sample.id}`) }}

                                        >DELETE</Button>

                                    </th>
                                    <td>
                                        <Image fluid rounded src={`/api/image/${sample.image}`} alt={sample.name}></Image>

                                    </td>

                                    <td>
                                        {sample.dateTaken}
                                    </td>
                                    <td>
                                        {sample.locationDescription}
                                    </td>
                                    <td>
                                        {sample.roomNumber}
                                    </td>

                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default SampletList;
