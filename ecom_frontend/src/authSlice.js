import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
    try {
        const reponse = await fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            credentials: 'include',
            body: JSON.stringify(credentials)
        })
        const data = await reponse.json()
        if (!reponse.ok) throw new Error(data.message || 'login failed')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const fetchProfile = createAsyncThunk("auth/fetchProfile", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) return thunkAPI.rejectWithValue("No token found");

    const response = await fetch("http://localhost:3000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to fetch user");

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: localStorage.getItem('accessToken') || null,
        isAuthenticated: false,
        isLoading: false,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout(state, action) {
            state.user = null
            state.accessToken = null
            state.isAuthenticated = false
            localStorage.removeItem('accessToken')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => { state.isLoading = true })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.accessToken = action.payload.accessToken
                state.isAuthenticated = true
                localStorage.setItem('accessToken', action.payload.accessToken)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.user = action.payload
                state.isAuthenticated = true
            })
    }
})


export const { logout , setUser} = authSlice.actions
export default authSlice.reducer
