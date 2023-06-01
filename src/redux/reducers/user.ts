import { createReducer } from "@reduxjs/toolkit"
import { IUserStore } from "models"
import { login } from "reduxsaga/actions"

const initialUser: IUserStore = {
}
export default createReducer(initialUser, builder=>{
    builder.addCase(login, (state, action)=>{
    })
})