import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const BannerWrap = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: var(--white);
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: var(--white);
  background: url('src/assets/img/bg_3.jpg') center center no-repeat fixed;
  background-size: cover;
`;

const BannerText = styled.div`
  position: fixed;
  width: auto;
  top: 25%;
  left: 50%;
  padding: 20px;
  border: 6px solid var(--white);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  
  h2 {
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 4.6875vw;
    }
  }
`;

const ProjectWrap = styled.section`
  position: relative;

  .inner {
    padding: 120px 20px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    position: relative;
    width: 100%;
    margin-top: 80px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    li {
      position: relative;
      border: 1px solid var(--gray200);
    }
  }
`;

// const ProjectImage = styled.img`
//   width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'OK비교대출 웹앱',
      period: '2024.02 ~',
      content: 'OK비교대출 앱, 웹앱 운영 및 유지/보수',
      link: 'https://m.okbigyo.com/',
      image: '/src/assets/bg_1.jpg',
    }, {
      id: 2,
      title: 'OK비교대출 PC웹',
      period: '2024.02 ~',
      content: 'OK비교대출 웹 운영 및 유지/보수',
      link: 'https://www.okbigyo.com/'
    }, {
      id: 3,
      title: '한화생명보험 X Need',
      period: '2023.06',
      content: '프리랜서로서 PC, MO 이벤트페이지 제작',
      link: 'https://hanwha-need.com/signature/'
    }, {
      id: 4,
      title: '동남아 SealM 홈페이지',
      period: '2021.06 ~ 2023.04',
      content: '동남아 SealM의 PC, MO 운영 및 유지/보수',
      link: 'https://sea.sealm.com'
    }, {
      id: 5,
      title: '국내 Rohan 홈페이지',
      period: '2021.06 ~ 2023.04',
      content: 'Description5',
      link: 'https://www.rohan.co.kr/'
    }, {
      id: 6,
      title: '국내 SealM 홈페이지',
      period: '2021.06 ~ 2023.04',
      content: 'Description5',
      link: 'https://www.sealm.co.kr/'
    }, {
      id: 7,
      title: 'Project 7',
      period: '2022.08',
      content: 'Description5',
      link: 'https://www.rohan.co.kr/event/event_20220810/index.html'
    }, {
      id: 8,
      title: 'Project 8',
      period: '2022.06',
      content: 'Description5',
      link: 'https://www.rohan.co.kr/event/event_20220615/index.html'
    }
  ];

  return (
    <>
      <BannerWrap>
        <Banner id="banner">
          <BannerText id="bannerText">
            <h2>Project</h2>
          </BannerText>
        </Banner>
      </BannerWrap>

      <ProjectWrap>
        <div className="inner">
          <h2>My Recent Works</h2>
          <p>Here are a few projects I've worked on recently.</p>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p> 
                <button onClick={() => openProjectDetail(project)}>View Details</button>
              </li>
            ))}
          </ul>
        </div>
      </ProjectWrap>
      <Footer />
    </>
  );
}

export default Projects;