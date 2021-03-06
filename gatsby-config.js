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
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/Freshchris01`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/christian-diemers`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    education: [{name: 'test', description: 'A description'}],
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
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
    education: [
      {
        name: 'Test',
	description: 'Test description',
        link: 'Test URL'
      }
    ]
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
