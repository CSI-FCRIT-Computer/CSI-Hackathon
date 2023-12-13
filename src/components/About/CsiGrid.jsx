import React from "react";
import "./About.css";
import CSI_Comp from "./images/csi-comp.JPG";
import CSI_IT from "./images/csi-it.png";
import { useInView } from 'react-intersection-observer';


const CsiGrid=()=>{
    const ScalingComponent = ({ children }) => {
        const [ref, inView] = useInView({
          triggerOnce: false, 
          rootMargin: '-10%', // Only trigger the animation once
        });
      
        return (
          <div className={`scaling-component ${inView ? 'scale-in' : ''}`} ref={ref}>
            {children}
          </div>
        );
      };

    return(
        <div className="csi-grid">
            <div className="row">
                <div className="csi-comp-head col-12">
                <h1 >CSI Computer</h1>
                </div>
                <div className="csi-comp-text col-12 col-sm-6">
                <ScalingComponent>
                <p className="comp-text">
                Welcome to the Computer Society of India (CSI), a hub where technology converges with
                innovation and excellence. Committed to fostering collaboration and knowledge-sharing,
                CSI empowers individuals through continuous learning and skill development. With a 
                legacy spanning, CSI has been a driving force in technological advancements, 
                evident in groundbreaking projects and cutting-edge research showcased at our events.
                </p>
                </ScalingComponent>
                </div>
                <div className="csi-comp-pic col-12 col-sm-6 ">
                <ScalingComponent >
                    <img className="img-fluid" src={CSI_Comp} />
                    </ScalingComponent>

                </div>
                <div className="csi-it-head col-12">
                <h1>CSI IT</h1>
                </div>
                <div className="csi-it-pic col-12 col-sm-6">
                    <ScalingComponent>
                    <img className="img-fluid" src={CSI_IT} />
                    </ScalingComponent>
                </div>
                <div className="csi-it-text col-12 col-sm-6 ">
                    
                    <ScalingComponent>
                    <p className="it-text">
                    Welcome to the Computer Society of India (CSI), a hub where technology converges with
                    innovation and excellence. Committed to fostering collaboration and knowledge-sharing,
                    CSI empowers individuals through continuous learning and skill development. With a legacy
                    spanning [insert years], CSI has been a driving force in technological advancements,
                    evident in groundbreaking projects and cutting-edge research showcased at our events.
                    </p>
                    </ScalingComponent>

                </div>
             
            </div>
        </div>
    )
}


export default CsiGrid;