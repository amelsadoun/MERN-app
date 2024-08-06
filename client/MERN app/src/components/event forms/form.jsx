import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, getEvent, updateEvent } from "../../actions/events.js";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Loader.jsx";
import * as fields from "./form_fields.jsx";
import { validateForm } from "./validate.js";
import { formatDate } from "./formatDate.js";
import { alternateImage } from "../../assets/alternateImage.js";

const Form = ({ isEditing }) => {
  const dispatch = useDispatch();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(false);
  const clubId = useSelector((state) => state.auth.club?.id);
  const navigate = useNavigate();
  const fetchedEvent = useSelector((state) => state.events);
  const params = useParams();
  const id = params.id;

  const validate = validateForm(isOneDayEvent);
  // console.log(isEditing)

  //the only way I could do it was by using two useEffects
  useEffect(() => {
    if (isEditing) {
      const fetchEvent = async () => {
        setLoading(true);
        await dispatch(getEvent(id));
        setLoading(false);
      };

      fetchEvent();
    }
  }, [dispatch, id, isEditing]);

  useEffect(() => {
    if (isEditing && fetchedEvent) {
      formik.setValues({
        ...fetchedEvent,
        startDate: formatDate(fetchedEvent.startDate),
        endDate: formatDate(fetchedEvent.endDate),
      });
    }
  }, [fetchedEvent, isEditing]);

  const formik = useFormik({
    initialValues: {
      name: "",
      clubId: "",
      description: "",
      startDate: "",
      endDate: "",
      location: "",
      registrationLink: "",
      socialLinks: "",
      field: "",
      eventType: "",
      imageURL: "",
    },
    validate,
    onSubmit: async (values) => {
      const { socialLinks, imageURL, ...rest } = values;
      setLoading(true);

      //chatgpt made this because it was saying that socialLinks.split is not a function
      //so we basically make sure it's a string (IT IS)
      const processedSocialLinks =
        typeof socialLinks === "string"
          ? socialLinks.split(",").map((link) => link.trim())
          : [];

      if (isEditing) {
        await dispatch(
          updateEvent(id, {
            ...rest,
            socialLinks: processedSocialLinks,
            clubId: clubId,
            imageURL: imageURL || fetchedEvent.imageURL,
          })
        );
      } else {
        await dispatch(
          createEvent({
            ...rest,
            socialLinks: processedSocialLinks,
            clubId: clubId,
            imageURL: imageURL || alternateImage
          })
        );
      }
      setLoading(false);
      navigate("/");
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <form
          className="flex flex-col bg-gradient-to-bl p-14 rounded-2xl mb-10 shadow-lg border-[1px] border-slate-200 from-green-100 to-slate-50 justify-between gap-10 self-center w-[90vw]"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-3xl text-center mb-3 font-semibold">
            {isEditing ? "Edit your event informations" : "Add a new event"}
          </h1>
          <fields.Name formik={formik} />
          <fields.Field formik={formik} />
          <fields.Type formik={formik} />
          <fields.Description formik={formik} />
          <fields.StartDate formik={formik} />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="oneDayEvent"
              name="oneDayEvent"
              checked={isOneDayEvent}
              onChange={() => setIsOneDayEvent(!isOneDayEvent)}
            />
            <label htmlFor="oneDayEvent" className="ml-2">
              Is this a more-than-one-day event?
            </label>
          </div>
          {isOneDayEvent && <fields.EndDate formik={formik} />}
          <fields.Location formik={formik} />
          <fields.RegistrationLink formik={formik} />
          <fields.SocialLinks formik={formik} />
          <fields.Image formik={formik} />
          <button
            className="py-2 px-5 border-green-900 border-[1px] self-center rounded-xl text-green-900 hover:bg-gradient-to-br from-green-300 to-slate-100 shadow-md"
            type="submit"
          >
            {isEditing ? "Save changes" : "Submit"}
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
