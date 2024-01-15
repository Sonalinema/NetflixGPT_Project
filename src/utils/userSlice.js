
import {createSlice} from '@reduxjs/toolkit'
const userSlice  = createSlice({
    name:'user',
    initialState:null,
    reducers:
    {
        addUser:(state,action)=>{
            //sign in 
            console.log(state,action)
            return action.payload;
        },
        removeUser:(state,action)=>{
            //sign out
            return null;
        }
    }
})
export const { addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;
