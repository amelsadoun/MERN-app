import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getClub } from "../../actions/clubs";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate";
import { Loader } from "../Loader";
import {
  DescriptionField,
  EmailField,
  ImageField,
  NameField,
  PasswordField,
} from "./form_fields";
import { updateProfile } from "../../actions/auth";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const clubId = useSelector((state) => state.auth.club?._id);
  const club = useSelector((state) => state.auth.club);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
      // password: "",
      imageURL: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      await dispatch(updateProfile(club.id, values));
      setLoading(false);
      navigate("/");
    },
  });

  useEffect(() => {
    if (club) {
      formik.setValues({
        name: club.name || "",
        email: club.email || "",
        description: club.description || "",
        // password: "",
        imageURL: club.imageURL || "",
      });
    }
  }, [club]);

  useEffect(() => {
    const fetchClub = async () => {
      setLoading(true);
      await dispatch(getClub(clubId));
      setLoading(false);
    };

    if (clubId) {
      fetchClub();
    }
  }, [dispatch, clubId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form
          className="flex flex-col bg-gradient-to-bl p-14 rounded-2xl mb-10 shadow-lg border-[1px] border-slate-200 from-green-100 to-slate-50 justify-between gap-10 self-center w-[90vw]"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-3xl text-center mb-3 font-semibold">
            Edit Profile
          </h1>
          <NameField formik={formik} />
          <EmailField formik={formik} />
          <DescriptionField formik={formik} />
          <ImageField formik={formik} />
          <button
            className="py-2 px-5 border-green-900 border-[1px] self-center rounded-xl text-green-900 hover:bg-gradient-to-br from-green-300 to-slate-100 shadow-md"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      )}
    </>
  );
};

export default EditProfile;
