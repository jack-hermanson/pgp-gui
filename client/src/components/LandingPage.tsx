import { FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from "jack-hermanson-component-lib";

export const LandingPage: FunctionComponent = () => {
    const history = useHistory();

    useEffect(() => {
        history.replace("/encrypt");
    }, [history]);

    return (
        <div>
            <LoadingSpinner />
        </div>
    );
};
