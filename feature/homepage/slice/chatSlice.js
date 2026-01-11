import { SENDER } from '@/lib/constants';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversation: [],
};

export const chatSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addCoversation: (state, action) => {
      state.conversation = [...state.conversation, action.payload];
    },
    replaceLastBotMessage: (state, action) => {
      const idx = state.conversation.findLastIndex(
        (msg) => msg.source === SENDER.BOT && msg.isLoading
      );
      if (idx !== -1) {
        state.conversation[idx] = {
          source: SENDER.BOT,
          message: action.payload,
          isLoading: false,
        };
      }
    },
  },
});

export const { addCoversation, replaceLastBotMessage } = chatSlice.actions;
export default chatSlice.reducer;
