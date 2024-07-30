import { createI18n } from 'vue-i18n'

const messages = {
	en: {
		menu: {
			title: "Menu",
			menuList: {
				webDevelopment: "Web-development",
				converters: "Converters",
				math: "Math",
				pomodoro: "Pomodoro"
			},
			other: "Other",
			otherList: {
				settings: "Settings",
				about: "About project"
			}
		},
		interface: {
			language: 'Interface Language',
			installApp: 'Install App'
		},
		footer: {
			coffee: 'Donation'
		},
		aboutPage: {
			title: "About the Project",
			content: {
				p1: "is a project created by one developer for developers.",
				p2: "Many tools designed to simplify routine tasks gathered in one place.",
				p3: "The project is completely free and does not charge for functionality. However, donations for a cup of coffee are welcome.",
			},
			list: {
				i1: "Version:",
				i2: "Last Updated:",
				i3: "License:",
				i4: "Author:",
			}
		},
		ui: {
			backButton: 'Go back',
		}
	},
	ru: {
		menu: {
			title: "Меню",
			menuList: {
				webDevelopment: "Веб-разработка",
				converters: "Конвертеры",
				math: "Математика",
				pomodoro: "Помодоро"
			},
			other: "Другое",
			otherList: {
				settings: "Настройки",
				about: "О проекте"
			}
		},
		interface: {
			language: 'Язык интерфейса',
			installApp: 'Установить приложение'
		},
		footer: {
			coffee: 'Пожертвование'
		},
		aboutPage: {
			title: "О проекте",
			content: {
				p1: "- это проект созданный одним разработчиком для разработчиков.",
				p2: "Множество инструментов, призванных упростить рутину, собранные в одном месте.",
				p3: "Проект абсолютно бесплатный и не взимает платы за функциональность. Однако пожертвования на чашку кофе привествуются.",
			},
			list: {
				i1: "Версия:",
				i2: "Дата обновления:",
				i3: "Лицензия:",
				i4: "Автор:",
			}
		},
		ui: {
			backButton: 'Вернуться назад',
		}
	},
	sb: {
		menu: {
			title: "Мени",
			menuList: {
				webDevelopment: "Веб-развој",
				converters: "Конвертори",
				math: "Математика",
				pomodoro: "Помодоро"
			},
			other: "Остало",
			otherList: {
				settings: "Подешавања",
				about: "О пројекту"
			}
		},
		interface: {
			language: 'Језик интерфејса',
			installApp: 'Инсталирати апликацију'
		},
		footer: {
			coffee: 'Донација'
		},
		aboutPage: {
			title: "O projektu",
			content: {
				p1: "je projekat koji je kreirao jedan programer za programere.",
				p2: "Mnogo alata dizajniranih da pojednostave rutinske zadatke, sakupljenih na jednom mestu.",
				p3: "Projekat je potpuno besplatan i ne naplaćuje funkcionalnost. Međutim, donacije za šoljicu kafe su dobrodošle.",
			},
			list: {
				i1: "Verzija:",
				i2: "Datum ažuriranja:",
				i3: "Licenca:",
				i4: "Autor:",
			}
		},
		ui: {
			backButton: 'Врати се',
		}
	}
}


const i18n = createI18n({
	locale: 'ru',
	messages,
	legacy: false,
})

export default i18n;