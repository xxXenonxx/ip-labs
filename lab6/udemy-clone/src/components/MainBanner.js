import banner from '../assets/banner.jpg'

export default function MainBanner() {
    return (
        <div style={{ position: "relative" }}>
            <img src={banner}
                style={{ width: "90%", margin: "0 auto", display: "block" }}
            />
            <div style={{
                position: "absolute",
                top: "60px",
                left: "120px",
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                fontSize: "16px",
                width: "400px",
                height: "200px",
                color: "#323232ff"
            }}>
                <b style={{fontSize: "32px"}}>Learn more, spend less — Black Friday Sale from E£279.99</b>
                <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
            </div>

        </div>

    );

}