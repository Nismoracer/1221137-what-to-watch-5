export const ActionType = {
  INITIALIZE_LIST: `INITIALIZE_LIST`,
  FILTER_LIST: `FILTER_LIST`,
};

export const ActionCreator = {
  initializeList: (list) => ({
    type: ActionType.INITIALIZE_LIST,
    payload: list
  }),
  filterList: (filterType) => ({
    type: ActionType.FILTER_LIST,
    filter: filterType
  }),
};

