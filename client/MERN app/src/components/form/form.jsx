import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import FileBase from "react-file-base64";

const Form = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
      creator: "",
      tags: "",
      selectedFile: "",
    },
    onSubmit: (values) => {
      const { tags, ...rest } = values;
      dispatch(
        createPost({ ...rest, tags: tags.split(",").map((tag) => tag.trim()) })
      );
    },
  });

  return (
    <form
      className="flex flex-col justify-between gap-5 self-center w-[90vw] "
      onSubmit={formik.handleSubmit}
    >
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="text"
        name="title"
        placeholder="post title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />

      <textarea
        className="p-2 min-h-40 max-h-60 rounded-md border-[1px] border-slate-300"
        name="message"
        placeholder="post message"
        value={formik.values.message}
        onChange={formik.handleChange}
      />

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => formik.setFieldValue("selectedFile", base64)}
      />

      <button
        className="py-2 px-5 border-green-900 border-[1px] self-center rounded-xl text-green-900 hover:bg-gradient-to-br from-green-300 to-slate-100 shadow-md"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
