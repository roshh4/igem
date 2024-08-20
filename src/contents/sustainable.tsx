import { useRef } from "react";
// import head_img from '../images/sust.png';
export function Sustainable() {
  const sustainableRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
 <header
      className="bg-hero py-5 mb-5 header"
      style={{
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundPosition: "right-center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "80vh",
        
      }}
    >
   
    </header>
      <div ref={sustainableRef} className="sustainable-page-container">
        <div className="sustainable-goal-container">
          <h2 id="toc-item-Sustainable-Development-Goal-3:-good-health-and well-being">
            Sustainable Development Goal 3: Good Health and Well-being
          </h2>
          
          <div className="hover-content">
            <p>
            <div className="sus-content">
            Having a foreign particle like microplastic in the body is not good for us (or any animal). It might lead to many health issues like oxidative stress, metabolic disruption, immune system reactions, neurotoxicity, and reproductive and developmental issues for humans and other organisms.
            <br />
            Our primary goal is to reduce the amount of microplastic entering the environment, thereby preventing the entry of microplastics into our bodies, which will promote good health and well-being.
          </div>
            <h4>References</h4>
            <a href="https://www.sciencedirect.com/science/article/pii/S0160412024003374" target="_" className="ref-container">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              <span>
                Microplastics in human blood: Polymer types, concentrations, and characterization using μFTIR
              </span>
            </a>
            <a href="https://www.sciencedirect.com/science/article/pii/S0160412020322297" target="_" className="ref-container">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              <span>
                Plasticenta: First evidence of microplastics in human placenta
              </span>
            </a>
             
            </p>
          </div>
          <div className="sus-ref-container">
            
          </div>
        </div>

        <div className="sustainable-goal-container">
          <h2 id="toc-item-Sustainable-Development-Goal-14:life-below-water">Sustainable Development Goal 14: Life Below Water</h2>
          
          <div className="hover-content">
            <p>
            <div className="sus-content">
            Just like us, marine life is also affected by microplastics in the ocean; they consume microplastics thinking it's food, which leads to fatal consequences for some marine species.
            <br />
            Our project aims to reduce the amount of microplastic entering water bodies, thereby conserving life below water.
          </div>
            <h4>References</h4>
            <a href="https://journals.openedition.org/factsreports/5257#" target="_" className="ref-container">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              <span>
                Microplastics in our oceans and marine health
              </span>
            </a>
            <a href="https://www.sciencedirect.com/science/article/pii/S0160412020322297" target="_" className="ref-container">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              <span>
                Plasticenta: First evidence of microplastics in human placenta
              </span>
            </a>
            </p>
          </div>
          <div className="sus-ref-container">
            
          </div>
        </div>
      </div>
    </>
  );
}
