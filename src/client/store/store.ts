/**
 * Importing the modules needed for the store.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * Importing action reducers.
 */
import { generalReducer } from './reducers/generalReducer';

/**
 * Combining all the reducers together.
 */
const rootReducer = combineReducers({
  general: generalReducer,
});

/**
 * Exporting AppState: it contains the typeof rootReducer that 
 * will be used into mapStateToProps.
 */
export type AppState = ReturnType<typeof rootReducer>;

/**
 * Configuring the Redux Store.
 */
export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  return store;
};