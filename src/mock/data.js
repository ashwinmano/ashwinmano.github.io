import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ashwin', // e.g: 'Name | Developer'
  lang: 'English,Tamil,Telugu,kanada,Hindi', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'myprofile.jpg',
  paragraphOne:
    "I am a self-taught  developer with a strong eye for innovative technologies  and a keen understanding of techniques geared towards Blockchain technology  and Open source software's  deveopment ",
  paragraphTwo: 'Click to View my Resume',
  paragraphThree: '.',
  resume:
    'https://www.canva.com/design/DAD-k0v4IX4/DGsJaQ1xG-WMw3WPjHm1zw/view?utm_content=DAD-k0v4IX4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://AshwinManohar@bitbucket.org/AshwinManohar/weather_app.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.JPG',
    title: 'Weater App',
    info: '',
    info2: '',
    url: 'https://AshwinManohar@bitbucket.org/AshwinManohar/weather_app.git',
    repo: 'https://AshwinManohar@bitbucket.org/AshwinManohar/weather_app.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'food.JPG',
    title: 'Receipe App',
    info: 'Get the Receipe of any dish in the World',
    info2: '',
    url: '',
    repo: 'https://github.com/ashwinmano/foodhub', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ashwinmanohar@science.christuniversity.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashwin-manohar-a32453154/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashwinmano/resume',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
