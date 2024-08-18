// import { Inspirations, InspirationLink } from "../components";

import TeamCard from '../components/TeamCard';
// import team1 from '../images/Team Image.avif';


let team1 = ''
export function Team() {
  // const links: InspirationLink[] = [
  //   { year: 2019, teamName: "CU", pageName: "Team" },
  //   { year: 2019, teamName: "UANL", pageName: "Team" },
  //   { year: 2019, teamName: "William_and_Mary", pageName: "Team" },
  //   { year: 2020, teamName: "BOKU-Vienna", pageName: "Team" },
  //   { year: 2020, teamName: "CAU_China", pageName: "Team_Member" },
  //   { year: 2020, teamName: "Lethbridge", pageName: "Members" },
  // ];


  return (
    <>
      {/* <div className="row">
        <div className="col-8">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>
              Include pictures of your teammates, don't forget instructors and
              advisors!
            </li>
            <li>
              You can add a small biography or a few words from each team
              member, to tell us what you like, and what motivated you to
              participate in iGEM.
            </li>
            <li>
              Take team pictures! Show us your school, your lab and little bit
              of your city.
            </li>
            <li>
              Remember that image galleries can help you showcase many pictures
              while saving space.
            </li>
          </ul>
          <div className="bd-callout bd-callout-info">
            <strong>Important:</strong> Your wiki pages will be archived at the
            end of the iGEM season and this content will remain online. Please
            keep this in mind as you post photos and personal information on
            this page.
          </div>
        </div>
        <div className="col-4">
        <Inspirations inspirationLinkList={links} />
        </div>
      </div> */}
        <h1 className='text-center'>Team Members</h1>
      <div className="team-card-page-container">
        {/* <div className="team-card-container" onClick={() => setIsCardClicked(prev => !prev)}>
          <div className="team-image-container">
            <img src={team1} alt="Name" className="team-image" />
          </div>
          <div className="team-details-container">
            <div className="team-detail-name">
              <span>Alien501</span>
            </div>
            <div className="team-detail-role">
              <span>Wiki Team</span>
            </div>
          </div>
          <div className="team-social-container">
            <a href="#" className="team-social" target="_">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="team-social" target='_'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="team-social" target='_'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
          <div className={`team-bio-container ${isCardClicked? 'active': 
            ''
          }`}>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, facere dolor hic iste ullam nulla, voluptas magni amet porro numquam odio facilis quaerat laudantium. Numquam, pariatur. Itaque magnam, repellat nisi quaerat unde amet quam corporis dolorem ab porro. Earum, quam!
            </span>
          </div>
        </div> */}
        <TeamCard 
          teamMemberName='Eniya A M'
          teamMemberImage={team1}
          teamMemberRole='About her'
          teamMemberAbout='Here is ENIYA.A.M., a vibrant individual pursuing her passion in biotechnology while balancing her love for athletics and oration. Her passion was ignited at the tender age of six, setting the stage for a remarkable journey fueled by relentless curiosity and ambition.'/>

        <TeamCard 
          teamMemberName='Jeevananthan.M'
          teamMemberImage={team1}
          teamMemberRole='About him'
          teamMemberAbout='Jeevananthan.M , a guy who is expanding his career in molecular and cancer biology as a researcher with a strong grasp of theoretical and practical applications. Adaptable to any situation, he excels in research and development (R&D) and wet lab.
He believes in the saying, "Nothing happens until something moves". 
'/>

        <TeamCard 
          teamMemberName='Sai Sandhya Sree S'
          teamMemberImage={team1}
          teamMemberRole='About her'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />

        <TeamCard 
          teamMemberName='Lokaveenasri.D'
          teamMemberImage={team1}
          teamMemberRole='About her'
          teamMemberAbout="Get  ready to meet Lokaaaaa – the epitome of zest, zeal, and zing! Every moment spent with her is an electrifying experience, whether she's embarking on a Netflix odyssey, flying to new horizons, or deepening her knowledge with courses. From crafting captivating melodies on her keyboard to unraveling the mysteries of programming and biotech, she is a perpetual dynamo of creativity and innovation."/>
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='About her'
          teamMemberAbout="Introducing Kamakshi: a powerhouse of ambition, energy, and unwavering determination.  As a social butterfly, she thrives on connecting with people and delving into their stories, finding joy in every interaction. In the realm of science, she is unstoppable – conducting meticulous research, working tirelessly in the wet lab, and relentlessly pursuing innovation."/>
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
        <TeamCard 
          teamMemberName='Person 04'
          teamMemberImage={team1}
          teamMemberRole='Role Four'
          teamMemberAbout='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti voluptate, praesentium soluta ullam ab aut quibusdam omnis quasi ducimus ratione laboriosam consequatur. Nam adipisci vitae at suscipit natus similique harum dolor animi, eaque, recusandae quasi laudantium sunt sequi quisquam?'
        />
      </div>
    </>
  );
}
