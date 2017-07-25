import { GET_FILES_FAIL, GET_FILES } from './constants';

export const files = data => {
  return ({
  type: GET_FILES,
  data
})};

export const loadFilesForReciter = (id) => {
  const url = `https://quranicaudio.com/api/qaris/${id}/audio_files/mp3`;

  return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch(files(data)))
    .catch((error) => {
      console.warn(error);
      dispatch(files([]));
    });
};
