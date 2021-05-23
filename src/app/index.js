// Core
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

// Other
import {client} from "./init/client";
import {Pet} from "./bus/pet";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <h1> App </h1>
            <Pet/>

        </ApolloProvider>
    )

};