import React, { useEffect, useContext, useState, useRef } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, CardImg, Form, Table, FormGroup, Label, Input } from "reactstrap";
import { StructureContext } from "../../providers/StructureProvider";
import Image from 'react-bootstrap/Image'
import { SampleContext } from "../../providers/SampleProvider";
import { ImageContext } from "../../providers/ImageProvider";
import ReactImageFallback from "react-image-fallback";


const StratLinkSampleList = () => {
    const { reportId, stratigraphyId } = useParams();
    const { samples, getSamplesByReportId, searcSamplesByRoomViaReport, LinkStratigraphy, UnLinkStratigraphy } = useContext(SampleContext);
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
                    <div>
                        <Button color="info"
                            style={{ margin: 10 }}
                            onClick={() => { history.push(history.goBack()) }}>
                            Back
                        </Button>
                    </div>

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
                            <h2>Choose a sample to link</h2>
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
                                        {sample.stratigraphyId == stratigraphyId ?
                                            <Button color="info"
                                                style={{ margin: 10 }}
                                                disabled
                                            >Already Linked</Button>

                                            :
                                            (
                                                sample.stratigraphyId ?
                                                    <Button color="info"
                                                        disabled
                                                        style={{ margin: 10 }}
                                                    >Linked to different Stratigraphy</Button>
                                                    :
                                                    <Button color="info"
                                                        style={{ margin: 10 }}
                                                        onClick={() => { LinkStratigraphy(sample.id, stratigraphyId).then(history.push(history.goBack())) }}
                                                    >Link to Stratigraphy</Button>
                                            )

                                        }

                                    </th>
                                    <td>
                                        <Link to={`/reports/${reportId}/samples/${sample.id}`}>
                                            <ReactImageFallback
                                                width="50%"
                                                src={`/api/image/${sample.image}`}
                                                fallbackImage={sample.image}
                                                alt={sample.name} />
                                        </Link>

                                    </td>

                                    <td>
                                        {sample.dateTaken && `${new Date(sample.dateTaken).getMonth() + 1}/${new Date(sample.dateTaken).getDate()}/${new Date(sample.dateTaken).getFullYear()}`}
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

export default StratLinkSampleList;
