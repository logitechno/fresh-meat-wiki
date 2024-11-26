import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  cleanUrls: true,
  lang: 'ru-RU',
  title: "Fresh Meat Wiki",
  description: "Занимаемся разработкой модпаков для Minecraft в СНГ",
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        text: 'Komam',
        items: [
          { text: 'О сборке', link: '/komam/info' },
          { text: 'Установка', link: '/komam/install' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/logitechno' },
      { icon: 'boosty', link: 'https://boosty.to/freshmeat' },
      { icon: 'telegram', link: 'https://t.me/fshmeat' },
      { icon: 'discord', link: 'https://discord.gg/EyZV66rNGF' },
      { icon: 'youtube', link: 'https://www.youtube.com/@freshmeatbuisness' }
    ],

    notFound: {
      code: "Ошибка 404",
      title: "Страница не найдена",
      quote: "Возможно, она была удалена, либо переименована",
      linkText: "Вернуться на главную",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск страницы",
          },
          modal: {
            noResultsText: "Результатов не найдено по запросу",
            resetButtonTitle: "Очистить",
            footer: {
              selectText: "выбрать",
              navigateText: "переключение между результатами",
              closeText: "закрыть",
            },
          },
        },
      },
    },

    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Режим",
    returnToTopLabel: "Наверх",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    outline: {
      label: "Содержание",
      level: [2, 3],
    },

    editLink: {
      pattern: "https://github.com/logitechno/fresh-meat-wiki/edit/main/docs/:path",
      text: "Править",
    },

    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },
  }
})
