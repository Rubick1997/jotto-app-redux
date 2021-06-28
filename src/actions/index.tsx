import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const getSecretWord = () => {
  //return response from server
  //write actuall action in Redux/contet sections
  return axios.get("http://localhost:3030").then((response) => response.data);
};
