import { createSlice } from '@reduxjs/toolkit';

export const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    changeState: {},
    collections: [],     
    isModalOpen: false,   
  },
  reducers: {
    addCollection: (state, action) => {
        var randomId = generateUUID();
        action.payload = {...action.payload, id: randomId, timestamp: Date.now()}
        state.collections.push(action.payload);
    },
    deleteCollection: (state, action) => {
        state.collections = state.collections.filter((_, index) => index !== action.payload);
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeState: (state, action) =>{
        state.changeState = action.payload;
    },
    addItemToCollection: (state, action) => {
        const { collectionId, item } = action.payload;
    
        const collection = state.collections.find(
            (collection) => collection.id === collectionId
        );
    
        if (collection) {
            collection.items.push(item);
        }
    },
    removeItemFromCollection: (state, action) => {
    const { collectionId, itemId } = action.payload;

    const collection = state.collections.find(
        (collection) => collection.id === collectionId
    );

    if (collection) {
        collection.items = collection.items.filter(item => item.id !== itemId);
    }
    }
}
});

export const { addCollection, toggleModal ,deleteCollection, saveTemp, addItemToCollection, removeItemFromCollection, changeState } = collectionSlice.actions;

export default collectionSlice.reducer;
