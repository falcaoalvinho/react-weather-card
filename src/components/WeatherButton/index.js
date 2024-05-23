import ComponentStyle from "./style.css";

export function WeatherButton(params){
    return <button onClick={params.onClick}>Consultar</button>
}