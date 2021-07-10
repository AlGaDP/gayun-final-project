import { produce } from "immer";

// duck namespace
export const namespace = "addtocart";

// action types
export const ADD_ITEM = `${namespace}/ADD_ITEM`;
export const ADD_AMOUNT = `${namespace}/ADD_AMOUNT`;
export const SET_AMOUNT = `${namespace}/SET_AMOUNT`;
export const UPDATE_AMOUNT = `${namespace}/UPDATE_AMOUNT`;
export const REMOVE_CARD = `${namespace}/REMOVE_CARD`;

// action creators
export function addProductToCard(item) {
  return {
    type: ADD_ITEM,
    item,
  }
}

export function setAmountProduct(value) {
  return {
    type: ADD_AMOUNT,
    value,
   
  }
}

export function setAmountProductList(id, value) {
  return {
    type: SET_AMOUNT,
    id,
    value,
  }
}

export function setAmountProductListUpdate(id, value) {
  return {
    type: UPDATE_AMOUNT,
    id,
    value,
  }
}

export function setRemoveCard(value) {
    return {
      type: REMOVE_CARD,
      value,
    }
}

// initial state
const initialState = {
    idProduct: [],
    amountProduct: null,
    amountProductList: [],
};

const reducerReactionsMap = {
  [ADD_ITEM]: (state, action) => state,
};

// reducer
export function reducer(state = initialState, action) {
  let { type, id, item, key, value } = action;

  switch (type) {
    case ADD_ITEM:
       return produce(state, (s) => {
        s.idProduct.push(item);
      });

    case ADD_AMOUNT:
         return produce(state, (s) => {
            value++;
        s.amountProduct = value;
      });

    case SET_AMOUNT:
      return produce(state, (s) => {
          let coll = {id: id,
            coll: value};
        s.amountProductList.push(coll);
       
      });

    case UPDATE_AMOUNT:
      return produce(state, s => {
        let index = s.amountProductList.findIndex(el => el.id === id);
        if (index > -1) {
          s.amountProductList[index].coll = value;
        }
      });

      case REMOVE_CARD:
      return produce(state, s => {
          if (value) {
          s.amountProductList.length = 0;
          s.idProduct.length = 0;
          s.amountProduct = null;
        }
      });

    default:
      return state;
  }
}

// selectors
export const selectAmountProduct = state => state[namespace].amountProduct;
export const selectAmountProductColl = state => state[namespace].amountProductList;
//export const selectIsOpened = state => state[namespace].isOpened;
