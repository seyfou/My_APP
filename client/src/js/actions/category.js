import {
  GET_CATEGORY_LOAD,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY,
  POST_CATEGORY,
  POST_CATEGORY_FAIL
} from "../constants/category";

import axios from "axios";

//Get all catégories
export const getCategories = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_LOAD });
  try {
    let result = await axios.get("/category");
    dispatch({ type: GET_CATEGORY_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAIL, payload: error });
  }
};
//Get one catégorie
export const getCategory = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/category/${id}`);

    dispatch({ type: GET_CATEGORY, payload: res.data.result });
  } catch (err) {
    console.log(err);
  }
};

//Delete catégorie
export const deleteCategory = (id) => async (dispatch) => {
  await axios
    .delete(`/category/${id}`)
    .then((res) => dispatch(getCategories()))
    .catch((err) => console.log(err));
};
//Add Category
export const postCategory = (category) => async (dispatch) => {
  try {
    const res = await axios.post("/category", category);

    dispatch({ type: POST_CATEGORY, payload: res.data });
    dispatch(getCategories());
  } catch (error) {
    dispatch({ type: POST_CATEGORY_FAIL, payload: error });
    console.log(error);
  }
};
