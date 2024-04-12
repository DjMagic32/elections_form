import React from 'react';
import { useFormContext } from 'react-hook-form';
import { sendMail } from "@/lib/mails";

export function ReviewAndSubmit() {
  const { handleSubmit, getValues } = useFormContext();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='gap-8 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='font-bold'>Review Your Answers</h3>
      <p>Full Name: {getValues("fullName")}</p>
      <p>Email Address: {getValues("email")}</p>
      <p>Phone: {getValues("phone")}</p>
      <p>Birth Date: {getValues("birthDate")}</p>
      <p>Suggestions: {getValues("suggestions")}</p>
      <p>State: {getValues("state")}</p>           
    </div>
  );
}
