import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../types/user.type'

interface userState {
	user: Pick<IUser, 'id' | 'name' | 'role'> | null
}

const initialState: userState = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (
			state,
			action: PayloadAction<Pick<IUser, 'id' | 'name' | 'role'>>
		) => {
			state.user = action.payload
		},
		logout: state => {
			state.user = null
		},
	},
})

export const userActions = userSlice.actions

export default userSlice.reducer
