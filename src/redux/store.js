import rootReducer  from "./reducers"
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";


// const logger = createLogger();

export const store = createStore(rootReducer,applyMiddleware());
export const persistor = persistStore(store);

export default {store,persistor}