import React from "react";
import { useForm } from "react-hook-form";

// ✅ DOB Validation Function
const validateDOB = (dob) => {
  if (!dob) return "DOB is required";

  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    return "You must be at least 18 years old";
  }
  return true;
};

export default function CompleteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password:"",
      number:"",
      address: "",
      category: "",
      checkbox: "",
      radio: "",
      dob: "",
      file:"",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "20px auto",}}
      className="border border-shadow p-4 fst-italic fw-bold bg-light"
    >
      <h2 className="text-center mb-4" style={{color:'black'}}>Form Validation</h2>

      {/* First Name */}
      <div>
        <input
          {...register("firstName", { required: "First name is required",
              minLength: { value: 4, message: "Min length is 4"
           },})}
          placeholder="First name"
          className="form-control mb-2"
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <input
          {...register("lastName", { required:"Last name is required",
            minLength: { value: 2, message: "Min length is 2" },
          })}
          placeholder="Last name"
          className="form-control mb-2"
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i ,
              message: "Invalid email format",
            },
          })}
          placeholder="Email"
          className="form-control mb-2"
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <input {...register("password",{required:"Password is required",
        pattern:{value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,message:'Minimum 6characters'}})} type="password"className="form-control mb-2"
        placeholder="Password " />
         {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>)}
      </div>

      {/* Phonenumber */}
      <div>
        <input {...register("number",{required:"Phonenumber is required",minLength:{value:10,message:'minimum value is 10 character'}})} type="number"
         placeholder="Phone Number" className="form-control mb-2"/>
          {errors.number && (
          <p style={{ color: "red" }}>{errors.number.message}</p>
        )}
      </div>

      {/* DOB */}
      <div>
        <input
          type="date"
          {...register("dob", { validate: validateDOB })}
          className="form-control mb-2"
          max={new Date().toISOString().split("T")[0]}
        />
        {errors.dob && <p style={{ color: "red" }}>{errors.dob.message}</p>}
      </div>

      {/* Address */}
      <div>
        <input
          {...register("address", { required: "Address is required",maxLength:{value:20, message:'maximum value is 20 letters'} })}
          placeholder="Address"
          className="form-control mb-2 pb-4"
        />
        {errors.address && (
          <p style={{ color: "red" }}>{errors.address.message}</p>
        )}
      </div>

      {/* Category Select */}
      <div>
        <select
          {...register("category", { required: "Category is required" })}
          className="form-control mb-2"
        >
          <option value="">Choose your country..</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
        {errors.category && (
          <p style={{ color: "red" }}>{errors.category.message}</p>
        )}
      </div>


      {/* Checkbox */}
      {/* <div className="mb-2">Checkbox :
        <input {...register("checkbox",{required:"Checkbox is required"})} type="checkbox" value="A" className="ms-2" /> A
        <input {...register("checkbox")} type="checkbox" value="B" className="ms-2" /> B
         {errors.checkbox && (
          <p style={{ color: "red" }}>{errors.checkbox.message}</p>
        )}
      </div> */}

      {/* Radio */}
      <div className="mb-3">Gender :
        <input {...register("radio",{required:"Gender is required"})} type="radio" value="A" className="ms-3"/> Male
        <input {...register("radio")} type="radio" value="B" className="ms-2" /> Female
         {errors.radio && (
          <p style={{ color: "red" }}>{errors.radio.message}</p>
        )}
      </div>

      {/* {file} */}
      <div className="mb-3">
        <input {...register("file",{required:"File is required"})}type="file" className="form-control"/>
         {errors.file && (
          <p style={{ color: "red" }}>{errors.file.message}</p>
        )}
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-info mb-1 ms-auto w-100 fw-bolder">
        Submit
      </button>
    </form>
  );
}
