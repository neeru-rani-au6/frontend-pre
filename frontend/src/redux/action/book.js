import {
  CREATEBOOK,
  ALLBOOK,
  UPDATEBOOK,
  DELETEBOOK,
  FATCHING,
  CREATECOUNT,
  UPDATECOUNT,
} from "../type";
import axios from "axios";

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `http://localhost:5000/book`,
      data: book,
    });
    dispatch({
      type: CREATEBOOK,
      payload: data.book,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATEBOOK,
      payload: {
        error: error.response,
      },
    });
  }
};

export const allBook = () => async (dispatch) => {
  try {
    //axios.defaults.withCredentials = true;
    dispatch({ type: FATCHING });
    const { data } = await axios(`http://localhost:5000/book`);
    dispatch({
      type: ALLBOOK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = (book) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "Put",
      url: `http://localhost:5000/book/${book.id}`,
      data: {
        photoUrl: book.photoUrl,
        title: book.title,
        author: book.author,
        genre: book.genre,
      },
    });
    dispatch({
      type: UPDATEBOOK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://localhost:5000/book/${id}`,
    });
    dispatch({
      type: DELETEBOOK,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const findCount = (type) => async (dispatch) => {
  try {
    //axios.defaults.withCredentials = true;
    dispatch({ type: FATCHING });
    console.log(type);
    const { data } = await axios(`http://localhost:5000/book/count/${type}`);
    if (type === "create") {
      dispatch({
        type: CREATECOUNT,
        payload: data,
      });
    } else {
      dispatch({
        type: UPDATECOUNT,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
