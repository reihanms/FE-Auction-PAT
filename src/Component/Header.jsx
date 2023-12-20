import { useAuth } from "../helpers/hooks/Authentication";
import { useNavigate } from "react-router-dom";

export function Header(){
    const { user } = useAuth()
    const navigate = useNavigate()
    return(
            <div className="header">
                <div>
                <img src="/assets/av-logo.png" alt="Image" className="img-fluid header-logo" onClick={() => navigate(`/home`)}/>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginLeft: "auto", marginEnd: "0px"}}>
                    <h1 className="header-text">{user?.name}</h1>
                    <img src={user?.profile_picture ? user.profile_picture : "/assets/profile.png"}  style={{ height: "60px", margin: "auto"}}/>
                </div>
            </div>
    );
}
