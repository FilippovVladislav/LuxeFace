import createPhoneInput, {
    countries as defaultCountries,
} from "country-phone-mask";

const container = document.querySelectorAll(".phone-input");

const myCountries = [
        {
            name: "None Country",
            code: "NA",
            dialCode: "",
            mask: "",
        },
        {
            name: "Russia",
            code: "RU",
            dialCode: "+7",
            mask: "+7 (___) ___-__-__",
        },
        {
            name: "Kazakhstan",
            code: "KZ",
            dialCode: "+7",
            mask: "+7 (___) ___-__-__",
        },
        {
            name: "Ukraine",
            code: "UA",
            dialCode: "+380",
            mask: "+380 (__) ___-__-__",
        },
        {
            name: "Moldova",
            code: "MD",
            dialCode: "+373",
            mask: "+373 (__) ___-___",
        },
        {
            name: "Belarus",
            code: "BY",
            dialCode: "+375",
            mask: "+375 (__) ___-__-__",
        },
        {
            name: "Uzbekistan",
            code: "UZ",
            dialCode: "+998",
            mask: "+998 (__) ___-__-__",
        },
        {
            name: "Azerbaijan",
            code: "AZ",
            dialCode: "+994",
            mask: "+994 (__) ___-__-__",
        },
        {
            name: "Germany",
            code: "DE",
            dialCode: "+49",
            mask: "+49 (____) __________",
        },
        {
            name: "Greece",
            code: "GR",
            dialCode: "+30",
            mask: "+30 ___ ________",
        },
        {
            name: "United States",
            code: "US",
            dialCode: "+1",
            mask: "+1 (___) ___-____",
        },
        {
            name: "United Arab Emirates",
            code: "AE",
            dialCode: "+971",
            mask: "+971-__-___-____",
        },
        {
            name: "Australia",
            code: "AU",
            dialCode: "+61",
            mask: "+61 _ ____ ____",
        },
        {
            name: "Israel",
            code: "IL",
            dialCode: "+972",
            mask: "+972-____-____",
        },
        {
            name: "Latvia",
            code: "LV",
            dialCode: "+371",
            mask: "+371 ___ ____",
        },
        {
            name: "Turkey",
            code: "TR",
            dialCode: "+90",
            mask: "+90 (___) ___ ____",
        },
        {
            name: "France",
            code: "FR",
            dialCode: "+33",
            mask: "+33 _ __ __ __ __",
        },
        {
            name: "Austria",
            code: "AT",
            dialCode: "+43",
            mask: "+43 ___ ___ ____",
        },
        {
            name: "Armenia",
            code: "AM",
            dialCode: "+374",
            mask: "+374 (__) ___-___",
        },
        {
            name: "United Kingdom",
            code: "GB",
            dialCode: "+44",
            mask: "+44 ____ ______",
        },
        {
            name: "Czech Republic",
            code: "CZ",
            dialCode: "+420",
            mask: "+420 ___ ___ ___",
        },
        {
            name: "Switzerland",
            code: "CH",
            dialCode: "+41",
            mask: "+41 __ ___ __ __",
        },
        {
            name: "Egypt",
            code: "EG",
            dialCode: "+20",
            mask: "+20 ___ _______",
        },
        {
            name: "Cambodia",
            code: "KH",
            dialCode: "+855",
            mask: "+855 __ ___ ___",
        },
        {
            name: "Cyprus",
            code: "CY",
            dialCode: "+357",
            mask: "+357 __ ______",
        },
        {
            name: "Kyrgyzstan",
            code: "KG",
            dialCode: "+996",
            mask: "+996 (___) ___-___",
        },
        {
            name: "Lebanon",
            code: "LB",
            dialCode: "+961",
            mask: "+961 __ ___ ___",
        },
        {
            name: "Lithuania",
            code: "LT",
            dialCode: "+370",
            mask: "+370 ___ ____",
        },
        {
            name: "Monaco",
            code: "MC",
            dialCode: "+377",
            mask: "+377 __ ___ ___",
        },
        {
            name: "Poland",
            code: "PL",
            dialCode: "+48",
            mask: "+48 ___ ___ ___",
        },
        {
            name: "Romania",
            code: "RO",
            dialCode: "+40",
            mask: "+40 ___ ___ ___",
        },
        {
            name: "Turkmenistan",
            code: "TM",
            dialCode: "+993",
            mask: "+993 _ ____ ____",
        },
        {
            name: "Croatia",
            code: "HR",
            dialCode: "+385",
            mask: "+385 __ ___ ___",
        },
        {
            name: "Estonia",
            code: "EE",
            dialCode: "+372",
            mask: "+372 ____ ____",
        }
    ];

container.forEach((item) => {
    createPhoneInput({
        container: item,
        countries: myCountries,
        spritePath: "/local/templates/antiage_redesign_v2_new/verstka_vlad_1/dist/images/sprite2.svg", // можно переопределить путь
        apiKey: "",
        defaultCountry: "RU",
    });
})
