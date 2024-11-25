import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  cleanUrls: true,
  lang: 'ru-RU',
  title: "Fresh Meat Wiki",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    logo: '/logo.png',

    sidebar: [
      {
        text: 'Komam',
        items: [
          { text: 'О сборке', link: '/komam/info' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/logitechno' },
      { icon: 'boosty', link: 'https://boosty.to/freshmeat' },
      { icon: 'telegram', link: 'https://t.me/fshmeat' },
      { icon: 'discord', link: 'https://discord.gg/EyZV66rNGF' },
      { icon: 'youtube', link: 'https://www.youtube.com/@freshmeatbuisness' }
    ]
  }
})
