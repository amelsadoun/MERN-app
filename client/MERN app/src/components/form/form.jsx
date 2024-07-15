import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import FileBase from 'react-file-base64';

const Form = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      message: '',
      creator: '',
      tags: '',
      selectedFile: ''
    },
    onSubmit: values => {
      const { tags, ...rest } = values;
      dispatch(createPost({ ...rest, tags: tags.split(',').map(tag => tag.trim()) }));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="post title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />

      <textarea
        name="message"
        placeholder="post message"
        value={formik.values.message}
        onChange={formik.handleChange}
      />

      <input
        type="text"
        name="creator"
        placeholder="post creator"
        value={formik.values.creator}
        onChange={formik.handleChange}
      />

      <input
        type="text"
        name="tags"
        placeholder="tags (comma separated)"
        value={formik.values.tags}
        onChange={formik.handleChange}
      />

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => formik.setFieldValue('selectedFile', base64)}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
