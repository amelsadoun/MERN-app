import React from "react";

const labelSharedStyle = "ml-2 text-[13px] text-green-700";
const divSharedStyle = "flex flex-col gap-2";

export const OldPassword = ({ formik }) => {
  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>Old Password</label>
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="password"
        name="oldPassword"
        placeholder="Old Password"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.oldPassword && formik.touched.oldPassword && (
        <div className="text-red-600 text-left">{formik.errors.oldPassword}</div>
      )}
    </div>
  );
};

export const NewPassword = ({ formik }) => {
  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>New Password</label>
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="password"
        name="newPassword"
        placeholder="New Password"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.newPassword && formik.touched.newPassword && (
        <div className="text-red-600 text-left">{formik.errors.newPassword}</div>
      )}
    </div>
  );
};

export const ConfirmPassword = ({ formik }) => {
  return (
    <div className={divSharedStyle}>
      <label className={labelSharedStyle}>Confirm Password</label>
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword && (
        <div className="text-red-600 text-left">{formik.errors.confirmPassword}</div>
      )}
    </div>
  );
};
