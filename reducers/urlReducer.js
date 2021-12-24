export const urlReducer = (state = { urlItems: [], urlList: {} }, action) => {
  switch (action.type) {
    case "Add To List":
      const item = action.payload;
      console.log(item);
      const isItemExist = state.urlItems.find((i) => i.id === item.linkId);

      if (isItemExist) {
        return {
          ...state,
          urlItems: state.urlItems.map((i) =>
            i.id === isItemExist.linkId ? item : i
          ),
        };
      } else {
        return {
          ...state,
          urlItems: [...state.urlItems, item],
        };
      }

    // case "Get List": {
    // //  nsole.log(itemExist)

    //   return {
    //     ...state,
    //     urlList: action.payload,
    //   };
    // }
   

    case "CLEAR":
      return {
        ...state,
        urlItems: null,
      };
    default:
      return state;
  }
};

export const listReducer = (state = { urlList: {} }, action) => {
  switch (action.type) {
    case "Get List": {
      // const itemm = action.payload.id;
      // console.log(itemm)
      // const itemExist = state.urlItems.find(i => i.id === itemm.id)

      // console.log(itemExist)

      return {
        ...state,
        urlList: action.payload,
      };
    }

    default:
      return state;
  }
};
