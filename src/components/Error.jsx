import {useRouteError} from "react-router-dom"

export const Error = () => {
    const error = useRouteError();
 
    return (
        <div>

            <h1>
                {error.status}
            </h1>
            <h2>

               {error.statusText}

            </h2>
        </div>
    )
}