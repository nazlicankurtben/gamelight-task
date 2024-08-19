import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  fetchGamesRequest,
  fetchGamesSuccess,
  fetchGamesFailure,

} from "./gameSlice";
import { Game } from "./gameSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const API_URL = "https://mock-game-api-9a408f047f23.herokuapp.com/api/games";
const API_KEY = "01964fa8-f0e5-40fc-a13b-9f5c3a5415f3";

function* fetchGamesApi(): Generator<any, void, Response> {
  try {
    const response: Response = yield call(fetch, API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.statusText}`);
    }

    const games: Game[] = (yield response.json()) as unknown as Game[];

    yield put(fetchGamesSuccess(games));
  } catch (error: any) {
    yield put(fetchGamesFailure(error.message || "Failed to fetch games"));
  }
}


function* watchFetchGames(): Generator<any, void, unknown> {
  yield takeEvery(fetchGamesRequest.type, fetchGamesApi);
}


export default function* rootSaga(): Generator<any, void, unknown> {
  yield all([watchFetchGames()]);
}
