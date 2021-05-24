// Core
import React from 'react';

// Hooks
import {useQueryAllPets} from "./useQueryAllPets";

export const List = () => {
    const {loading, error, pets} = useQueryAllPets();

    if (loading) {
        return <p> Loading... </p>
    }

    if (error) {
        return (
            <p>
                We have a problem: {error.message}
            </p>
        )
    }

    const petsJSX = pets.map(({id, name, weight}) => {
        return (
            <p key={id}>
                <span> Name: {name} </span>
                <span> Weight: {weight} </span>
            </p>
        )
    })

    return (
        <>
            <h3> List </h3>
            { petsJSX }
        </>
    )
};