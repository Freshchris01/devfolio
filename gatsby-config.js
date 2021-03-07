module.exports = {
  pathPrefix: '/home',
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://https://freshchris01.github.io/home/`,
    // Your Name
    name: 'Christian Diemers',
    // Main Site Title
    title: `Christian Diemers | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Twitter account handle
    // author: `@diemersCodes`,
    // Optional: Github account URL
    github: `https://github.com/Freshchris01`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/christian-diemers`,
    // Content of the About Me section
    about: `I am a Software Engineer living in Munich. Passionate about software engineering, cloud application development ,and entrepreneurship. During the past years, I have worked on many professional projects & products with millions of users (e.g. Freeletics) and spread knowledge about new technologies as part of the Microsoft Student Partner Program by organizing Hackathons, workshops, and meetups.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    education: [{name: 'Technical University of Munich: M.Sc. Computer Science (expected: 2021)', description: 'Focus on software engineering, data science and efficient algorithms'}, {name: 'Technical University of Munich: B.Sc. Computer Science: Games Engineering', description: 'Projects with game development technologies (Unity3D, Android, Java, C++, DirectX, C)'}],
    projects: [
      {
        name: 'My Homepage',
        description:
          'The website you are currently visiting with basic information about things I did & created including a personal blog. It\'s built upon a template using GatsbyJS & React. Hosted on gh-pages with CI/CD powered by Github Actions.',
        link: 'https://github.com/Freshchris01/home',
      },
      {
        name: 'TBA',
        description:
          'TBA',
        link: 'TBA',
      },
      {
        name: 'TBA',
        description:
          'TBA',
        link: 'TBA',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Freeleticls GmbH',
        description: 'Backend Software Engineer Working Student, May 2019 - present',
        link: 'https://freeletics.com',
      },
      {
	name: 'Readnext',
	description: 'Co-Founder, Software Engineer, July 2019 - Juli 2020',
	link: 'https://www.linkedin.com/company/readnext/'
      },
      {
        name: 'Tech4Germany', 
        description: 'Engineering Fellow, August 2018 - October 2018',
        link: 'https://tech.4germany.org/',
      },
      {
        name: 'CQSE GmbH',
        description: 'Full-Stack Development Working Student & Bachelor Thesis, November 2018 - May 2019',
        link: 'https://www.cqse.eu/',
      },
      {
        name: 'Birkle IT AG',
        description: 'Full-Stack Development Intern, October 2017 - May 2018',
        link: 'https://www.birkle-it.com/',
      },

    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Ruby on Rails, JavaScript (ES6+), Node.js, Express.js, React, Python',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
    education: [{name: 'Technical University of Munich: M.Sc. Computer Science (expected: 2021)', description: 'Focus on software engineering, data science and efficient algorithms'}, {name: 'Technical University of Munich: B.Sc. Computer Science: Games Engineering', description: 'Projects with game development technologies (Unity3D, Android, Java, C++, DirectX, C)'}]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
