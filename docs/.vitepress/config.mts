import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PrivyAI",
  description: "Privacy-first AI chat app with on-device models",
  base: '/privy-ai-docs/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Privacy Policy', link: '/privacy-policy' },
      { text: 'Terms of Service', link: '/terms-of-service' },
    ],

    sidebar: [
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/privacy-policy' },
          { text: 'Terms of Service', link: '/terms-of-service' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ShunL12324/privy-ai-docs' }
    ],

    footer: {
      message: 'PrivyAI - Your conversations, your device, your privacy.',
      copyright: 'Copyright © 2024 PrivyAI'
    }
  }
})
