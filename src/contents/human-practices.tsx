import { useRef } from "react";
// import { Inspirations, InspirationLink } from "../components";
import TableOfContent from "../components/TableOfContent";
import human_prac from '../images/human_practices.png';
export function HumanPractices() {
  const humanPracticesRef = useRef<HTMLDivElement | null>(null);
  // const links: InspirationLink[] = [
  //   { year: 2019, teamName: "Thessaly", pageName: "Human_Practices" },
  //   { year: 2019, teamName: "Linkoping_Sweden", pageName: "Human_Practices" },
  //   { year: 2019, teamName: "FDR-HB_Peru", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "William_and_Mary", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "Rochester", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "Leiden", pageName: "Human_Practices" },
  //   { year: 2020, teamName: "Baltimore_BioCrew", pageName: "Human_Practices" },
  // ];s

  return (
    <>
    <header
      className="bg-hero py-5 mb-5 header"
      style={{
        backgroundImage: `url(${human_prac})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "80vh",
        marginTop:"5px",
      }}
    ></header>
      {
      <TableOfContent
      pageRef={humanPracticesRef}
    />/* <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Silver Medal Criterion #2</h4>
            <p>
              Explain how you have determined your work is responsible and good
              for the world.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>

          <div className="bd-callout bd-callout-info">
            <h4>Best Integrated Human Practices</h4>
            <p>
              How does your project affect society and how does society
              influence the direction of your project? How might ethical
              considerations and stakeholder input guide your project purpose
              and design and the experiments you conduct in the lab? How does
              this feedback enter into the process of your work all through the
              iGEM competition? Document a thoughtful and creative approach to
              exploring these questions and how your project evolved in the
              process to compete for this award!
            </p>
            <p>
              To compete for the Best Integrated Human Practices prize, select
              the prize on the{" "}
              <a href="https://competition.igem.org/deliverables/judging-form">
                judging form
              </a>{" "}
              and describe your work on this page.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/awards">
                2024 Awards Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Overview</h2>
          <hr />
          <p>
            At iGEM we believe societal considerations should be upfront and
            integrated throughout the design and execution of synthetic biology
            projects. “Human Practices” refers to iGEM teams' efforts to
            actively consider how the world affects their work and their work
            affects the world. Through your Human Practices activities, your
            team should demonstrate how you have thought carefully and
            creatively about whether your project is responsible and good for
            the world. We invite you to explore issues relating (but not
            limited) to the ethics, safety, security, and sustainability of your
            project, and to show how this exploration feeds back into your
            project purpose, design, and execution.
          </p>
          <p>
            Please note you can compete for the Silver Medal criterion #2 and
            the Best Integrated Human Practices prize with this page.
          </p>
          <p>
            For more information, please see the{" "}
            <a href="https://responsibility.igem.org/human-practices/what-is-human-practices">
              Human Practices Hub
            </a>
            .
          </p>
          <p>
            On this page, your team should document all of your Human Practices
            work and activities. You should write about the Human Practices
            topics you considered in your project, document any activities you
            conducted to explore these topics (such as engaging with experts and
            stakeholders), describe why you took a particular approach
            (including referencing any work you built upon), and explain if and
            how you integrated takeaways from your Human Practices work back
            into your project purpose, design and/or execution.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div> */}
      <div ref={humanPracticesRef} className="human-practices-page-container">
        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Human-Practices-Event-at-Kalpavriksha-Tuition-Centre">
                Human Practices Event at Kalpavriksha Tuition Centre
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://maps.app.goo.gl/ieG7x5xpxgJgKa6x9" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="hp-add">
                    3/621, SH 49, Govindan Nagar, Palavakkam Baaz Avenue, Chennai, Tamil Nadu 600041
                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>23/06/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">
                Overview
              </span>
              <span className="content">
                On June 23, 2024, the team visited Kalpavriksha Tuition Centre to engage with students and introduce them to synthetic biology and microplastics.
              </span>
            </div>
            <div className="hp-activity-and-highlights">
              <span className="head">
                Key Activities and Highlights
              </span>
              <ul>
                <li>
                  <p className="hp-activity-head">Team Introduction</p>
                  <p className="hp-activity-detail">Eniya and Sai Sandhya introduced themselves and the team to the students.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Student Introductions</p>
                  <p className="hp-activity-detail">The students were asked to introduce themselves, fostering a friendly and interactive environment.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Survey Form Distribution</p>
                  <p className="hp-activity-detail">Priya Darshini distributed survey forms to the students, which were to be filled out after the session.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Introduction to Syn-Bio</p>
                  <p className="hp-activity-detail">Kamakshi introduced the term "Syn-Bio" (Synthetic Biology) to the children, providing practical examples to enhance their understanding.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Overview of IGEM Rec Chennai</p>
                  <p className="hp-activity-detail">Kadhiravan provided a brief introduction about IGEM Rec Chennai and its journey.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Project Explanation and Awareness</p>
                  <p className="hp-activity-detail">Jothi Murugan and Jeevananthan explained the current project and discussed its importance and awareness aspects.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Synthetic Biology Tools</p>
                  <p className="hp-activity-detail">Sai Krupa and Loka explained various synthetic biology tools and their everyday applications.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Form Collection and Q&A Session</p>
                  <p className="hp-activity-detail">After the session, the survey forms were collected. The students were then given the opportunity to ask questions and clarify any doubts.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Skit by Children</p>
                  <p className="hp-activity-detail">The children performed a skit on synthetic biology and microplastics, demonstrating their understanding of the topics.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Distribution of Giveaways</p>
                  <p className="hp-activity-detail">The session concluded with the distribution of giveaways to the students as a token of appreciation for their participation.</p>
                </li>
              </ul>
            </div>
            <div className="hp-outcome-container">
              <span className="head">Outcome</span>
              <span className="content">
                The event successfully introduced students to synthetic biology and microplastics, sparking their interest and engagement. The interactive session, practical examples, and activities made the learning experience enjoyable. We also gained a deeper understanding of effectively communicating complex scientific topics to a younger audience, enhancing our teaching skills and reinforcing our knowledge of synthetic biology.
              </span>
            </div>
          </div>
        </div>

        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Human-Practices-Event-for-School-Students-at-REC-DST- FIST-Lab">
                Human Practices Event for School Students at REC DST- FIST Lab
              </h2>
            </div>
            <div className="hp-extra-container">
              <div className="hp-addrress-container">
                <a href="https://maps.app.goo.gl/p8nuP9hUTUyiJMyv9" target="_">
                  <span className="loc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="hp-add">
                  Rajalakshmi Engineering College
                  Vellore - Chennai Rd, Rajalakshmi Nagar, Thandalam, Mevalurkuppam, Tamil Nadu 602105
                  </span>
                </a>
              </div>
              <div className="hp-date-container">
                <span>23/06/2024</span>
              </div>
            </div>
            <div className="hp-overview-container">
              <span className="head">
                Overview
              </span>
              <span className="content">
                The Human Practices event, guided by Dr. Hemalatha and IIT Professor Anupama, was conducted for school students ranging from 7th to 11th grade at the FIST lab(Fund for Improvement of S&T Infrastructure) . The event aimed to introduce the students to synthetic biology and the iGEM Rec Chennai team.
              </span>
            </div>
            <div className="hp-activity-and-highlights">
              <span className="head">
                Key Activities and Highlights
              </span>
              <ul>
                <li>
                  <p className="hp-activity-head">Student Visits</p>
                  <p className="hp-activity-detail">School students from various schools visited the FIST lab, providing a diverse and enthusiastic group.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Team Introduction</p>
                  <p className="hp-activity-detail">The iGEM summer camp team members Lokaveenasri, Saikrupa, Ajay Karthick, and Lokeshwaran addressed the students, giving a brief introduction about themselves and the event.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Introduction to Synthetic Biology</p>
                  <p className="hp-activity-detail">The team explained the basics of synthetic biology, making the complex subject approachable and interesting for the students.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Overview of iGEM Rec Chennai</p>
                  <p className="hp-activity-detail">Detailed insights into the iGEM Rec Chennai team were shared, highlighting their journey, achievements, and ongoing projects.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Interactive Session</p>
                  <p className="hp-activity-detail">The event was highly interactive, with students engaging in discussions, asking questions, and participating in activities to better understand synthetic biology concepts.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Team Involvement</p>
                  <p className="hp-activity-detail">Lokeshwaran SB, Lokaveenasri D, Ajay Karthick, and Sai Krupa actively participated in the session, ensuring a smooth and informative experience for the students.
                  </p>
                </li>
              </ul>
            </div>
            <div className="hp-outcome-container">
              <span className="head">Outcome</span>
              <span className="content">
              The event successfully engaged school students, sparking their interest in synthetic biology. The interactive session deepened both the students' and our understanding of the subject, encouraging further exploration. The iGEM team members effectively conveyed information and comprehensively addressed the students' queries, enhancing our communication and teaching skills
              </span>
            </div>
          </div>
        </div>

        <div className="human-practices">
          <div className="human-practice-header-container">
            <div className="hp-title-container">
              <h2 className="hp-title" id="toc-item-Kola-Saraswathi-Vaishnav-Senior-Secondary-School-Visit">
                Kola Saraswathi Vaishnav Senior Secondary School Visit
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
                Our REC iGEM Team 2024 recently visited Kola Saraswathi Vaishnav Senior Secondary School to engage students in an exciting session on synthetic biology, iGEM, and our latest project on microplastics. The event aimed to educate and inspire the students through interactive presentations and activities.
              </span>
            </div>
            <div className="hp-activity-and-highlights">
              <span className="head">
                Key Activities and Highlights
              </span>
              <ul>
                <li>
                  <p className="hp-activity-head">Introduction to Synthetic Biology</p>
                  <p className="hp-activity-detail">We introduced the concept of synthetic biology, explaining its significance and potential applications. The students were fascinated by the idea of engineering biological systems for various purposes.</p>
                </li>
                <li>
                  <p className="hp-activity-head">iGEM and Our Journey:</p>
                  <p className="hp-activity-detail">We shared our journey as an iGEM team, highlighting our past projects and achievements. This segment aimed to motivate students to consider participating in such impactful scientific competitions.</p>
                </li>
                <li>
                  <p className="hp-activity-head">Focus on Microplastics</p>
                  <p className="hp-activity-detail">Our presentation on microplastics covered the environmental impact and current challenges associated with microplastic pollution. We explained our project's goals and methodologies for addressing this critical issue.
                  </p>
                </li>
                <li>
                  <p className="hp-activity-head">Interactive Activity:
                  </p>
                  <p className="hp-activity-detail">The students participated in an engaging activity designed to illustrate the concepts discussed. Their enthusiasm and curiosity made the session lively and memorable.</p>
                </li>
              </ul>
            </div>
            <div className="hp-outcome-container">
              <span className="head">Outcome</span>
              <span className="content">
                The event was a success, with students showing great interest in synthetic biology and environmental issues. Their enthusiasm and questions fostered a deeper understanding and curiosity. Our team improved in communicating complex science to younger audiences, gained fresh perspectives from student feedback, and felt motivated by their enthusiasm, reinforcing our commitment to impactful research
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
