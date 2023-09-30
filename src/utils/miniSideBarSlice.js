import { createSlice } from "@reduxjs/toolkit";

const miniSideBarSlice = createSlice({
    name: "app1",
    initialState : {
        miniIsMenuOpen: true,
    },
    reducers:{
        miniToggleMenu: (state) =>{
            state.miniIsMenuOpen = !state.miniIsMenuOpen;
        },
        miniCloseMenu: (state ) => {
            state.miniIsMenuOpen = false;
        }
        },
})

export const { miniToggleMenu, miniCloseMenu } = miniSideBarSlice.actions;
export default miniSideBarSlice.reducer;