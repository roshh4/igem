import { useRef } from "react";
// import { Inspirations, InspirationLink } from "../components";
import TableOfContent from "../components/TableOfContent";
import colabs from '../images/colab.jpg';
export function Collab() {
  const CollabRef = useRef<HTMLDivElement | null>(null);
  // const links: InspirationLink[] = [
  //   { year: 2019, teamName: "Thessaly", pageName: "Human_Practices" },
  //   { year: 2019, teamName: "Linkoping_Sweden", pageName: "Human_Practices" },
  //   { year: 2019, teamName: "FDR-HB_Peru", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "William_and_Mary", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "Rochester", pageName: "uman_Practices" },
  //   { year: 2020, teamName: "Leiden", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "Baltimore_BioCrew", pageName: "Human_Practices" },
  // ];

  return (
    <>
    <header
      className="bg-hero py-5 mb-5 header"
      style={{
        backgroundImage: `url(${colabs})`,
        backgroundSize: "cover",
        backgroundPosition: "",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
       
      }}
    ></header>
      {}
      <div ref={CollabRef} className="human-practices-page-container">
        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Human-Practices-Event-at-Kalpavriksha-Tuition-Centre">
                TEAM VIT CHENNAI
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://maps.app.goo.gl/hSnG4b3oqPMY8L9U9" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="hp-add" style={{paddingLeft:'30px'}}>
                  Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu 600127 
                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>23/06/2024</span>
              </div>
              
            </div>
            <div style={{ backgroundColor: 'white', marginTop:'20px', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <ul>
        <p className="hp-activity-detail" style={{fontSize:'25px'}}>
          The iGEM REC 2024 team collaborated with the iGEM VIT 2024 team on their project focused on the overexpression of violaxanthin pigment in E. coli. 
          This project aims to maximize violaxanthin yield for commercial applications in agriculture, nutrition, and industry. 
          As part of our collaboration, we participated in a survey conducted by the VIT team to gather public feedback and insights on the project. 
          This joint effort helped enhance our understanding of the project’s potential impact. 
          Our collaboration with the VIT team has been a valuable experience, and we look forward to future opportunities to work together on further research and project optimization.
        </p>
      </ul>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScfsgtF4nkHF7EnnNStvM1saRxxU-GtWd5DGKB08DrkoygLYA/viewform" target="_" className="ref-container" style={{marginTop:'40px'}}>
              <span style={{fontSize:'30px',paddingLeft:'20px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              <span style={{fontSize:'30px',paddingLeft:'50px'}}>
                TEAM IGEM VIT CHENNAI 2024
              </span>
            </a>
          </div>
        </div>

        <div className="human-practices" style={{marginTop:'50px'}}>
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Human-Practices-Event-for-School-Students-at-REC-DST- FIST-Lab">
               TEAM ASIJ TOKYO 2024
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://maps.app.goo.gl/GKsfkwCwgoSCDi1V7" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="hp-add" style={{paddingLeft:'30px'}}>
                  The American School in Japan 1-1-1 Nomizu Chofu, Tokyo Japan 182-0031


                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>23/06/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">
                
              </span>
              <div style={{ backgroundColor: 'white', marginTop:'20px', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <ul>
        <p className="hp-activity-detail" style={{fontSize:'25px'}}>
        The iGEM REC 2024 team recently collaborated with the iGEM ASIJ team on an exciting project to host a special online event featuring guest speakers on synthetic biology. This event, scheduled for the start of the new school year, aims to cover various synthetic biology topics based on the interests of participants. To gather input, we participated in a survey conducted by the ASIJ team to identify the topics that interest the community the most. Our feedback will help shape the content and focus of the event, ensuring it meets the needs and expectations of attendees. This collaboration has provided valuable insights and contributed to the planning of a highly anticipated event in the synthetic biology community.
        </p>
      </ul>
      </div>
           </div>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLScxrR3jQ53Vj0bHIYh2CN9Ud8j2axLDbCCOeZt6PodY4ptVIA/formResponse" target="_" className="ref-container" style={{marginTop:'40px'}}>
              <span style={{fontSize:'30px',paddingLeft:'20px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </span>
              <span style={{fontSize:'30px',paddingLeft:'50px'}}>
                TEAM IGEM ASIJ TOKYO 2024
              </span>
            </a>
          </div>
        </div>

        <div className="human-practices" style={{marginTop:'50px'}}>
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Kola-Saraswathi-Vaishnav-Senior-Secondary-School-Visit">
              NU Kazakhstan Guest lecture collab
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://maps.app.goo.gl/p8nuP9hUTUyiJMyv9" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="hp-add">
                  
                  </span>
                </a>
              </div>
              
              <div className="hp-date-container">
                <span>04/07/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">
                Overview
              </span>
              <span className="content">
              <p className="hp-activity-detail" style={{fontSize:'25px'}}>
              On July 16, 2024, the iGEM REC 2024 team collaborated with the NU-Kazakhstan team for two insightful guest presentations. One presentation, delivered by Ms. Sai Sandhya, explored Xeroderma Pigmentosum (XP), detailing the genetic basis, molecular mechanisms, and the role of DNA repair genes (DDB2, ERCC1-5, POLH, XPA, and XPC) in this rare autosomal recessive disease. It also covered the high risk of skin cancer in XP patients and available treatments to manage these risks.

Another presentation, given by Dr.B. Vijaya Geetha, provided a comprehensive overview of cancer. It addressed the history, common types, prevalence, and various carcinogens (physical, chemical, biological, and hereditary). The session highlighted the impact of environmental and lifestyle factors on cancer incidence and recent findings on cancer-causing agents in everyday products and foods.

Both presentations included interactive quizzes to reinforce the concepts covered. These collaborations enhanced the team’s understanding of genetic disorders, DNA repair mechanisms, and the multifactorial origins of cancer, emphasizing the importance of public awareness and preventive measures.
        </p>              </span>
            </div>
            <div id="tableOfContents" >
            <TableOfContent
        pageRef={CollabRef}
      />
</div>
          </div>
        </div>
      </div>
      
    </>
  );
}
