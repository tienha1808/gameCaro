import { createSlice } from "@reduxjs/toolkit";


const tickSlice = createSlice({
    name: 'tick',
    initialState: {
        allTicked: [],
        user1: {
            state: '',
            ticked: []
        },
        user2: {
            state: '',
            ticked: []
        }
    },
    reducers: {
        user1Play (state) {
            state.user1.state = 'play'
            state.user2.state = 'wait'
        },
        user2Play (state) {
            state.user1.state = 'wait'
            state.user2.state = 'play'
        },
        getValue1 (state, action) {
            state.user1.ticked.push(action.payload)
            state.allTicked.push(action.payload)
        },
        getValue2 (state, action) {
            state.user2.ticked.push(action.payload)
            state.allTicked.push(action.payload)
        },
        clearBoard (state) {
            state.allTicked = []
            state.user1.state = ''
            state.user2.state = ''
            state.user1.ticked = []
            state.user2.ticked = []
        }
    }
})

export const { user1Play, user2Play, getValue1, getValue2, clearBoard } = tickSlice.actions

export const allTicked = state => state.tick.allTicked
export const user1State = state => state.tick.user1.state
export const user1Ticked = state => state.tick.user1.ticked
export const user2State = state => state.tick.user2.state
export const user2Ticked = state => state.tick.user2.ticked

export const tickReducer = tickSlice.reducer