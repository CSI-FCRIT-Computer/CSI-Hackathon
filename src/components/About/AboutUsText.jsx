import {React} from "react";
import "./About.css";
import "./FadeInOut";
import FadeInOut from "./FadeInOut";

const AboutUsText=()=>{


    return(
        <div className="about-us-text">
            <h1> ABOUT US</h1>
            <FadeInOut >
            <p>
            Established in 1994 as an extension of the pioneering efforts of the Agnel Ashram fathers, 
            FCRIT stands as a beacon of excellence in technical education. A leading engineering college in Mumbai, 
            FCRIT has consistently achieved at least one university 1st rank annually since its first graduating batch.
            Acknowledged for imparting high-quality value-based technical education,
            the Government of Maharashtra awarded FCRIT an A grade in its first assessment.
            </p>
            </FadeInOut>
        </div>
    )

}

export default AboutUsText;