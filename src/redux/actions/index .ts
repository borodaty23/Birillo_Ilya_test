import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ICards } from "../reducers/mainPageReducer";

interface ISearchParams {
    page: number | null;
    perPage: number | null;
    searchValue: string | null
}



export const getProjectCards = createAsyncThunk<ICards, ISearchParams>('mainPage', async (searchParams, thunkApi) => {
    try {
        const projects = await axios.get<ISearchParams, AxiosResponse<ICards>>(`https://api.github.com/search/repositories?q=${searchParams.searchValue}&per_page=${searchParams.perPage}&page=${searchParams.page}`)
        .then((res) => res.data);

    thunkApi.fulfillWithValue(projects);

    return projects;
    } catch {
        return thunkApi.rejectWithValue('err')
    }
})