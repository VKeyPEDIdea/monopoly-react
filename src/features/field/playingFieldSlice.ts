import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
import { SectorProps } from "../../components/PlayingField/Sector/Sector.model";

interface PlayingFieldState {
    sectorList: SectorProps[];
}

const initialState: PlayingFieldState = {
    sectorList: [
        {
            title: 'Старт',
            price: 0,
            color: null,
            type: 'Старт',
            isBottom: false,
        },
        {
            title: 'Гапеева',
            price: 60,
            color: 'purple',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Банк',
            price: 0,
            color: null,
            type: 'Банк',
            isBottom: false,
        },
        {
            title: 'Кривогуза',
            price: 60,
            color: 'purple',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Налог с дохода',
            price: 0,
            color: null,
            type: 'Ловушка',
            isBottom: false,
        },
        {
            title: 'Западный порт',
            price: 0,
            color: null,
            type: 'Транспортное предприятие',
            isBottom: false,
        },
        {
            title: 'Чкалова',
            price: 100,
            color: 'blue',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Шанс',
            price: 0,
            color: null,
            type: 'Шанс',
            isBottom: false,
        },
        {
            title: 'Бухар Жирау',
            price: 100,
            color: 'blue',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Пушкина',
            price: 120,
            color: 'blue',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Тюрьма',
            price: 0,
            color: null,
            type: 'Ловушка',
            isBottom: false,
        },
        {
            title: 'Бульвар мира',
            price: 140,
            color: 'blue-sky',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Электрическая компания',
            price: 0,
            color: null,
            type: 'Коммунальное предприятие',
            isBottom: false,
        },
        {
            title: 'Абая',
            price: 140,
            color: 'blue-sky',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Гоголя',
            price: 160,
            color: 'blue-sky',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Северный порт',
            price: 0,
            color: null,
            type: 'Транспортное предприятие',
            isBottom: false,
        },
        {
            title: 'Ержанова',
            price: 180,
            color: 'green',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Банк',
            price: 0,
            color: null,
            type: 'Банк',
            isBottom: false,
        },
        {
            title: 'Ермекова',
            price: 180,
            color: 'green',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Абдирова',
            price: 200,
            color: 'green',
            type: 'Земельный участок',
            isBottom: false,
        },
        {
            title: 'Гостиничный комплекс',
            price: 400,
            color: 'pink',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Дорогая покупка',
            price: 0,
            color: null,
            type: 'Ловушка',
            isBottom: true,
        },
        {
            title: 'Курортная зона',
            price: 350,
            color: 'pink',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Шанс',
            price: 0,
            color: null,
            type: 'Шанс',
            isBottom: true,
        },
        {
            title: 'Южный порт',
            price: 0,
            color: null,
            type: 'Транспортное предприятие',
            isBottom: true,
        },
        {
            title: 'Авиакомпания',
            price: 400,
            color: 'red',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Банк',
            price: 0,
            color: null,
            type: 'Банк',
            isBottom: true,
        },
        {
            title: 'Железная дорога',
            price: 300,
            color: 'red',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Морские перевозки',
            price: 300,
            color: 'red',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Арест',
            price: 0,
            color: null,
            type: 'Ловушка',
            isBottom: true,
        },
        {
            title: 'Сотовая связь',
            price: 280,
            color: 'orange',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Водопроводная компания',
            price: 400,
            color: null,
            type: 'Коммунальное предприятие',
            isBottom: true,
        },
        {
            title: 'Интернет',
            price: 260,
            color: 'orange',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Компьютерная техника',
            price: 260,
            color: 'orange',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Восточный порт',
            price: 0,
            color: null,
            type: 'Транспортное предприятие',
            isBottom: true,
        },
        {
            title: 'Ресторан',
            price: 240,
            color: 'yellow',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Ночной клуб',
            price: 220,
            color: 'yellow',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Шанс',
            price: 0,
            color: null,
            type: 'Шанс',
            isBottom: true,
        },
        {
            title: 'Бар',
            price: 220,
            color: 'yellow',
            type: 'Земельный участок',
            isBottom: true,
        },
        {
            title: 'Бесплатная парковка',
            price: 0,
            color: null,
            type: 'Бесплатная парковка',
            isBottom: true,
        },
    ],
};

export const playingFieldSlice = createSlice({
    name: 'playingField',
    initialState,
    reducers: {},
});

export const selectTopLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ isBottom }) => !isBottom);
};
export const selectBottomLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ isBottom }) => isBottom);
};

export default playingFieldSlice.reducer;
