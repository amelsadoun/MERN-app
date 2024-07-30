import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../actions/events.js";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";

const Form = () => {
  const dispatch = useDispatch();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(false);
  const clubId = useSelector((state) => state.auth.club?.id);
  const navigate = useNavigate();
  const labelSharedStyle = "ml-2 text-[13px] text-green-700";
  const divSharedStyle = "flex flex-col gap-2";

  const validate = (values) => {
    const errors = {};

    // required field validation
    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.description) {
      errors.description = "This field is required";
    } else if (values.description.split(" ").length > 250) {
      errors.description = "Description cannot exceed 250 words";
    }
    if (!values.startDate) {
      errors.startDate = "This field is required";
    }
    if (isOneDayEvent && !values.endDate) {
      errors.endDate = "This field is required";
    } else if (
      isOneDayEvent &&
      values.startDate &&
      values.endDate &&
      values.startDate > values.endDate
    ) {
      errors.endDate = "End date cannot be earlier than start date";
    }
    if (!values.location) {
      errors.location = "This field is required";
    }
    if (!values.registrationLink) {
      errors.registrationLink = "This field is required";
    } else if (!/^https?:\/\/\S+/.test(values.registrationLink)) {
      errors.registrationLink = "Enter a valid URL";
    }
    if (!values.socialLinks) {
      errors.socialLinks = "This field is required";
    } else {
      const links = values.socialLinks.split(",");
      links.forEach((link, index) => {
        if (!/^https?:\/\/\S+/.test(link.trim())) {
          errors.socialLinks = `Enter valid URLs for social links (error at position ${
            index + 1
          })`;
        }
      });
    }
    if (!values.field) {
      errors.field = "This field is required";
    }
    if (!values.eventType) {
      errors.eventType = "This field is required";
    }

    return errors;
  };

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
      const { socialLinks, ...rest } = values;
      setLoading(true);
      await dispatch(
        createEvent({
          ...rest,
          socialLinks: socialLinks.split(",").map((link) => link.trim()),
          clubId: clubId,
        })
      );
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
    <form
      className="flex flex-col bg-gradient-to-bl p-14 rounded-2xl mb-10 shadow-lg border-[1px] border-slate-200 from-green-100 to-slate-50 justify-between gap-10 self-center w-[90vw]"
      onSubmit={formik.handleSubmit}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-3xl text-center mb-3 font-semibold">
            Add a new event
          </h1>
          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event name</label>
            <input
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              type="text"
              name="name"
              placeholder="Event Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-600 text-left">{formik.errors.name}</div>
            )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event description</label>
            <textarea
              maxLength={1300}
              className="p-2 min-h-40 max-h-60 rounded-md border-[1px] border-slate-300"
              name="description"
              placeholder="Event Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-600 text-left">
                {formik.errors.description}
              </div>
            )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event start date</label>
            <input
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              type="datetime-local"
              name="startDate"
              placeholder="Event Date"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.startDate && formik.touched.startDate && (
              <div className="text-red-600 text-left">
                {formik.errors.startDate}
              </div>
            )}
          </div>

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

          {isOneDayEvent && (
            <div className={divSharedStyle}>
              <label className={labelSharedStyle}>Event end date</label>
              <input
                className="h-10 p-2 rounded-md border-[1px] border-slate-300"
                type="datetime-local"
                name="endDate"
                placeholder="End Date"
                value={formik.values.endDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.endDate && formik.touched.endDate && (
                <div className="text-red-600 text-left">
                  {formik.errors.endDate}
                </div>
              )}
            </div>
          )}

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event location</label>
            <input
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              type="text"
              name="location"
              placeholder="Event Location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.location && formik.touched.location && (
              <div className="text-red-600 text-left">
                {formik.errors.location}
              </div>
            )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Registration link</label>
            <input
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              type="url"
              name="registrationLink"
              placeholder="Registration Link"
              value={formik.values.registrationLink}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.registrationLink &&
              formik.touched.registrationLink && (
                <div className="text-red-600 text-left">
                  {formik.errors.registrationLink}
                </div>
              )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Social links</label>
            <input
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              type="text"
              name="socialLinks"
              placeholder="Social Links (comma separated)"
              value={formik.values.socialLinks}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.socialLinks && formik.touched.socialLinks && (
              <div className="text-red-600 text-left">
                {formik.errors.socialLinks}
              </div>
            )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event field</label>
            <select
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              name="field"
              value={formik.values.field}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select field" />
              <option value="Hackathon" label="Hackathon" />
              <option value="Datathon" label="Datathon" />
              <option value="Workshop" label="Workshop" />
              <option value="Seminar" label="Seminar" />
              <option value="Conference" label="Conference" />
            </select>
            {formik.errors.field && formik.touched.field && (
              <div className="text-red-600 text-left">
                {formik.errors.field}
              </div>
            )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event type</label>
            <select
              className="h-10 p-2 rounded-md border-[1px] border-slate-300"
              name="eventType"
              value={formik.values.eventType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select event type" />
              <option value="Online" label="Online" />
              <option value="Offline" label="Offline" />
              <option value="Hybrid" label="Hybrid" />
            </select>
            {formik.errors.eventType && formik.touched.eventType && (
              <div className="text-red-600 text-left">
                {formik.errors.eventType}
              </div>
            )}
          </div>

          <div className={divSharedStyle}>
            <label className={labelSharedStyle}>Event image</label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => formik.setFieldValue("imageURL", base64)}
            />
          </div>

          <button
            className="py-2 px-5 border-green-900 border-[1px] self-center rounded-xl text-green-900 hover:bg-gradient-to-br from-green-300 to-slate-100 shadow-md"
            type="submit"
          >
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
