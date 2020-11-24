import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {applyMiddleware, compose, createStore} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {rootReducer} from "./redux/rootReducer"
import {loadState, saveState} from "./localStorage"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState()

const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(
        thunk
    )))

store.subscribe(() => {
    saveState(
        store.getState().checkedReducer
    )
})

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
)


