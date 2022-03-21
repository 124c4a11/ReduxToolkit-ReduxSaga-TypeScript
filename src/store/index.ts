import {
  configureStore
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './reducers';


const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});


sagaMiddleware.run(rootSaga);


export type RootReducer = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
