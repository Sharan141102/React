import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    //const { status, statusText } = err;

    return (
        <div>
            <h1>Error</h1>
            <h2>Something went wrong</h2>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
}

export default Error;