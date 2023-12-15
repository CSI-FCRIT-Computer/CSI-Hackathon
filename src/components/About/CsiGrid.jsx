import { useState, useEffect } from "react";
import React  from "react";
import "./About.css";
import CSI_Comp from "./images/csi-comp.JPG";
import CSI_IT from "./images/csi-it.png";
import { useInView } from 'react-intersection-observer';


const CsiGrid=()=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [smallWidth,setSmallWidth]=useState();
    const ScalingComponent = ({ children }) => {
        const [ref, inView] = useInView({
          triggerOnce: false, 
          rootMargin: '-5%', 
        });
      
        return (
          <div className={`scaling-component ${inView ? 'scale-in' : ''}`} ref={ref}>
            {children}
          </div>
        );
      };

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
          if(windowWidth<576){
            setSmallWidth(true);
          }else{
            setSmallWidth(false);
          }
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
    
        const itText=`Welcome to the Computer Society of India (CSI), a hub where technology converges with
        innovation and excellence. Committed to fostering collaboration and knowledge-sharing,
        CSI empowers individuals through continuous learning and skill development, CSI has been a driving force in technological advancements,
        evident in groundbreaking projects and cutting-edge research showcased at our events.`


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
                {!smallWidth &&
                  <div className="csi-it-pic col-12 col-sm-6">
                      <ScalingComponent>
                      <img className="img-fluid" src={CSI_IT} />
                      </ScalingComponent>
                  </div>
                }

                <div className="csi-it-text col-12 col-sm-6 "> 
                    <ScalingComponent>
                    <p className="it-text">
                   {itText}
                    </p>
                    </ScalingComponent>
                </div>
                {smallWidth &&
                  <div className="csi-it-pic col-12 col-sm-6">
                  <ScalingComponent>
                  <img className="img-fluid" src={CSI_IT} />
                  </ScalingComponent>
                  </div> 
                }
             
            </div>
        </div>
    )
}


export default CsiGrid;