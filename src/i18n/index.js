import i18n from "i18next";

import {initReactI18next} from "react-i18next";


i18n
.use(initReactI18next)
.init({

    resources:{
        en:{
            translation:{
                Welcome:{
                    text:'Welcome to this React Internationalization App',
                }
            }
        },
        fr:{
            translation:{
                Welcome:{
                    text:"Bienvenue sur cette application d'internationalisation React",
                }
            }
        }
    },
    lng:"en",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
});

export default i18n;