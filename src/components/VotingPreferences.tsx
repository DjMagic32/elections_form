import React from 'react';
import { useFormContext } from 'react-hook-form';

export function VotingPreferences() {
  const { register } = useFormContext();

  return (
    <div className='gap-5 flex flex-col'>
      <label className='font-bold' htmlFor="candidate">Preferred Presidential Candidate:</label>
      <select className='p-1 rounded-sm' id="candidate" {...register("candidate", { required: "This field is required" })}>
        <option value="">Select a candidate</option>
        {/* Assuming these are some example candidates */}
        <option value="candidate1">Candidate 1</option>
        <option value="candidate2">Candidate 2</option>
      </select>

      <fieldset className='flex flex-col gap-2'>
        <legend className='font-bold pb-5'>Key Issues:</legend>
        <label className='flex gap-2'>
          <input type="checkbox" {...register("topics.health")} />
          Health
        </label>
        <label className='flex gap-2'>
          <input type="checkbox" {...register("topics.economy")} />
          Economy
        </label>
        <label className='flex gap-2'>
          <input type="checkbox" {...register("topics.education")} />
          Education
        </label>
      </fieldset>
    </div>
  );
}
