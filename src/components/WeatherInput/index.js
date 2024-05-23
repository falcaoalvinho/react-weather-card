import { useState } from 'react';
import ComponentStyle from './style.css';

export function WeatherInput(params){
    return(<input onChange={params.onChange}/>);
}