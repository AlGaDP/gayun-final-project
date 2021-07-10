import {createSlice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const namespace = "addtocart";

const slice = createSlice({
    name: namespace,
    initialState: {
        idProduct: {},
        amountProduct: null,
    },
    reducers: {
        set: (state, action) => {
            let {payload} = action;
            let {...rest} = payload;
            
            return {
                ...state,
                ...rest,
            };
        },
    }
});

export const { set } = slice.actions;

export function setAmountProduct(amount){
      amount ++;
return set ({
    amountProduct: amount,
        })
};

export function setIdProduct(id){
    
return set ({

  idProduct: id,
    })
};

export const reducer = slice.reducer;

export const selectField = (s, key) => s[namespace][key];
export const selectAmountProduct = (s) => selectField(s, 'amountProduct');
export const selectIdProduct = (s) => selectField(s, 'idProduct');