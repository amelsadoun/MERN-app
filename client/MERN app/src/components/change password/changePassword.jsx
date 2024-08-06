import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { changePassword } from "../../actions/auth";
import { Loader } from "../utils/Loader";
import { validateChangePassword } from "./validate";
import { useNavigate } from "react-router-dom";
import * as fields from "./passwordFields";
import { changePassword } from "../../actions/auth";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const clubId = useSelector((state) => state.auth.club?.id);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate: validateChangePassword,
    onSubmit: async (values) => {
      setLoading(true);
      const errorMessage = await dispatch(changePassword(clubId, values));
      setLoading(false);
      if (errorMessage === "The old password is incorrect") {
        formik.setErrors({ oldPassword: errorMessage });
      } else {
        navigate("/");
      }
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {loading && <Loader />}

      <form
        className="flex flex-col bg-gradient-to-bl p-14 rounded-2xl mb-10 shadow-lg border-[1px] border-slate-200 from-green-100 to-slate-50 justify-between gap-10 self-center w-[50vw] desktop:w-[30vw]"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl text-center mb-3 font-semibold">
          Change Password
        </h1>
        <fields.OldPassword formik={formik} />
        <fields.NewPassword formik={formik} />
        <fields.ConfirmPassword formik={formik} />
        <button
          className="py-2 px-5 border-green-900 border-[1px] self-center rounded-xl text-green-900 hover:bg-gradient-to-br from-green-300 to-slate-100 shadow-md"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </>
  );
};

export default ChangePassword;
