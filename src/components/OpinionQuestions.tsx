import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export function OpinionQuestions() {
  const { register, setValue, watch } = useFormContext();
  const emotionLevel = watch("electionEmotion", 1); // Use watch to get current value
  const emotionRantingLevel = watch("adminRating", 1); // Use watch to get current value

  const emotions = [
    "Anxious",    // Ansioso
    "Disappointed", // Decepcionado
    "Scared",     // Asustado
    "Worried",    // Preocupado
    "Frustrated", // Frustrado
    "Uncertain",  // Incierto
    "Concerned",  // Preocupado
    "Nervous",    // Nervioso
    "Hopeful",    // Esperanzado
    "Excited"     // Emocionado
  ];

  const emotionsRating: string[] = [
    "Disappointed",   
    "Unsatisfied",    
    "Neutral",        
    "Content",        
    "Satisfied",      
    "Happy",          
    "Delighted"       
  ];
  

  interface OpinionQuestionsProps {
    emotions: string[];
  }

  const handleRatingChange = (e) => {
    setValue("adminRating", e.target.value); // Update form state with setValue
    //{...register("electionEmotion")} // Removed duplicated onChange here
  };

  const handleEmotionChange = (e) => {
    setValue("electionEmotion", e.target.value); // Update form state with setValue
    //{...register("electionEmotion")} // Removed duplicated onChange here
  };

  return (
    <div className='gap-5 flex flex-col'>
      <label className='font-bold' htmlFor="adminRating">Opinion on Current Administration:</label>
      <input className='p-1 rounded-sm' id="adminRating" type="range" min="1" max="5" value={emotionRantingLevel} onChange={handleRatingChange} />
      <div>Selected Emotion: <span className='font-bold'>{emotionsRating[emotionRantingLevel - 1]}</span></div>

      <label className='font-bold' htmlFor="suggestions">Suggestions for Improvement:</label>
      <textarea className='p-1 rounded-sm' id="suggestions" {...register("suggestions")}></textarea>

      <label className='font-bold' htmlFor="electionEmotion">Thinking about the upcoming presidential election this November, what is one word that describes how you feel about it?</label>
      <input
        className='p-1 rounded-sm'
        id="electionEmotion"
        type="range"
        min="1"
        max="10"
        value={emotionLevel}
        onChange={handleEmotionChange}
      />
      <div>Selected Emotion: <span className='font-bold'>{emotions[emotionLevel - 1]}</span></div>
    </div>
  );
}
