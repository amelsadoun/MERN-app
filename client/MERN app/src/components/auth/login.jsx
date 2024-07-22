import { useFormik } from "formik";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../api";

export default function Login() {
  //some component styles
  const inputSharedStyle =
    "h-10 p-3 rounded-xl border-[1px] bg-slate-50 drop-shadow";
  const labelSharedStyle = "ml-2 text-[13px] text-green-700";
  const divSharedStyle = "flex flex-col gap-2";

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate,
    onSubmit: (formData) => {
      dispatch(login(formData));
    },
  });
  return (
    <form className="bg-gradient-to-bl from-green-100 to-slate-200 mb-10 shadow w-[70vw] self-center p-10 flex border-[1px] border-green-200 flex-col gap-5 rounded-3xl desktop:w-[30vw]">
      <p className="text-green-900 self-center text-center font-bold text-2xl desktop:text-3xl ">
        Login to your (E)venTech account
      </p>
      <p className="text-green-900 text-left self-center font-medium text-lg mb-3">
        Got a new event to promote? Login and inform the community!
      </p>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Email address
        </label>
        <input
          type="email"
          placeholder="example: clubname@example.com"
          className={inputSharedStyle}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          className={inputSharedStyle}
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>

      <Button label={"Log in"} onClick={formik.handleSubmit}/>
      <p className="self-center text-sm">
        Don't have an account yet?{" "}
        <Link to="/signup" className="text-green-700 underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}

function Button({ label, onClick }) {
  return (
    <a onClick={onClick} className="relative items-center self-center justify-start inline-block px-5 py-2 overflow-hidden text-lg rounded-full group my-3">
      <span className="translate-x-0 absolute bg-green-700 opacity-[3%]"></span>
      <span className="absolute top-0 rounded-r-full left-0 w-[200px] h-60 -mt-1 transition-all duration-500 ease-in-out -translate-x-80 bg-green-900 opacity-100 group-hover:translate-x-0"></span>
      <span className="relative w-full text-green-900 transition-colors duration-200 ease-in-out group-hover:text-white">
        {label}
      </span>
      <span class="absolute inset-0 border-[1px] border-green-900 rounded-full"></span>
    </a>
  );
}
