import { RootState } from 'app/store';

const getTransportCompaniesListForCard = (state: RootState) => {
  const transportCompanyList = state.field.sectorList.filter(({ id, type }) => {
    return type === 'TransportCompany' && id !== state.field.targetSector.id;
  });

  return transportCompanyList.map(({ id, title, transferPrice, owner }) => ({
    id,
    title,
    transferPrice: transferPrice || 0,
    owner: owner || null,
  }));
};

export default getTransportCompaniesListForCard;
