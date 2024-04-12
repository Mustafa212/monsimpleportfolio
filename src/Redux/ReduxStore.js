import { createStore } from "redux";
import Reducer from "./Reducer";

const toEnhancer = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__;
const store = createStore(Reducer, toEnhancer);

export default store;
