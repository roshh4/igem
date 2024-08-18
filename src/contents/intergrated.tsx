import { useRef } from "react";
import TableOfContent from "../components/TableOfContent";
import integ from '../images/ihp.jpg';

export function Integrated() {
  const humanPracticesRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <header
        className="bg-hero py-5 mb-5 header"
        style={{
          backgroundImage: `url(${integ})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "80vh",
        }}
      ></header>

      <div ref={humanPracticesRef} className="human-practices-page-container">
        {/* Meeting Summary with Mr. Paulo Cesar Telles de Souza */}
        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Meeting-Summary-with-Mr-Paulo-Cesar-Telles-de-Souza">
                Meeting Summary with Mr. Paulo Cesar Telles de Souza
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://www.linkedin.com/in/paulo-cesar-telles-de-souza-45924328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span className="hp-add">
                    Centre Blaise Pascal de Simulation et de Modélisation Numérique
                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>Meeting Date: 15/08/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">Overview</span>
              <span className="content">
                Discussion on the microplastics removal project, focusing on atomistic to coarse-grained (CG) model conversion, parameterization, and simulation tools.
              </span>
            </div>
            <div className="hp-activity-and-highlights">
              <span className="head">Key Discussions and Insights</span>
              <ul>
                <li>
                  <p className="hp-activity-head">Atomistic to Coarse-Grained (CG) Model Conversion</p>
                  <p className="hp-activity-detail">Strategies for converting atomistic models to CG were discussed, emphasizing simplification while maintaining essential molecular details.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Polyply</p>
                  <p className="hp-activity-detail">Introduction to Polyply, a tool for generating polymer topologies and coordinates, highlighting its utility in CG modeling.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Parameterization in Martini 2 and Martini 3</p>
                  <p className="hp-activity-detail">Detailed insights into parameterization processes for Martini 2 and Martini 3 force fields, focusing on maintaining accuracy in simulations.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Python Code and Tutorial</p>
                  <p className="hp-activity-detail">Recommendation of a GitHub-hosted tutorial for understanding and implementing parameterization in Martini force fields.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Peptide Interaction with Polymer</p>
                  <p className="hp-activity-detail">Discussion on the potential challenge of peptide penetration inside the polymer instead of binding to the surface.</p>
                </li>
                <li>
                  <p className="hp-activity-head">GROMACS Tools</p>
                  <p className="hp-activity-detail">Recommendation to use GROMACS tools, specifically Packmol, for creating simulation boxes.</p>
                </li>
                <li>
                  <p className="hp-activity-head">GMX SASA (Solvent Accessible Surface Area)</p>
                  <p className="hp-activity-detail">Emphasis on the GMX SASA tool, noting the dependence of results on the size of the CG bead.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Charge on Polymer Surface</p>
                  <p className="hp-activity-detail">Instructions on defining the charge on the polymer surface within the itp file, particularly in the "rcoulomb" section.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Electric Constants in Models</p>
                  <p className="hp-activity-detail">Clarification that there is no electric constant in solvent for CG models; polar models will include electric constants.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Solvent Models</p>
                  <p className="hp-activity-detail">Comparison between explicit and implicit solvent models, with specific mention of the "Dry Martini" model which uses implicit solvent, thereby not including solvent explicitly.</p>
                </li>
              </ul>
            </div>
            <div className="hp-outcome-container">
              <span className="head">Outcome</span>
              <span className="content">
                The meeting provided valuable insights and resources for the microplastics removal project, enhancing our understanding of CG modeling, parameterization, and simulation tools. We gained knowledge on converting atomistic to CG models, using tools like Polyply and GMX SASA, and resources such as PEP-FOLD4 and Swiss Dock.
                Integration into project:
                The acquired knowledge and tools will be applied to achieve more accurate CG model conversion and parameterization in our simulations. Resources and tools like PEP-FOLD4 and Swiss Dock will be utilized for improved structural predictions and docking simulations. Detailed instructions on defining charges and using solvent models will enhance the accuracy of our simulations. Insights on peptide interactions and other challenges will refine our project approach and troubleshooting methods.
              </span>
            </div>
          </div>
        </div>

        {/* Meeting Summary with Mr. Adhityo Wicaksono */}
        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Meeting-Summary-with-Mr-Adhityo-Wicaksono">
                Meeting Summary with Mr. Adhityo Wicaksono
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://www.linkedin.com/in/adhitwicaksono?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span className="hp-add">
                    Plant Biologist at Adhit's Biology Lab
                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>Meeting Date: 15/08/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">Overview</span>
              <span className="content">
                The team assembled to discuss their project and challenges with Mr. Adhityo Wicaksono, focusing on peptide structure prediction, docking studies, and energy minimization.
              </span>
            </div>
            <div className="hp-activity-and-highlights">
              <span className="head">Proceedings and Key Insights</span>
              <ul>
                <li>
                  <p className="hp-activity-head">Project Overview and Challenges</p>
                  <p className="hp-activity-detail">The team explained their project and outlined the problems they are facing.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Resources and Tools Provided</p>
                  <p className="hp-activity-detail">Mr. Adhityo recommended the PEP-FOLD4 for peptide structure prediction and Swiss Dock for docking studies. He also emphasized the importance of energy minimization in peptide docking.</p>
                </li>
                <li>
                  <p className="hp-activity-head">PEP-FOLD4</p>
                  <p className="hp-activity-detail">Introduction to PEP-FOLD4 for predicting peptide structures. The tool’s ability to predict peptide conformations accurately was highlighted.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Swiss Dock</p>
                  <p className="hp-activity-detail">Usage of Swiss Dock for docking studies, focusing on how it integrates peptide structures to predict interactions with targets.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Energy Minimization</p>
                  <p className="hp-activity-detail">Importance of energy minimization to refine peptide structures and improve docking results.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Project Refinement</p>
                  <p className="hp-activity-detail">Suggestions for refining the project approach, incorporating peptide structure prediction and docking studies effectively.</p>
                </li>
              </ul>
            </div>
            <div className="hp-outcome-container">
              <span className="head">Outcome</span>
              <span className="content">
                The meeting with Mr. Adhityo provided crucial insights into peptide structure prediction and docking studies. The recommendations on using PEP-FOLD4 and Swiss Dock will enhance the project’s approach to peptide interactions. The emphasis on energy minimization will improve the accuracy of docking studies.
                Integration into project:
                Incorporating PEP-FOLD4 for accurate peptide structure prediction and Swiss Dock for effective docking studies will be central to refining our project. Energy minimization techniques will be applied to optimize peptide conformations and interactions, improving overall results.
              </span>
            </div>
          </div>
        </div>

        {/* Meeting Summary with Mr. Radhe Shyam Giri and Mr. Syed Samanulla */}
        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Meeting-Summary-with-Mr-Radhe-Shyam-Giri-and-Mr-Syed-Samanulla">
                Meeting Summary with Mr. Radhe Shyam Giri and Mr. Syed Samanulla
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://www.linkedin.com/in/radhe-shyam-giri-4b26485a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span className="hp-add">
                    Central Institute of Petrochemicals Engineering & Technology (CIPET), Guindy, Chennai, Tamil Nadu
                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>Meeting Date: 15/08/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">Overview</span>
              <span className="content">
                During the integrated human practice session, we had the opportunity to interact with Mr. Radhe Shyam Giri, Assistant Professor/Technical Officer at the Department of Biodegradation at CIPET, Chennai. We began by presenting our project, ensuring he understood its core objectives. Mr. Giri elucidated the differences in microplastics properties based on density and melting temperature, as well as how toughness and brittleness are influenced by treatment temperature. He advised us to create our own microplastic samples by grinding and sieving polyethylene terephthalate (PET) from plastic bottles into a fine powder. He also mentioned various sensors to detect microplastics and explained the chemistry of functional groups in FTIR spectroscopy to identify plastic types in our samples.

                Following this, we met Mr. Syed Samanulla, Principal of CIPET, Chennai, who provided additional insights. He suggested using water samples stored in plastic containers for extended periods to validate our results. He advised us to focus our project on a specific implementation aspect, such as cosmetic industries, which use water-soluble polymers like polyvinyl alcohol and polyvinyl acetate and contain more microplastics. He emphasized that microplastic liberation is less from inert polymers like polyethylene and recommended conducting more spectroscopic studies to validate the interaction of our peptide with microplastics.
              </span>
            </div>
            <div className="hp-activity-and-highlights">
              <span className="head">Integration</span>
              <ul>
                <li>
                  <p className="hp-activity-head">Creating Microplastic Samples</p>
                  <p className="hp-activity-detail">Create microplastic samples from PET bottles by grinding and sieving.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Detection and Analysis</p>
                  <p className="hp-activity-detail">Use sensors and FTIR spectroscopy for detection and analysis of microplastics.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Focus on Cosmetic Products</p>
                  <p className="hp-activity-detail">Target the project on microplastics in cosmetic products, which contain more water-soluble polymers.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Spectroscopic Studies</p>
                  <p className="hp-activity-detail">Conduct extensive spectroscopic studies to validate peptide-microplastic interactions.</p>
                </li>
              </ul>
            </div>
            <div className="hp-outcome-container">
              <span className="head">Outcome</span>
              <span className="content">
                The insights from Mr. Giri and Mr. Samanulla were instrumental in refining our project approach. We have integrated their advice into our project by focusing on creating microplastic samples, using sensors and FTIR for detection, targeting cosmetic products, and conducting detailed spectroscopic studies.
              </span>
            </div>
          </div>
        </div>

        <TableOfContent pageRef={humanPracticesRef} />
      </div>
    </>
  );
}