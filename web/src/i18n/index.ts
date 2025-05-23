// Code generated by go generate. DO NOT EDIT.
//
// To edit the template for this file open:
//		./cmd/authelia-gen/templates/web_i18n_index.ts.tmpl
//
// Then run the following command to generate this file:
// 		go run ./cmd/authelia-gen locales
//

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { LocalStorageLanguageCurrent } from "@constants/LocalStorage";
import LocalStorageCustomDetector from "@i18n/detectors/localStorageCustom";
import { getBasePath } from "@utils/BasePath";

const basePath = getBasePath();

const CustomLanguageDetector = new LanguageDetector();

CustomLanguageDetector.addDetector(LocalStorageCustomDetector);

i18n.use(Backend)
    .use(CustomLanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["querystring", "localStorageCustom", "navigator"],
            lookupQuerystring: "lng",
            lookupLocalStorage: LocalStorageLanguageCurrent,
        },
        backend: {
            loadPath: basePath + "/locales/{{lng}}/{{ns}}.json",
        },
        load: "all",
        ns: ["consent", "portal", "settings"],
        defaultNS: "portal",
        fallbackLng: {
            default: ["en"],
            af: ["en"],
            "af-ZA": ["af", "en"],
            ar: ["en"],
            "ar-SA": ["ar", "en"],
            bg: ["en"],
            "bg-BG": ["bg", "en"],
            cs: ["en"],
            "cs-CZ": ["cs", "en"],
            cy: ["en"],
            "cy-GB": ["cy", "en"],
            da: ["en"],
            "da-DK": ["da", "en"],
            de: ["en"],
            "de-DE": ["de", "en"],
            el: ["en"],
            "el-GR": ["el", "en"],
            es: ["en"],
            "es-ES": ["es", "en"],
            et: ["en"],
            "et-EE": ["et", "en"],
            eu: ["en"],
            "eu-ES": ["eu", "en"],
            fi: ["en"],
            "fi-FI": ["fi", "en"],
            fil: ["en"],
            "fil-PH": ["fil", "en"],
            fr: ["en"],
            "fr-FR": ["fr", "en"],
            ga: ["en"],
            "ga-IE": ["ga", "en"],
            hi: ["en"],
            "hi-IN": ["hi", "en"],
            hr: ["en"],
            "hr-HR": ["hr", "en"],
            hu: ["en"],
            "hu-HU": ["hu", "en"],
            id: ["en"],
            "id-ID": ["id", "en"],
            it: ["en"],
            "it-IT": ["it", "en"],
            ja: ["en"],
            "ja-JP": ["ja", "en"],
            ko: ["en"],
            "ko-KR": ["ko", "en"],
            ku: ["en"],
            "ku-TR": ["ku", "en"],
            lt: ["en"],
            "lt-LT": ["lt", "en"],
            lv: ["en"],
            "lv-LV": ["lv", "en"],
            ms: ["en"],
            "ms-MY": ["ms", "en"],
            mt: ["en"],
            "mt-MT": ["mt", "en"],
            nb: ["en"],
            "nb-NO": ["nb", "en"],
            ne: ["en"],
            "ne-NP": ["ne", "en"],
            nl: ["en"],
            "nl-NL": ["nl", "en"],
            no: ["en"],
            "no-NO": ["no", "en"],
            pl: ["en"],
            "pl-PL": ["pl", "en"],
            pt: ["en"],
            "pt-BR": ["pt", "en"],
            "pt-PT": ["pt", "en"],
            ro: ["en"],
            "ro-RO": ["ro", "en"],
            ru: ["en"],
            "ru-RU": ["ru", "en"],
            sc: ["en"],
            "sc-IT": ["sc", "en"],
            sk: ["en"],
            "sk-SK": ["sk", "en"],
            sl: ["en"],
            "sl-SI": ["sl", "en"],
            so: ["en"],
            "so-SO": ["so", "en"],
            srp: ["en"],
            ss: ["en"],
            "ss-ZA": ["ss", "en"],
            su: ["en"],
            "su-ID": ["su", "en"],
            sv: ["en"],
            "sv-SE": ["sv", "en"],
            sw: ["en"],
            "sw-KE": ["sw", "en"],
            ta: ["en"],
            "ta-IN": ["ta", "en"],
            th: ["en"],
            "th-TH": ["th", "en"],
            "tl-PH": ["fil", "en"],
            tr: ["en"],
            "tr-TR": ["tr", "en"],
            ty: ["en"],
            "ty-PF": ["ty", "en"],
            uk: ["en"],
            "uk-UA": ["uk", "en"],
            vec: ["en"],
            "vec-IT": ["vec", "en"],
            vi: ["en"],
            "vi-VN": ["vi", "en"],
            yi: ["en"],
            "yi-DE": ["yi", "en"],
            zh: ["en"],
            "zh-CN": ["zh", "en"],
            "zh-HK": ["zh", "en"],
            "zh-SG": ["zh", "en"],
            "zh-TW": ["zh", "en"],
        },
        supportedLngs: [
            "en",
            "af",
            "af-ZA",
            "ar",
            "ar-SA",
            "bg",
            "bg-BG",
            "cs",
            "cs-CZ",
            "cy",
            "cy-GB",
            "da",
            "da-DK",
            "de",
            "de-DE",
            "el",
            "el-GR",
            "es",
            "es-ES",
            "et",
            "et-EE",
            "eu",
            "eu-ES",
            "fi",
            "fi-FI",
            "fil",
            "fil-PH",
            "fr",
            "fr-FR",
            "ga",
            "ga-IE",
            "hi",
            "hi-IN",
            "hr",
            "hr-HR",
            "hu",
            "hu-HU",
            "id",
            "id-ID",
            "it",
            "it-IT",
            "ja",
            "ja-JP",
            "ko",
            "ko-KR",
            "ku",
            "ku-TR",
            "lt",
            "lt-LT",
            "lv",
            "lv-LV",
            "ms",
            "ms-MY",
            "mt",
            "mt-MT",
            "nb",
            "nb-NO",
            "ne",
            "ne-NP",
            "nl",
            "nl-NL",
            "no",
            "no-NO",
            "pl",
            "pl-PL",
            "pt",
            "pt-BR",
            "pt-PT",
            "ro",
            "ro-RO",
            "ru",
            "ru-RU",
            "sc",
            "sc-IT",
            "sk",
            "sk-SK",
            "sl",
            "sl-SI",
            "so",
            "so-SO",
            "srp",
            "ss",
            "ss-ZA",
            "su",
            "su-ID",
            "sv",
            "sv-SE",
            "sw",
            "sw-KE",
            "ta",
            "ta-IN",
            "th",
            "th-TH",
            "tl-PH",
            "tr",
            "tr-TR",
            "ty",
            "ty-PF",
            "uk",
            "uk-UA",
            "vec",
            "vec-IT",
            "vi",
            "vi-VN",
            "yi",
            "yi-DE",
            "zh",
            "zh-CN",
            "zh-HK",
            "zh-SG",
            "zh-TW",
        ],
        lowerCaseLng: false,
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false,
        },
        debug: false,
    });

export default i18n;
