import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Register() {
    const history = useHistory();
    const { register } = useContext(UserProfileContext);

    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Please try again.");
        } else {
            const userProfile = { firstname, lastname, username, email };
            register(userProfile, password)
                .then(() => history.push("/"));
        }
    };

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>


                        <Form onSubmit={registerClick}>
                            <fieldset>
                                <FormGroup>
                                    <Label htmlFor="firstname">First Name</Label>
                                    <Input id="firstname" type="text" onChange={e => setFirstName(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Input id="lastname" type="text" onChange={e => setLastName(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" type="text" onChange={e => setUsername(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Button>Register</Button>
                                </FormGroup>
                            </fieldset>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}