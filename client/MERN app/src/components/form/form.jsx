import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../actions/events.js";
import FileBase from "react-file-base64";
import { redirect, useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const clubId = useSelector((state) => state.auth.club?.id);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.startDate) {
      errors.startDate = "This field is required";
    }
    // Add other validations if needed
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
    onSubmit: (values) => {
      const { socialLinks, ...rest } = values;
      dispatch(
        createEvent({
          ...rest,
          socialLinks: socialLinks.split(",").map((link) => link.trim()),
          clubId: clubId,
        })
      );
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <form
      className="flex flex-col justify-between gap-5 self-center w-[90vw]"
      onSubmit={formik.handleSubmit}
    >
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="text"
        name="name"
        placeholder="Event Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {/* 
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="text"
        name="club"
        placeholder="Club Name"
        value={formik.values.club}
        onChange={formik.handleChange}
      /> */}

      <textarea
        className="p-2 min-h-40 max-h-60 rounded-md border-[1px] border-slate-300"
        name="description"
        placeholder="Event Description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />

      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="datetime-local"
        name="startDate"
        placeholder="Event Date"
        value={formik.values.startDate}
        onChange={formik.handleChange}
      />
      {formik.errors.startDate ? (
        <div className="text-red-600 text-left">{formik.errors.startDate}</div>
      ) : null}

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
        <input
          className="h-10 p-2 rounded-md border-[1px] border-slate-300"
          type="datetime-local"
          name="endDate"
          placeholder="End Date"
          value={formik.values.endDate}
          onChange={formik.handleChange}
        />
      )}

      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="text"
        name="location"
        placeholder="Event Location"
        value={formik.values.location}
        onChange={formik.handleChange}
      />

      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="url"
        name="registrationLink"
        placeholder="Registration Link"
        value={formik.values.registrationLink}
        onChange={formik.handleChange}
      />

      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="text"
        name="socialLinks"
        placeholder="Social Links (comma separated)"
        value={formik.values.socialLinks}
        onChange={formik.handleChange}
      />

      <select
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        name="field"
        value={formik.values.field}
        onChange={formik.handleChange}
      >
        <option value="" label="Select field" />
        <option value="Hackathon" label="Hackathon" />
        <option value="Datathon" label="Datathon" />
        <option value="Workshop" label="Workshop" />
        <option value="Seminar" label="Seminar" />
        <option value="Conference" label="Conference" />
      </select>

      <select
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        name="eventType"
        value={formik.values.eventType}
        onChange={formik.handleChange}
      >
        <option value="" label="Select event type" />
        <option value="Online" label="Online" />
        <option value="Offline" label="Offline" />
        <option value="Hybrid" label="Hybrid" />
      </select>

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => formik.setFieldValue("imageURL", base64)}
      />

      <button
        className="py-2 px-5 border-green-900 border-[1px] self-center rounded-xl text-green-900 hover:bg-gradient-to-br from-green-300 to-slate-100 shadow-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
