import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../../actions/auth";
import { Loader } from "../utils/Loader";

export default function Login() {
  const inputSharedStyle =
    "h-10 p-3 rounded-xl border-[1px] bg-slate-50 drop-shadow";
  const labelSharedStyle = "ml-2 text-[13px] text-green-700";
  const divSharedStyle = "flex flex-col gap-2";

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  //general (front side) error handling
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      //field is empty
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //not in email format
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      //password field is empty
      errors.password = "Password is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (formData) => {
      setLoading(true); // Set loading state to true
      const errorMessage = await dispatch(login(formData));
      setLoading(false); // Sema we're done loading
      //setting back-end errors (didn't know how to handle them in validate hh)
      if (errorMessage === "No club exists with this email address") {
        formik.setErrors({ email: "No club exists with this email address" });
      } else if (errorMessage === "The password is incorrect") {
        formik.setErrors({ password: "The password is incorrect" });
      }
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <div className="bg-gradient-to-bl drop-shadow-xl from-green-100 to-slate-200 mb-10 w-[70vw] self-center p-10 flex border-[1px] border-slate-300 flex-col gap-5 rounded-3xl desktop:w-[30vw] overflow-hidden">
      <Titles />
      {loading && <Loader />}
      <form className="flex flex-col gap-5 z-0" onSubmit={formik.handleSubmit}>
        <div className={divSharedStyle}>
          <label htmlFor="email" className={labelSharedStyle}>
            Email address
          </label>
          <input
            disabled={loading}
            type="email"
            placeholder="example: clubname@example.com"
            className={inputSharedStyle}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={divSharedStyle}>
          <label htmlFor="password" className={labelSharedStyle}>
            Password
          </label>
          <input
            disabled={loading}
            type="password"
            placeholder="password"
            className={inputSharedStyle}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button label={"Log in"} onClick={formik.handleSubmit} />
      </form>
      <SignupLink />
    </div>
  );
}

const Button = ({ label, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="relative items-center self-center justify-start inline-block px-5 py-2 overflow-hidden text-lg rounded-full group my-3"
    >
      <span className="translate-x-0 absolute bg-green-700 opacity-[3%]"></span>
      <span className="absolute top-0 rounded-r-full left-0 w-[200px] h-60 -mt-1 transition-all duration-500 ease-in-out -translate-x-80 bg-green-900 opacity-100 group-hover:translate-x-0"></span>
      <span className="relative w-full text-green-900 transition-colors duration-200 ease-in-out group-hover:text-white">
        {label}
      </span>
      <span className="absolute inset-0 border-[1px] border-green-900 rounded-full"></span>
    </a>
  );
};

const Titles = () => {
  return (
    <>
      <p className="text-green-900 self-center text-center font-bold text-2xl desktop:text-3xl ">
        Login to your (E)venTech account
      </p>
      <p className="text-green-900 text-left self-center font-medium text-lg mb-3">
        Got a new event to promote? Login and inform the community!
      </p>
    </>
  );
};

const SignupLink = () => {
  return (
    <p className="self-center text-sm">
      Don't have an account yet?{" "}
      <Link to="/signup" className="text-green-700 underline">
        Create an account
      </Link>
    </p>
  );
};
