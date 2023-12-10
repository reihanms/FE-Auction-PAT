export function Footer(){
    return(
        <div className="footer">
            <div className="footer-icons">
                <img src="assets/ig-icon.png" alt="Image" class="img-fluid footer-icon" style={{marginLeft: "5px", marginRight: "5px"}}/>
                <img src="assets/x-icon.png" alt="Image" class="img-fluid footer-icon" style={{marginLeft: "5px", marginRight: "5px"}}/>
                <img src="assets/yt-icon.png" alt="Image" class="img-fluid footer-icon" style={{marginLeft: "5px", marginRight: "5px"}}/>
            </div>
            <div className="footer-text">
                <a>About Us</a>
                <a>Term of Use</a>
                <a>Privacy Police</a>
                <a>FAQ</a>
            </div>
        </div>
    );
}
