import { SectorType } from 'core/Sector/SectorType.model';
import { bankSectorFabric } from 'core/SectorFabric/BankSectorFabric.model';
import { chanceSectorFabric } from 'core/SectorFabric/ChanceSectorFabric.model';
import { freeParkingSectorFabric } from 'core/SectorFabric/FreeParkingSectorFabric.model';
import { landPlotSectorFabric } from 'core/SectorFabric/LandPlotSectorFabric.model';
import { startSectorFabric } from 'core/SectorFabric/StartSectorFabric.model';
import { transportCompanySectorFabric } from 'core/SectorFabric/TransportCompanySectorFabric.model';
import { trapSectorFabric } from 'core/SectorFabric/TrapSectorFabric.model';
import { arrestSectorFabric } from 'core/SectorFabric/ArrestSectorFabric.model';
import { utilityCompanySectorFabric } from 'core/SectorFabric/UtilityCompanySectorFabric.model';
import { Color } from 'models/color.type';
import { LineType } from 'models/LineType.type';
import { idGenerator } from 'utilities/idGenerator/idGenerator';
import { prisonSectorFabric } from 'core/SectorFabric/PrisonSectorFabric.model';
import { taxSectorFabric } from 'core/SectorFabric/TaxSectorFabric.model';
import { SectorFabric } from 'core/SectorFabric/SectorFabric.model';

interface Field {
  title: string;
  price: number;
  type: SectorType;
  line: LineType;
  color?: Color;
  rentPrice?: number;
  transferPrice?: number;
  housePrice?: number;
  rentPriceListWithHouse?: number[];
}

