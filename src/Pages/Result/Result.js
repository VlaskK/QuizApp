import { useEffect } from "react";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import "./Result.css";
const Result = ({name, score}) => {

    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push('./');
        }
    }, [name, history])

    return (
        <div className="result">
            <span className="title"> Finale score: {score} </span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                Go home
            </Button>
        </div>
    )
}

export default Result;