import { useLocation } from "react-router-dom";

export default function NoMatch() {
    let location = useLocation();

    return <>
        <h1>Oops!</h1>
        <h3>Sorry, an unexpected error has occured.</h3>
        <h5>Does not exist: {location.pathname}</h5>
    </>
}