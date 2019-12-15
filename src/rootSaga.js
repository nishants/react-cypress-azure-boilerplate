import { all } from 'redux-saga/effects';
import homeSaga from './app/pages/homepage/sagas';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
