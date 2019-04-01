import {
  ENCODE_FILESHARE_ID,
  ENCODE_FILESHARE_ID_SUCCEDED,
  ENCODE_FILESHARE_ID_FAILED,
  DECODE_FILESHARE_ID,
  DECODE_FILESHARE_ID_SUCCEDED,
  DECODE_FILESHARE_ID_FAILED
} from '../constants/fileshare';

export function encodeFileshareId(id) {
  return {
    type: ENCODE_FILESHARE_ID,
    id,
  };
}

export function encodeFileshareIdSucceded(fileshareId) {
  return {
    type: ENCODE_FILESHARE_ID_SUCCEDED,
    fileshareId,
  };
}

export function encodeFileshareIdFailed(error) {
  return {
    type: ENCODE_FILESHARE_ID_FAILED,
    error,
  };
}

export function decodeFileshareId(fileshareId) {
  return {
    type: DECODE_FILESHARE_ID,
    fileshareId,
  };
}

export function decodeFileshareIdSucceded(remoteId) {
  return {
    type: DECODE_FILESHARE_ID_SUCCEDED,
    remoteId,
  };
}

export function decodeFileshareIdFailed(error) {
  return {
    type: DECODE_FILESHARE_ID_FAILED,
    error,
  };
}
