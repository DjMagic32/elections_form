import React from 'react';
import { useFormContext } from 'react-hook-form';

export function Verification() {
  const { register } = useFormContext();

  return (
    <div className='gap-5 flex flex-col'>
      <label className='font-bold' htmlFor="email">Email Address:</label>
      <input className='p-1 rounded-sm' id="email" type="email" {...register("email", { required: "This field is required" })} />

      <label className='font-bold' htmlFor="phone">Phone Number (Optional):</label>
      <input className='p-1 rounded-sm' id="phone" type="tel" {...register("phone")} />
    </div>
  );
}
