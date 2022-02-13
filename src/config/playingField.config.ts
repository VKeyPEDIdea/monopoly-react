import { Sector } from "../core/Sector/Sector.interface";
import { SectorType } from "../core/Sector/SectorType.model";
import { bankSectorFabric } from "../core/SectorFabric/BankSectorFabric.model";
import { chanceSectorFabric } from "../core/SectorFabric/ChanceSectorFabric.model";
import { freeParkingSectorFabric } from "../core/SectorFabric/FreeParkingSectorFabric.model";
import { landPlotSectorFabric } from "../core/SectorFabric/LandPlotSectorFabric.model";
import { startSectorFabric } from "../core/SectorFabric/StartSectorFabric.model";
import { transportCompanySectorFabric } from "../core/SectorFabric/TransportCompanySectorFabric.model";
import { trapSectorFabric } from "../core/SectorFabric/TrapSectorFabric.model";
import { utilityCompanySectorFabric } from "../core/SectorFabric/UtilityCompanySectorFabric.model";
import { Color } from "../models/color.type";
import { LineType } from "../models/LineType.type";

interface Field {
    title: string;
    price: number;
    type: SectorType;
    line: LineType;
    color?: Color;
}

const playingFieldConfig: Field[] = [
    {
        title: 'Старт',
        price: 0,
        type: 'Start',
        line: 'Top',
    },
    {
        title: 'Гапеева',
        price: 60,
        color: 'purple',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Банк',
        price: 0,
        type: 'Bank',
        line: 'Top',
    },
    {
        title: 'Кривогуза',
        price: 60,
        color: 'purple',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Налог с дохода',
        price: 0,
        type: 'Trap',
        line: 'Top',
    },
    {
        title: 'Западный порт',
        price: 0,
        type: 'TransportCompany',
        line: 'Top',
    },
    {
        title: 'Чкалова',
        price: 100,
        color: 'blue',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Шанс',
        price: 0,
        type: 'Chance',
        line: 'Top',
    },
    {
        title: 'Бухар Жирау',
        price: 100,
        color: 'blue',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Пушкина',
        price: 120,
        color: 'blue',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Тюрьма',
        price: 0,
        type: 'Trap',
        line: 'Top',
    },
    {
        title: 'Бульвар мира',
        price: 140,
        color: 'blue-sky',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Электрическая компания',
        price: 0,
        type: 'UtilityCompany',
        line: 'Top',
    },
    {
        title: 'Абая',
        price: 140,
        color: 'blue-sky',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Гоголя',
        price: 160,
        color: 'blue-sky',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Северный порт',
        price: 0,
        type: 'TransportCompany',
        line: 'Top',
    },
    {
        title: 'Ержанова',
        price: 180,
        color: 'green',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Банк',
        price: 0,
        type: 'Bank',
        line: 'Top',
    },
    {
        title: 'Ермекова',
        price: 180,
        color: 'green',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Абдирова',
        price: 200,
        color: 'green',
        type: 'LandPlot',
        line: 'Top',
    },
    {
        title: 'Гостиничный комплекс',
        price: 400,
        color: 'pink',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Дорогая покупка',
        price: 0,
        type: 'Trap',
        line: 'Bottom',
    },
    {
        title: 'Курортная зона',
        price: 350,
        color: 'pink',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Шанс',
        price: 0,
        type: 'Chance',
        line: 'Bottom',
    },
    {
        title: 'Южный порт',
        price: 0,
        type: 'TransportCompany',
        line: 'Bottom',
    },
    {
        title: 'Авиакомпания',
        price: 400,
        color: 'red',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Банк',
        price: 0,
        type: 'Bank',
        line: 'Bottom',
    },
    {
        title: 'Железная дорога',
        price: 300,
        color: 'red',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Морские перевозки',
        price: 300,
        color: 'red',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Арест',
        price: 0,
        type: 'Trap',
        line: 'Bottom',
    },
    {
        title: 'Сотовая связь',
        price: 280,
        color: 'orange',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Водопроводная компания',
        price: 400,
        type: 'UtilityCompany',
        line: 'Bottom',
    },
    {
        title: 'Интернет',
        price: 260,
        color: 'orange',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Компьютерная техника',
        price: 260,
        color: 'orange',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Восточный порт',
        price: 0,
        type: 'TransportCompany',
        line: 'Bottom',
    },
    {
        title: 'Ресторан',
        price: 240,
        color: 'yellow',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Ночной клуб',
        price: 220,
        color: 'yellow',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Шанс',
        price: 0,
        type: 'Chance',
        line: 'Bottom',
    },
    {
        title: 'Бар',
        price: 220,
        color: 'yellow',
        type: 'LandPlot',
        line: 'Bottom',
    },
    {
        title: 'Бесплатная парковка',
        price: 0,
        type: 'FreeParking',
        line: 'Bottom',
        
    },
];

export const playingFieldList = playingFieldConfig.map(({
    type,
    title,
    line,
    color,
    price,
}, index) => {
    let fabric;

    switch (type) {
        case 'Bank':
            fabric = bankSectorFabric;
            break;
        case 'Chance':
            fabric = chanceSectorFabric;
            break;
        case 'FreeParking':
            fabric = freeParkingSectorFabric;
            break;
        case 'LandPlot':
            fabric = landPlotSectorFabric;
            break;
        case 'Start':
            fabric = startSectorFabric;
            break;
        case 'TransportCompany':
            fabric = transportCompanySectorFabric;
            break;
        case 'Trap':
            fabric = trapSectorFabric;
            break;
        case 'UtilityCompany':
            fabric = utilityCompanySectorFabric;
            break;
        default:
            fabric = landPlotSectorFabric;
            break;
    }

    const config = {
        id: index,
        title,
        line,
        color,
        price
    };

    return fabric.createSector(config);
});