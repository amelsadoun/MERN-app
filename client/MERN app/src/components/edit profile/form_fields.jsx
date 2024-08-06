import FileBase from "react-file-base64";

export const NameField = ({ formik }) => (
    <div className="flex flex-col gap-2">
      <label className="ml-2 text-[13px] text-green-700">Club Name</label>
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="text"
        name="name"
        placeholder="Club Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name && (
        <div className="text-red-600 text-left">{formik.errors.name}</div>
      )}
    </div>
  );
  
 export const EmailField = ({ formik }) => (
    <div className="flex flex-col gap-2">
      <label className="ml-2 text-[13px] text-green-700">Email</label>
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email && (
        <div className="text-red-600 text-left">{formik.errors.email}</div>
      )}
    </div>
  );
  
 export const DescriptionField = ({ formik }) => (
    <div className="flex flex-col gap-2">
      <label className="ml-2 text-[13px] text-green-700">Description</label>
      <textarea
        maxLength={1300}
        className="p-2 min-h-40 max-h-60 rounded-md border-[1px] border-slate-300"
        name="description"
        placeholder="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.description && formik.touched.description && (
        <div className="text-red-600 text-left">{formik.errors.description}</div>
      )}
    </div>
  );
  
 export const PasswordField = ({ formik }) => (
    <div className="flex flex-col gap-2">
      <label className="ml-2 text-[13px] text-green-700">Password</label>
      <input
        className="h-10 p-2 rounded-md border-[1px] border-slate-300"
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.password && formik.touched.password && (
        <div className="text-red-600 text-left">{formik.errors.password}</div>
      )}
    </div>
  );
  
 export const ImageField = ({ formik }) => (
    <div className="flex flex-col gap-2">
      <label className="ml-2 text-[13px] text-green-700">Profile Image</label>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => formik.setFieldValue("imageURL", base64)}
      />
    </div>
  );