// Core
import React from 'react';
// Hooks
import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
    const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets();

    const loaderJSX = loading && (
        <p>Loading...</p>
    );

    const errorJSX = error && (
        <p>
            We have a problem: {error.message}
        </p>
    );

    const petsJSX = pets.map(({id, name, weight}) => {
        return (
            <p key={id}>
                <span> Nmae: {} </span>
                <span>  </span>
            </p>
        )
    });

    return (
        <h3>Special List</h3>
    )
};