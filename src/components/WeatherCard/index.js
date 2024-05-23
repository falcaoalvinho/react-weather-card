import ComponentStyle from './style.css';
import styled from 'styled-components';
import { useState } from "react";

export function WeatherCard(params){
    return (
        <div>
            <h1>{params.temperature}</h1>
            <div>
                <h2>{params.capital}</h2>
                <h3>{params.weather}</h3>
            </div>
        </div>
    )

}