const topLineConfig: Field[] = [
  {
    title: 'Старт',
    price: 0,
    type: 'Start',
    line: 'Top',
  },
  {
    title: 'Гапеева',
    price: 60,
    rentPrice: 2,
    rentPriceListWithHouse: [10, 30, 90, 160, 250],
    housePrice: 50,
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
    rentPrice: 4,
    rentPriceListWithHouse: [20, 60, 180, 320, 450],
    housePrice: 50,
    color: 'purple',
    type: 'LandPlot',
    line: 'Top',
  },
  {
    title: 'Налог с дохода',
    price: 0,
    type: 'Tax',
    line: 'Top',
  },
  {
    title: 'Западный порт',
    price: 200,
    rentPrice: 20,
    transferPrice: 50,
    type: 'TransportCompany',
    line: 'Top',
  },
  {
    title: 'Чкалова',
    price: 100,
    rentPrice: 6,
    rentPriceListWithHouse: [30, 90, 270, 400, 550],
    housePrice: 50,
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
    rentPrice: 6,
    rentPriceListWithHouse: [30, 90, 270, 400, 550],
    housePrice: 50,
    color: 'blue',
    type: 'LandPlot',
    line: 'Top',
  },
  {
    title: 'Пушкина',
    price: 120,
    rentPrice: 8,
    rentPriceListWithHouse: [40, 100, 300, 450, 600],
    housePrice: 50,
    color: 'blue',
    type: 'LandPlot',
    line: 'Top',
  },
  {
    title: 'Тюрьма',
    price: 0,
    type: 'Prison',
    line: 'Top',
  },
  {
    title: 'Бульвар мира',
    price: 140,
    rentPrice: 10,
    rentPriceListWithHouse: [50, 150, 450, 625, 750],
    housePrice: 100,
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
    rentPrice: 10,
    rentPriceListWithHouse: [50, 150, 450, 625, 750],
    housePrice: 100,
    color: 'blue-sky',
    type: 'LandPlot',
    line: 'Top',
  },
  {
    title: 'Гоголя',
    price: 160,
    rentPrice: 12,
    rentPriceListWithHouse: [60, 180, 500, 700, 900],
    housePrice: 100,
    color: 'blue-sky',
    type: 'LandPlot',
    line: 'Top',
  },
  {
    title: 'Северный порт',
    price: 200,
    rentPrice: 20,
    transferPrice: 50,
    type: 'TransportCompany',
    line: 'Top',
  },
  {
    title: 'Ержанова',
    price: 180,
    rentPrice: 14,
    rentPriceListWithHouse: [70, 200, 550, 750, 950],
    housePrice: 100,
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
    rentPrice: 14,
    rentPriceListWithHouse: [70, 200, 550, 750, 950],
    housePrice: 100,
    color: 'green',
    type: 'LandPlot',
    line: 'Top',
  },
  {
    title: 'Абдирова',
    price: 200,
    rentPrice: 16,
    rentPriceListWithHouse: [80, 220, 600, 800, 1000],
    housePrice: 100,
    color: 'green',
    type: 'LandPlot',
    line: 'Top',
  },
];
const bottomLineConfig: Field[] = [
  {
    title: 'Гостиничный комплекс',
    price: 400,
    rentPrice: 50,
    rentPriceListWithHouse: [200, 600, 1400, 1700, 200],
    housePrice: 100,
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
    rentPrice: 35,
    rentPriceListWithHouse: [175, 500, 1100, 1300, 1500],
    housePrice: 200,
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
    price: 200,
    rentPrice: 20,
    transferPrice: 50,
    type: 'TransportCompany',
    line: 'Bottom',
  },
  {
    title: 'Авиакомпания',
    price: 400,
    rentPrice: 28,
    rentPriceListWithHouse: [150, 450, 1000, 1200, 1400],
    housePrice: 200,
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
    rentPrice: 26,
    rentPriceListWithHouse: [130, 390, 900, 1100, 1275],
    housePrice: 200,
    color: 'red',
    type: 'LandPlot',
    line: 'Bottom',
  },
  {
    title: 'Морские перевозки',
    price: 300,
    rentPrice: 26,
    rentPriceListWithHouse: [130, 390, 900, 1100, 1275],
    housePrice: 200,
    color: 'red',
    type: 'LandPlot',
    line: 'Bottom',
  },
  {
    title: 'Арест',
    price: 0,
    type: 'Arrest',
    line: 'Bottom',
  },
  {
    title: 'Сотовая связь',
    price: 280,
    rentPrice: 24,
    rentPriceListWithHouse: [120, 360, 850, 1025, 1200],
    housePrice: 150,
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
    rentPrice: 22,
    rentPriceListWithHouse: [110, 330, 800, 975, 1150],
    housePrice: 150,
    color: 'orange',
    type: 'LandPlot',
    line: 'Bottom',
  },
  {
    title: 'Компьютерная техника',
    price: 260,
    rentPrice: 22,
    rentPriceListWithHouse: [110, 330, 800, 975, 1150],
    housePrice: 150,
    color: 'orange',
    type: 'LandPlot',
    line: 'Bottom',
  },
  {
    title: 'Восточный порт',
    price: 200,
    rentPrice: 20,
    transferPrice: 50,
    type: 'TransportCompany',
    line: 'Bottom',
  },
  {
    title: 'Ресторан',
    price: 240,
    rentPrice: 20,
    rentPriceListWithHouse: [100, 300, 750, 925, 1100],
    housePrice: 150,
    color: 'yellow',
    type: 'LandPlot',
    line: 'Bottom',
  },
  {
    title: 'Ночной клуб',
    price: 220,
    rentPrice: 18,
    rentPriceListWithHouse: [90, 250, 700, 875, 1050],
    housePrice: 150,
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
    rentPrice: 18,
    rentPriceListWithHouse: [90, 250, 700, 875, 1050],
    housePrice: 150,
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
const bottomLineConfigReversed: Field[] = bottomLineConfig.reverse();

function getSectorList(config: Field[]) {
  return config.map(
    ({
      type,
      title,
      line,
      color,
      price,
      rentPrice,
      transferPrice,
      rentPriceListWithHouse,
      housePrice,
    }) => {
      type Fabric = { [key in SectorType]: SectorFabric };
      const fabric: Fabric = {
        Arrest: arrestSectorFabric,
        Bank: bankSectorFabric,
        Chance: chanceSectorFabric,
        FreeParking: freeParkingSectorFabric,
        LandPlot: landPlotSectorFabric,
        Prison: prisonSectorFabric,
        Start: startSectorFabric,
        Tax: taxSectorFabric,
        TransportCompany: transportCompanySectorFabric,
        Trap: trapSectorFabric,
        UtilityCompany: utilityCompanySectorFabric,
      };

      const config = {
        id: idGenerator.getNewSectorID(),
        title,
        line,
        color,
        price,
        rentPrice,
        transferPrice,
        housePrice,
        rentPriceListWithHouse,
      };

      return { ...fabric[type].createSector(config) };
    }
  );
}
const topLineList = getSectorList(topLineConfig);
const bottomLineList = getSectorList(bottomLineConfigReversed).reverse();

export const playingFieldList = [...topLineList, ...bottomLineList];
