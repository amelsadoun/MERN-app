import React from "react";
import FileBase from "react-file-base64";
import { useState } from "react";
import Select from "react-select";
import { WithContext as ReactTags } from 'react-tag-input';
import { eventTags } from "../utils/eventTags";

//all the form field are separated here because they made the code too long
const labelSharedStyle = "ml-2 text-[13px] text-green-700";
const divSharedStyle = "flex flex-col gap-2";

export const Name = ({ formik }) => {
  return (
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
  );
};

export const Description = ({ formik }) => {
  return (
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
  );
};

export const StartDate = ({ formik }) => {
  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>Event start date & time</label>
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
        <div className="text-red-600 text-left">{formik.errors.startDate}</div>
      )}
    </div>
  );
};

export const EndDate = ({ formik }) => {
  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>Event end date & time</label>
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
        <div className="text-red-600 text-left">{formik.errors.endDate}</div>
      )}
    </div>
  );
};

export const Location = ({ formik }) => {
  return (
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
        <div className="text-red-600 text-left">{formik.errors.location}</div>
      )}
    </div>
  );
};

export const RegistrationLink = ({ formik }) => {
  return (
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
      {formik.errors.registrationLink && formik.touched.registrationLink && (
        <div className="text-red-600 text-left">
          {formik.errors.registrationLink}
        </div>
      )}
    </div>
  );
};


export const SocialLinks = ({ formik }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [tags, setTags] = useState(formik.values.socialLinks);

  const options = eventTags;

  const handleSelectChange = (option) => {
    if (option) {
      const newTags = [...tags, option.value];
      setTags(newTags);
      setSelectedOption(null);
      formik.setFieldValue('socialLinks', newTags);
    }
  };

  const handleDelete = (i) => {
    const newTags = tags.filter((tag, index) => index !== i);
    setTags(newTags);
    formik.setFieldValue('socialLinks', newTags);
  };

  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>Tags</label>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        placeholder="Select event tags"
      />
      <ReactTags
        tags={tags.map(tag => ({ id: tag, text: tag }))}
        handleDelete={handleDelete}
        handleAddition={() => {}}
        allowDragDrop={false}
        classNames={{
          tag: 'inline-block w-fit bg-gradient-to-bl from-green-500 to-green-300 shadow-lg rounded-full px-3 py-1 text-sm font-semibold text-white border-[1px] border-slate-200 mr-2 mb-2',
          tagInput: 'hidden',
          tagInputField: 'hidden',
          remove: 'ml-2 cursor-pointer green-700 text-red-500 self-center font-bold'
        }}
      />
      {formik.errors.socialLinks && formik.touched.socialLinks && (
        <div className="text-red-600 text-left">
          {formik.errors.socialLinks}
        </div>
      )}
    </div>
  );
};


export const Field = ({ formik }) => {
  return (
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
        <div className="text-red-600 text-left">{formik.errors.field}</div>
      )}
    </div>
  );
};

export const Type = ({ formik }) => {
  return (
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
        <div className="text-red-600 text-left">{formik.errors.eventType}</div>
      )}
    </div>
  );
};

export const Image = ({ formik }) => {
  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>Event image</label>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => formik.setFieldValue("imageURL", base64)}
      />
    </div>
  );
};
