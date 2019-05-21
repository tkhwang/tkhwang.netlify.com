module.exports = {
  siteTitle: 'Supari 守破離 for Fun and Profit',
  siteDescription: 'Learn, Practice and Repeat.',
  authorName: 'tkhwang',
  twitterUsername: 'tkhwang',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  make something fun
  `,
  siteUrl: 'https://tkhwang.netlify.com',
  disqusSiteUrl: 'https://tkhwang.netlify.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/blog', // Note: it must *not* have a trailing slash.
  siteCover: '/images/nikita-kachanovsky-445394-unsplash.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'tkhwang-netlify',
  headerLinks: [
    {
      label: '🏡',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/gatsby-starter-morning-dew',
      },
      {
        label: 'Installation',
        url: '/how-to-install',
      },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/tkhwang',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'https://tkhwang.netlify.com',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/tkhwang',
        iconClassName: 'fa fa-twitter',
      },
      {
        label: 'Instgram',
        url: 'https://instagram.com/tkhwang',
        iconClassName: 'fa fa-instagram',
      },
    ],
  ],
}
