import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   { firstName: ' ',
     lastName: ' ',
     email: '',
     country_citizenship: '',
     url: ''
   }
   ]

   const clientSlice = createSlice({
        name: 'client',
        initialState,
        reducers: {
            addClient: (state) => {
              const  {  firstName, lastName,  email, country_citizenship, url } = action.PayloadAction
              state.push({firstName, lastName,  email, country_citizenship, url})
            },
            updateClient: (state) => {
                const  {  firstName, lastName,  email, country_citizenship, url } = action.PayloadAction
              state.push({firstName, lastName,  email, country_citizenship, url})
            }
            
        }         
        })
        export const {addClient, updateClient, } = clientSlice.actions;
export default clientSlice.reducer;
   