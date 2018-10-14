import { fork, all } from 'redux-saga/effects';

const sagas = [
  // NOTE: put other app sagas here
];

function* globalSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all(globalSagasForks);
}

export default globalSaga;
