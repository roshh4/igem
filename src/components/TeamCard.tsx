import Atropos from 'atropos/react';
import React, { useState } from 'react';

interface TeamCardProps {
    teamMemberName: string,
    teamMemberImage: string,
    teamMemberRole: string,
    teamMemberAbout: string

}

const TeamCard: React.FC<TeamCardProps> = ({teamMemberName , teamMemberImage, teamMemberRole, teamMemberAbout}) => {
   const [isCardClicked, setIsCardClicked] = useState(false);

    return(
        <Atropos shadowOffset={0} highlight commonOrigin activeOffset={0} className='atropos'>
          <div className="team-card-container">
            <div className="team-name-container"><span>{teamMemberName}</span></div>
            <div className="team-image-container">
              <img src={teamMemberImage} alt="" className="team-image" />
            </div>
            <div className="team-over-lay"></div>
            <div className="team-role-container">
              <a onClick={(e) => {
                e.preventDefault();
                setIsCardClicked(true);
              }}>{teamMemberRole}</a>
            </div>
            <div className={`team-about-container ${isCardClicked ? 'active': ''}`}>
              <div className="team-about-image-container">
                <img src={teamMemberImage} alt="" />
              </div>
              <div className="team-about-text" style={{fontSize:"14px"}}>
                {teamMemberAbout}
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
                <a onClick={(e) => {
                    e.preventDefault();
                    setIsCardClicked(false);
                }} className="teamp-social up-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                </a>
            </div>
            </div>
          </div>
        </Atropos>
    )
};

export default TeamCard;