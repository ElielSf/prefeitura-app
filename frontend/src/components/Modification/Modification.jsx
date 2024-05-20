import { useLocation } from 'react-router-dom';
import './css/Modification.css';
import { useState } from 'react';

export default function Modification() {
    const {state} = useLocation();

    return (
        <h1>{state}</h1>
    )
}
