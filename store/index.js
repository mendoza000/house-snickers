import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { createWrapper } from 'next-redux-wrapper';

// initial state here
const initialState = {}

// middleware
const middleware = [thunk]

// creatingStore
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore)