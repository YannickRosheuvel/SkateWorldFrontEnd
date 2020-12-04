import React, {useContext} from 'react';
import {UerContext, UserContext} from './UserContext';

export function HomeInfo() {
const msg = useContext(UserContext);

return(
    <div>
        <h1>{msg}</h1>
    </div>
)
}
