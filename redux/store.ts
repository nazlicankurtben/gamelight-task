import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import gameReducer from './gameSlice';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        games: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
