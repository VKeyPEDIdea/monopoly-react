const getNextListItemId = <T>(curId: number, list: Array<T>) => {
    return curId < list.length - 1 ? curId + 1 : 0;
}

export default getNextListItemId;
