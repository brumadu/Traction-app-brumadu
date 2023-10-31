import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function Logo() {
    const navigate = useNavigate();
    return (
        <Button style={{ height: "60%"}} onClick={() => navigate("/")}>
                <img src={"tractian.png"} style={{width: 200, maxWidth: "100%"}}/>
        </Button>
    )
}