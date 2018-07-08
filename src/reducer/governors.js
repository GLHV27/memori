import AppConstants from '../constants/AppConstants';

export const initialState = {
    list: {
        1: {
            name: "Дмитрий Артюхов",
            birthday: "1988-02-17",
            subtitle: "и. о. губернатора Ямало-Ненецкого автономного округа",
            description: "Получил MBA в Сингапурском университете, а и. о. губернатора стал в мае 2018 года"
        },
        2: {
            name: "Дмитрий Азаров",
            birthday: "1970-08-09",
            subtitle: "и. о. губернатора Самарской области",
            description: "Стал и. о. губернатора в сентябре 2017 года"
        },
        3: {
            id: 3,
            name: "Александр Бурков",
            birthday: "1967-04-23",
            subtitle: "и. о. губернатора Омской области",
            description: "Первый заместитель председателя фракции «Справедливая Россия», стал и. о. губернатора в октябре 2017 года"
        },
        4: {
            name: "Сергей Цивилев",
            birthday: "1961-09-21",
            subtitle: "и. о. губернатора Кемеровской области",
            description: "После пожара в Кемерово обвинил мужчину, у которого погибла вся семья, в пиаре на крови, потом извинялся. Стал и. о. губернатора в апреле 2018 года"
        },
        5: {
            name: "Александр Моор",
            birthday: "1974-01-06",
            subtitle: "и. о. губернатора Тюменской области",
            description: "До последнего назначения семь лет был мэром Тюмени. На новую должность назначен в мае 2018 года."
        },
        6: {
            name: "Глеб Никитин",
            birthday: "1977-08-24",
            subtitle: "и. о. губернатора Нижегородской области",
            description: "В сентябре 2017 года стал и. о. губернатора, а в декабре того же года вступил в «Единую Россию»"
        },
        7: {
            name: "Айсен Николаев",
            birthday: "1972-01-22",
            subtitle: "и. о. главы Республики Саха",
            description: "Полное имя — Сэргэй уола Ньукулаайап Айыы Сиэн. Назначен и. о. главы Республики Саха в мае 2018 года."
        },
        8: {
            name: "Сергей Носов",
            birthday: "1961-02-17",
            subtitle: "и. о. губернатора Магаданской области",
            description: "До назначения и. о. губернатора в мае 2018 года был мэром Нижнего Тагила."
        }
    },
    loading: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.GOVERNORS_START_LOADING:
            return {
                ...state,
                loading: true
            };

        case AppConstants.GOVERNORS_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.items.items
            };

        case AppConstants.GOVERNORS_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};
