"use strict";
exports.__esModule = true;
/**
 * Importing the modules needed for the store.
 */
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_logger_1 = require("redux-logger");
/**
 * Combining all the reducers together.
 */
var rootReducer = redux_1.combineReducers({});
/**
 * Configuring the Redux Store.
 */
exports.configureStore = function () {
    var store = redux_1.createStore(rootReducer, redux_1.applyMiddleware(redux_thunk_1["default"], redux_logger_1["default"]));
};