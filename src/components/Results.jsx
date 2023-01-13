import React from "react";

const Results = (props) => {
    const {data} = props;

    return (
        <>
            <h1>Your form data</h1>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Confirm Password: {data.confirmPassword}</p>
        </>
    );
}

export default Results;