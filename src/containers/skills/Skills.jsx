import React from 'react';
import Skill from '../../components/skill/Skill';
import './skills.css';

import { Html5, Css3, Git, Javascript, Typescript, Mysql, Mui, Reactjs, Sass, Tailwindcss, Python, Django, Redux, Postgresql } from '../../assets';

const skillsData = [
  {
    img: Html5,
    name: 'HTML5',
  },
  {
    img: Css3,
    name: 'CSS3',
  },
  {
    img: Sass,
    name: 'SASS',
  },
  {
    img: Tailwindcss,
    name: 'TAILWINDCSS',
  },
  {
    img: Python,
    name: 'PYTHON',
  },
  {
    img: Javascript,
    name: 'JAVASCRIPT',
  },
  {
    img: Typescript,
    name: 'TYPESCRIPT',
  },
  {
    img: Django,
    name: 'DJANGO',
  },
  {
    img: Reactjs,
    name: 'REACT',
  },
  {
    img: Mui,
    name: 'Material UI',
  },
  {
    img: Redux,
    name: 'REDUX',
  },
  {
    img: Mysql,
    name: 'MYSQL',
  },
  {
    img: Postgresql,
    name: 'POSTGRESQL',
  },
  {
    img: Git,
    name: 'GIT',
  },
];

const Skills = () => {
  return (
    <div className='app__skills section__padding' id='skills'>
      <div className="app__skills-heading">
        <h1>SKILLS</h1>
      </div>
      <div className="app__skills-content">
        {skillsData.map((item, index) => (
          <Skill img={item.img} name={item.name} key={item.name + index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
