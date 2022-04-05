import React from "react";
import { connect } from 'react-redux';

import FormComponent from './Form.component';
import { createSinglePost } from '../../store/Posts/Posts.action';
import * as api from '../../api';

export const mapStateToProsp = (state) => ({});

export const mapDispatchToProps = (dispatch) => ({
  createPost: postData => dispatch(createSinglePost(postData)),
});

export const FormContainer = (props) => {
  const { createPost } = props;

  const handelSubmit = async (e, postData) => {
    e.preventDefault()


    try {
      const { data } = await api.createPost(postData)
      createPost(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const containerFunctions = {
    handelSubmit: handelSubmit.bind(this)
  }

  return (
    <FormComponent { ...containerFunctions } />
  );
}

export default connect(mapStateToProsp, mapDispatchToProps)(FormContainer);