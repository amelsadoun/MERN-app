import { useFormik } from "formik";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../api";
import { useState } from "react";
import { Loader } from "./Loader";

export default function SignUp() {
  // some shared styles between components
  const inputSharedStyle =
    "h-10 p-3 rounded-xl border-[1px] bg-slate-50 drop-shadow";
  const labelSharedStyle = "ml-2 text-[13px] text-green-700";
  const divSharedStyle = "flex flex-col gap-2";

  const dispatch = useDispatch();

  //loader mor submission
  const [loading, setLoading] = useState(false);

  //form validation - front error handling
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
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!values.confirmedPassword) {
      errors.confirmedPassword = "Please confirm your password";
    } else if (values.confirmedPassword !== values.password) {
      errors.confirmedPassword = "The  password confirmation is incorrect";
    }

    if (!values.name) {
      errors.name = "Club name is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      description: "",
      imageURL: "",
    },
    validate,
    onSubmit: (data) => {
      // console.log(data)
      setLoading(true); //set loader
      const errorMessage = dispatch(signup(data));
      setLoading(false);
      if (errorMessage == "Club already exists") {
        formik.setErrors({ email: errorMessage });
      }
    },
  });

  //because there were 4 inputs, it's local in the function unlike the others because formik hh
  const renderInputField = (name, type, placeholder, formik) => (
    <div className={divSharedStyle}>
      <label htmlFor={name} className={labelSharedStyle}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputSharedStyle}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-600 text-sm">{formik.errors[name]}</div>
      ) : null}
    </div>
  );

  return (
    <div className=" bg-gradient-to-bl from-green-100 to-slate-200 mb-10 drop-shadow-xl w-[70vw] self-center p-10 flex border-[1px] border-slate-300 flex-col gap-5 rounded-3xl desktop:w-[40vw]">
      <Titles />
      {loading && <Loader />}
      <form className="flex flex-col gap-5 z-0" onSubmit={formik.handleSubmit}>
        {renderInputField("name", "text", "club name...", formik)}
        {renderInputField(
          "email",
          "email",
          "example: clubname@example.com",
          formik
        )}
        {renderInputField("password", "password", "password", formik)}
        {renderInputField(
          "confirmedPassword",
          "password",
          "confirm password",
          formik
        )}
        <div className={divSharedStyle}>
          <label htmlFor="description" className={labelSharedStyle}>
            Club description
          </label>
          <textarea
            name="description"
            type="text"
            placeholder="provide a short description of your club..."
            className={"min-h-20 " + inputSharedStyle}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <div className={divSharedStyle}>
          <label htmlFor="imageURL" className={labelSharedStyle}>
            Profile image
          </label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => formik.setFieldValue("imageURL", base64)}
          />
        </div>
        <Button label={"Create account"} onClick={formik.handleSubmit} />
      </form>
      <LoginLink />
    </div>
  );
}

const Button = ({ label, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="relative items-center self-center justify-start inline-block px-5 py-2 overflow-hidden text-lg rounded-full group"
    >
      <span className="translate-x-0 absolute bg-green-700 opacity-[3%]"></span>
      <span className="absolute top-0 rounded-r-full left-0 w-[300px] h-60 -mt-1 transition-all duration-500 ease-in-out -translate-x-80 bg-green-900 opacity-100 group-hover:translate-x-0"></span>
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
      <p className="text-green-900 text-left self-center font-bold text-2xl desktop:text-3xl ">
        Create an (E)venTech account
      </p>
      <p className="text-green-900 text-left self-center font-medium text-lg mb-3">
        Your chance to share your upcoming events with the community!
      </p>
    </>
  );
};

const LoginLink = () => {
  return (
    <p className="self-center text-sm">
      already have an account?{" "}
      <Link to="/login" className="text-green-700 underline">
        Log in
      </Link>
    </p>
  );
};
