// Core
import React from 'react';
// Component
import {Counter} from "./counter";
import {List} from "./list";
import {SpecialList} from "./specialList";

export const Pet = () => {
    return (
        <>
            <h2> Pet </h2>
            < Counter/>
            <List/>
            <SpecialList/>
        </>
    )
}