import {
  GET_FILESHARE_ID,
  GET_FILESHARE_ID_SUCCEDED,
  GET_FILESHARE_ID_FAILED
} from '../constants/fileshare';

export function getFileshareId() {
  return {
    type: GET_FILESHARE_ID,
  };
}

export function getFileshareIDSucceded(id) {
  return {
    type: GET_FILESHARE_ID_SUCCEDED,
    id,
  };
}

export function getFileshareIdFailed(error) {
  return {
    type: GET_FILESHARE_ID_FAILED,
    error,
  };
}
