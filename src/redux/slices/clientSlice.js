import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   { firstName: ' ',
     lastName: ' ',
     email: '',
     country_citizenship: '',
     url: '',
     application_status:''
   }
   ]

   const clientSlice = createSlice({
        name: 'client',
        initialState,
        reducers: {
            addClient: (state) => {
              const  {  firstName, lastName,  email, country_citizenship, url } = action.PayloadAction
              state.push({firstName, lastName,  email, country_citizenship, url, appllication_status})
            },
            updateClient: (state) => {
                const  {  firstName, lastName,  email, country_citizenship, url } = action.PayloadAction
              state.push({firstName, lastName,  email, country_citizenship, url, appllication_status})
            }
            
        }         
        })
        export const {addClient, updateClient, } = clientSlice.actions;
export default clientSlice.reducer;
   