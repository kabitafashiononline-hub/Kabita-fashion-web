import React, { useState } from 'react';
import teamData from '../../data/teamData.json';
import './MeetTeam.css';

const MeetTeam = () => {
  const [activeMember, setActiveMember] = useState(null);
  const { team, companyInfo } = teamData;

  const allMembers = [
    ...team.founders,
    ...team.designTeam,
    ...team.operationsTeam,
    ...team.marketingTeam
  ];

  const handleMemberClick = (member) => {
    setActiveMember(member);
  };

  const closeModal = () => {
    setActiveMember(null);
  };

  return (
    <div className="meet-team-container">
      {/* Hero Section */}
      <div className="team-hero">
        <div className="hero-content">
          <h1 className="hero-title">Meet Our Team</h1>
          <p className="hero-subtitle">The passionate people behind Kabita Fashion</p>
          <p className="hero-description">
            We're a team of fashion enthusiasts, artisans, and storytellers dedicated to bringing you 
            the finest authentic sarees. Each team member brings unique expertise to create magic.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">{companyInfo.founded}</div>
            <div className="stat-label">Year Founded</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{companyInfo.artisans}+</div>
            <div className="stat-label">Artisans</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{companyInfo.collections}+</div>
            <div className="stat-label">Collections</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{companyInfo.customers}</div>
            <div className="stat-label">Happy Customers</div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <section className="team-section founders-section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-crown"></i> Founders
          </h2>
          <p className="section-subtitle">The visionaries who started it all</p>
        </div>
        <div className="team-grid">
          {team.founders.map(founder => (
            <div key={founder.id} className="team-card" onClick={() => handleMemberClick(founder)}>
              <div className="member-image-container">
                <img src={founder.image} alt={founder.name} className="member-image" />
                <div className="image-overlay">
                  <span className="view-profile">View Profile</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{founder.name}</h3>
                <p className="member-position">{founder.position}</p>
                <p className="member-experience">{founder.experience}</p>
                <div className="member-social">
                  {founder.social.linkedin && (
                    <a href={founder.social.linkedin} className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {founder.social.twitter && (
                    <a href={founder.social.twitter} className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {founder.social.instagram && (
                    <a href={founder.social.instagram} className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Team Section */}
      <section className="team-section design-section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-palette"></i> Design Team
          </h2>
          <p className="section-subtitle">Creative minds behind our collections</p>
        </div>
        <div className="team-grid">
          {team.designTeam.map(designer => (
            <div key={designer.id} className="team-card" onClick={() => handleMemberClick(designer)}>
              <div className="member-image-container">
                <img src={designer.image} alt={designer.name} className="member-image" />
                <div className="image-overlay">
                  <span className="view-profile">View Profile</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{designer.name}</h3>
                <p className="member-position">{designer.position}</p>
                <p className="member-experience">{designer.experience}</p>
                <div className="member-social">
                  {designer.social.instagram && (
                    <a href={designer.social.instagram} className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {designer.social.pinterest && (
                    <a href={designer.social.pinterest} className="social-link">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operations Team Section */}
      <section className="team-section operations-section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-cogs"></i> Operations Team
          </h2>
          <p className="section-subtitle">Ensuring seamless experiences</p>
        </div>
        <div className="team-grid">
          {team.operationsTeam.map(operations => (
            <div key={operations.id} className="team-card" onClick={() => handleMemberClick(operations)}>
              <div className="member-image-container">
                <img src={operations.image} alt={operations.name} className="member-image" />
                <div className="image-overlay">
                  <span className="view-profile">View Profile</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{operations.name}</h3>
                <p className="member-position">{operations.position}</p>
                <p className="member-experience">{operations.experience}</p>
                <div className="member-social">
                  {operations.social.linkedin && (
                    <a href={operations.social.linkedin} className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing Team Section */}
      <section className="team-section marketing-section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-bullhorn"></i> Marketing Team
          </h2>
          <p className="section-subtitle">Spreading the magic of sarees</p>
        </div>
        <div className="team-grid">
          {team.marketingTeam.map(marketer => (
            <div key={marketer.id} className="team-card" onClick={() => handleMemberClick(marketer)}>
              <div className="member-image-container">
                <img src={marketer.image} alt={marketer.name} className="member-image" />
                <div className="image-overlay">
                  <span className="view-profile">View Profile</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{marketer.name}</h3>
                <p className="member-position">{marketer.position}</p>
                <p className="member-experience">{marketer.experience}</p>
                <div className="member-social">
                  {marketer.social.linkedin && (
                    <a href={marketer.social.linkedin} className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {marketer.social.instagram && (
                    <a href={marketer.social.instagram} className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">What drives us every day</p>
        </div>
        <div className="values-grid">
          {companyInfo.values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                {index === 0 && <i className="fas fa-gem"></i>}
                {index === 1 && <i className="fas fa-award"></i>}
                {index === 2 && <i className="fas fa-leaf"></i>}
                {index === 3 && <i className="fas fa-heart"></i>}
                {index === 4 && <i className="fas fa-lightbulb"></i>}
              </div>
              <h3 className="value-title">{value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-section">
        <div className="join-team-content">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for passionate individuals who love fashion and tradition.</p>
          <button className="join-btn">
            View Open Positions <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Member Detail Modal */}
      {activeMember && (
        <div className="member-modal-overlay" onClick={closeModal}>
          <div className="member-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-content">
              <div className="modal-image-container">
                <img src={activeMember.image} alt={activeMember.name} className="modal-image" />
              </div>
              <div className="modal-info">
                <h2 className="modal-name">{activeMember.name}</h2>
                <p className="modal-position">{activeMember.position}</p>
                <p className="modal-experience">{activeMember.experience}</p>
                
                <div className="modal-bio">
                  <h3>About</h3>
                  <p>{activeMember.bio}</p>
                </div>
                
                <div className="modal-fun-fact">
                  <h3>Fun Fact</h3>
                  <p>{activeMember.funFact}</p>
                </div>
                
                <div className="modal-contact">
                  <h3>Contact</h3>
                  <p className="modal-email">
                    <i className="fas fa-envelope"></i> {activeMember.email}
                  </p>
                  <div className="modal-social">
                    {activeMember.social.linkedin && (
                      <a href={activeMember.social.linkedin} className="modal-social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {activeMember.social.twitter && (
                      <a href={activeMember.social.twitter} className="modal-social-link">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {activeMember.social.instagram && (
                      <a href={activeMember.social.instagram} className="modal-social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetTeam;