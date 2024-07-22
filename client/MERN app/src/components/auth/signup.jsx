import { useFormik } from "formik";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../api";

export default function SignUp() {
  // some shared styles between components
  const inputSharedStyle =
    "h-10 p-3 rounded-xl border-[1px] bg-slate-50 drop-shadow";
  const labelSharedStyle = "ml-2 text-[13px] text-green-700";
  const divSharedStyle = "flex flex-col gap-2";

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      description: "",
      imageURL: "",
    },
    // validate,
    onSubmit: (data) => {
      // console.log(data)
      dispatch(signup(data));
    },
  });

  return (
    <form className="bg-gradient-to-bl from-green-100 to-slate-200 mb-10 shadow w-[70vw] self-center p-10 flex border-[1px] border-green-200 flex-col gap-5 rounded-3xl desktop:w-[40vw]">
      <p className="text-green-900 text-left self-center font-bold text-2xl desktop:text-3xl ">
        Create an (E)venTech account
      </p>
      <p className="text-green-900 text-left self-center font-medium text-lg mb-3">
        Your chance to share your upcoming events with the community!
      </p>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Club name
        </label>
        <input
          type="text"
          name="name"
          placeholder="club name..."
          className={inputSharedStyle}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Club email address
        </label>
        <input
          type="email"
          name="email"
          placeholder="example: clubname@example.com"
          className={inputSharedStyle}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className={inputSharedStyle}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Confirm password
        </label>
        <input
          type="password"
          name="confirmedPassword"
          placeholder="confirm password"
          className={inputSharedStyle}
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />
      </div>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Club description
        </label>
        <textarea
          name="description"
          type="text"
          placeholder="provide a short description of your club..."
          className={"min-h-20" + inputSharedStyle}
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </div>
      <div className={divSharedStyle}>
        <label htmlFor="" className={labelSharedStyle}>
          Profile image
        </label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => formik.setFieldValue("imageURL", base64)}
        />
      </div>
      <Button label={"Create account"} onClick={formik.handleSubmit} />
      <p className="self-center text-sm">
        already have an account?{" "}
        <Link to="/login" className="text-green-700 underline">
          Log in
        </Link>
      </p>
    </form>
  );
}

function Button({ label, onClick }) {
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
      <span class="absolute inset-0 border-[1px] border-green-900 rounded-full"></span>
    </a>
  );
}
