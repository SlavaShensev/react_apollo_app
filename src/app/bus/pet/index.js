// Core
import React from 'react';
// Component
import {Counter} from "./counter";
import {List} from "./hooks/list";

export const Pet = () => {
    return (
        <>
            <h2> Pet </h2>
            < Counter/>
            <List/>
        </>
    )
}