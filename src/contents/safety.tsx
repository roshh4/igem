import { useRef } from "react";
import TableOfContent from "../components/TableOfContent";
import safeties from '../images/safety.png';

export function Safety() {
  const safetyRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <header
        className="bg-hero py-5 mb-5 header"
        style={{
          backgroundImage: `url(${safeties})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          marginTop:"2px",
        }}
      ></header>
      
      <div ref={safetyRef} className="safety-page-container">
        <div className="safety-section">
        
          <div className="safety-header-container">
          <TableOfContent pageRef={safetyRef} />
            <div className="safety-title-container">
              <h2 className="safety-title" id="toc-item-PPE">
                PPE
              </h2>
            </div>
            <div className="safety-content-container">
              <p>
                Our team uses Lab coats, Aprons, Gloves, Mask, Closed toe shoes while working in the lab so as to reduce the risk of injury. We were trained for proper use which involves inspecting PPE before use, correct donning and doffing procedures, and maintaining and storing PPE correctly. Our team ensures effective protection and minimizes the risk of exposure incidents. The pipette tips and the gel utilized were carefully discarded after use along with the gloves that were worn.
              </p>
            </div>
          </div>
        </div>

        <div className="safety-section">
          <div className="safety-header-container">
            <div className="safety-title-container">
              <h2 className="safety-title" id="toc-item-BIOSAFETY">
                BIOSAFETY
              </h2>
            </div>
            <div className="safety-content-container">
              <p>
                Our team works in BSL-1 level labs; regular fumigation of the lab is done. We use non-hazardous and safe components. Our team ensured a high level of safety. The E.coli K-12, BL-21, JM-109 strain is non-pathogenic and harmless in nature and comes under the iGEM whitelist organisms. Level 1 biosafety applies to the organism that we selected. Everything that we used in our studies was on the whitelist. Our team obtained certification after completing training in "laboratory experiment biosafety procedures". Furthermore, a training session covering general wet lab protocols and biosafety requirements for our investigations was provided to students doing wet lab experiments.
              </p>
            </div>
          </div>
        </div>

        <div className="safety-section">
          <div className="safety-header-container">
            <div className="safety-title-container">
              <h2 className="safety-title" id="toc-item-CHEMICAL-SAFETY">
                CHEMICAL SAFETY
              </h2>
            </div>
            <div className="safety-content-container">
              <p>
                Our team members are trained in chemical safety protocols and emergency procedures. The use of ethidium bromide during gel electrophoresis was the sole exception. Because of its carcinogenic properties, this substance is toxic. The intercalating chemical was kept in a secure location and handled with gloves at all times. This agent was kept out of the direct sunlight, in a cool, well-ventilated space, and away from other chemicals and fire hazards. When working with cadmium chloride, our team followed the strictest safety guidelines. Given that this chemical is quite concerning. We use fume hoods while handling volatile chemicals. We keep incompatible chemicals separately. We label all Containers clearly with the chemical name, date received/opened. We regularly review and update safety protocols to comply with current regulations and guidelines.
              </p>
            </div>
          </div>
        </div>

        <div className="safety-section">
          <div className="safety-header-container">
            <div className="safety-title-container">
              <h2 className="safety-title" id="toc-item-FIRE-SAFETY-PROTOCOL">
                FIRE SAFETY PROTOCOL
              </h2>
            </div>
            <div className="safety-content-container">
              <p>
                Our lab has Smoke Detectors installed in key areas and are regularly tested. We ensure there is adequate Electrical Safety in our laboratory. This is taken care of by avoiding overload of electrical outlets and by regularly inspecting electrical equipment for faults. We make sure that we store flammable materials away from ignition sources and in appropriate containers. Our lab is equipped with fire extinguishers. Our teammates know how to operate a fire extinguisher by using the PASS method (Pull, Aim, Squeeze, Sweep).
              </p>
            </div>
          </div>
        </div>

        <div className="safety-section">
          <div className="safety-header-container">
            <div className="safety-title-container">
              <h2 className="safety-title" id="toc-item-WASTE-DISPOSAL-HANDLING">
                WASTE DISPOSAL & HANDLING
              </h2>
            </div>
            <div className="safety-content-container">
              <p>
                Our team ensured that we always have an Instructor and Investigators to assist and guide our work. We have important safety features such as waste disposal units, first aid kits to help us in case of emergency. Gloves and mask were always removed and disposed of properly according to our safety guidelines. Disposable gloves were disposed of with other hazardous lab waste; they were never cleaned or used again. For safety, strict adherence to handwashing guidelines was upheld. The pathogenic waste is autoclaved properly before disposal to kill the pathogen and the liquid waste is treated with disinfectant prior to disposal. Also, the waste is segregated based on the source into categories: non-hazardous, hazardous, biological, sharps, and chemical waste.
              </p>
            </div>
          </div>
        </div>

        <div className="safety-section">
          <div className="safety-header-container">
            <div className="safety-title-container">
              <h2 className="safety-title" id="toc-item-STERILIZATION-SAFETY-PROTOCOL">
                STERILIZATION SAFETY PROTOCOL
              </h2>
            </div>
            <div className="safety-content-container">
              <p>
                Our team members are trained in the correct operation of sterilization equipment and the handling of sterilized items. Before sterilization, we used to clean and remove any residues that could interfere with the process. During autoclaving, we also ensure that items are placed to allow steam penetration and that load indicators are used to confirm sterilization. Our team members, while using chemical disinfectants, adhere to recommended concentrations and contact times, and ensure proper ventilation. We always wear appropriate PPE, such as gloves and lab coats, to protect against burns, chemical exposure, and contamination. After sterilization, we handle items with sterilized tools or gloves to maintain sterility. We regularly maintain and validate the sterilization equipment which is essential to ensure effectiveness. Also, strict adherence to these protocols minimizes the risk of contamination and ensures a safe and effective laboratory environment. Our laboratory incorporates autoclaving, a highly effective method of sterilization used in laboratories to eliminate microbial life. Dry heat sterilization is also another method used in our laboratory to sterilize materials that can withstand high temperatures without moisture. It is particularly useful for glassware, metal instruments, and powders. Chemical sterilization involves the use of chemical agents (e.g., ethylene oxide, glutaraldehyde, peracetic acid, ethanol, bleach) to destroy all forms of microbial life, including spores, on laboratory equipment and surfaces, as this method is suitable for heat-sensitive items.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
