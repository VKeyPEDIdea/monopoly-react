const CHANCE_TITLE = 'Шанс';
const BANK_TITLE = 'Банк';

export interface Opportunities {
    chanceTitle: string;
    detailsText: string;
    count: number | null;
    isNegative: boolean;
    btnText: string;
}

export const CHANCE_LIST: Opportunities[] = [
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Отправляйтесь в гостиничный комплекс',
        count: -50,
        isNegative: true,
        btnText: 'Перейти на поле Гостиничный комплекс',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Скиньтесь на ремонт улицы. ', 
        count: null,
        isNegative: true,
        btnText: 'Оплатите 40 за каждый дом и 115 за каждый отель',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вы поехали в ресторан, чтобы пообедать с друзьями. Если вы проходите Старт, получите 200',
        count: null,
        isNegative: false,
        btnText: 'Отправиться на поле Ресторан',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Оплатите штраф за нарушение правил дорожного движения',
        count: 15,
        isNegative: true,
        btnText: 'Оплатите штраф',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вам вернули старые долги',
        count: 150,
        isNegative: false,
        btnText: 'Получите деньги',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вашим зданиям требуются капитальный ремонт. Оплатите 25 за каждый дом и 100 за каждый отель',
        count: null,
        isNegative: true,
        btnText: 'Оплатить ремонт',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вы арестованы. Возможно потому что вы не платили налоги',
        count: null,
        isNegative: true,
        btnText: 'Сдаться полиции',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вас ждет поездка. Отправляйтесь в северный морской порт. Если вы проходите Старт, получите 200',
        count: null,
        isNegative: false,
        btnText: 'Отправить на поле Северный порт',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Получите проценты по депозиту',
        count: 50,
        isNegative: false,
        btnText: 'Получите вознаграждение',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вы потеряли инвестиции в стартап, который не выстрелил',
        count: 50,
        isNegative: true,
        btnText: 'Проверьте свой банковский счет',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вы прошли коучинг у опытных предпринимателей',
        count: 150,
        isNegative: true,
        btnText: 'Оплатите обучение',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вернитесь в начало пути',
        count: null,
        isNegative: false,
        btnText: 'Вернуться на старт',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Вы получили проценты от инвестиции в стартап',
        count: 100,
        isNegative: false,
        btnText: 'Получите прибыль',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Отправляйтесь в авиакомпанию, чтобы обсудить цены на билеты',
        count: null,
        isNegative: false,
        btnText: 'Отправляйтесь на поле Авиакомпания',
    },
    {
        chanceTitle: CHANCE_TITLE,
        detailsText: 'Освобождение из тюрьмы. Карта может быть использована или продана',
        count: null,
        isNegative: false,
        btnText: 'Взять карту',
    },
];

export const BANK_LIST: Opportunities[] = [
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Оплатите услуги доктора. Здоровье дороже всего',
        count: -50,
        isNegative: true,
        btnText: 'Оплатите',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы выгодно продали акции на фондовой бирже. Так держать!',
        count: 25,
        isNegative: false,
        btnText: 'Получите',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы купили валюту по выгодному курсу. Не зря откладывали',
        count: 200,
        isNegative: false,
        btnText: 'Получите',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Освобождение из тюрьмы. Карта может быть использована позже или продана',
        count: null,
        isNegative: false,
        btnText: 'Взять карту',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы получили наследство. Какие-то далекие родственники завещали вам свои сбережения',
        count: 100,
        isNegative: false,
        btnText: 'Получите',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Оплатите налоги. Лучше не иметь проблем с государством',
        count: 25,
        isNegative: true,
        btnText: 'Оплатите',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы арестованы. Кто-то подставил вас - скорее всего безжалостные конкуренты',
        count: null,
        isNegative: true,
        btnText: 'Сдаться полиции и отправить в тюрьму',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы купили страховку. Неспокойные нынче времена',
        count: 50,
        isNegative: true,
        btnText: 'Оплатите покупку',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы заняли призовое место на спортивном турнире.',
        count: 10,
        isNegative: false,
        btnText: 'Получите приз',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы выгодно продали один из своих бизнесов. Он только отвекал вас',
        count: 50,
        isNegative: false,
        btnText: 'Получите выручку',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы приболели и нужно купить лекарства. Невовремя как всегда!',
        count: 100,
        isNegative: true,
        btnText: 'Потратиться на лекарства',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вернитесь в начало пути',
        count: null,
        isNegative: false,
        btnText: 'Вернуться на старт',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Вы получили ренту от своих клиентов',
        count: 100,
        isNegative: false,
        btnText: 'Получите прибыль',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'С днем рождения. Все игроки решили скинуться вам на подарок',
        count: 10,
        isNegative: false,
        btnText: 'Получите подарок',
    },
    {
        chanceTitle: BANK_TITLE,
        detailsText: 'Оплатите ремонт. Ваша машина неожиданно поломалась',
        count: 50,
        isNegative: true,
        btnText: 'Потратиться на ремонт',
    },
];