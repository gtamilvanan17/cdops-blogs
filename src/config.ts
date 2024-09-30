import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'CD OPS',
  subtitle: 'Cloud and DevOps',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Hashnode',
      url: 'https://cdops1official.hashnode.dev/', // Internal links should not include the base path, as it is automatically added
      external: false, // Show an external link icon and will open in a new tab
    },
    {
      name: 'Medium',
      url: 'https://cdops1official.medium.com/', // Internal links should not include the base path, as it is automatically added
      external: false, // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/image.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'CD OPS',
  bio: 'Cheers, Happy Learning!',
  links: [
    {
      name: 'X Official',
      icon: 'fa6-brands:x-twitter',                 // Visit https://icones.js.org/ for icon codes
      url: 'https://twitter.com/GTamilvananOff',    // You will need to install the corresponding icon set if it's not already included
    },                                              // `pnpm add @iconify-json/<icon-set-name>`
    {
      name: 'Linked In',
      icon: 'fa6-brands:linkedin',
      url: 'https://linkedin.com/in/gtamilvanan17',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/cdops_official',
    },
    {
      name: 'Portfolio',
      icon: 'fa6-solid:address-card',
      url: 'https://gtamilvanan17.github.io/portfolio',
    },
    {
      name: 'E-Mail',
      icon: 'fa6-solid:envelope',
      url: 'mailto:cdops1official@gmail.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
