import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import  mainPage  from '../reducers/mainPageReducer'


const rootReducer = combineReducers({
    mainPageSlice: mainPage
}) 

export const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;