"use client"
import { useState } from 'react';
import { sendMail } from "@/lib/mails";
import { useForm, FormProvider } from 'react-hook-form';
import { VoterInfo, ReviewAndSubmit, VotingPreferences, OpinionQuestions, Verification } from "@/components";
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};



export default function Home() {
  const methods = useForm();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("form");
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  const handleFormSubmit = async (data: any) => {
    console.log(data);
    try {
      setLoading(true);
      // Obtiene la URL base de la página actual
      const baseURL = window.location.origin;
      // Concatena la URL base con el endpoint
      const endpoint = '/api/register';
      const url = `${baseURL}${endpoint}`;

      // Realiza la solicitud POST a la URL completa
      const response = await axios.post(url, data);


      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        setStatus("success");
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (

    <FormProvider  {...methods}>
      <main className="flex bg-slate-100 min-h-screen flex-col items-center justify-center p-3 sm:p-24">

        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-200"></div>
          </div>
        )}

        {status === "form" &&
          <div className='flex justify-center items-center flex-col mb-5'>
            <h1 className='text-2xl font-bold text-center'>Share Your Opinion</h1>
            <p className='text-red-600 text-center'>Your opinion will remain anonymous, and we will not share your information.</p>
          </div>
        }

        {status === "success" &&
          <div className='flex justify-center items-center flex-col'>
            <h2 className='text-2xl font-bold text-center'>Thank you very much for collaborating with us and completing the survey. Your participation is greatly appreciated!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="300" viewBox="0 -960 960 960" fill='green' ><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
          </div>
        }

        {status === "form" &&
          <form className='w-[100%] flex justify-center items-center flex-col' onSubmit={methods.handleSubmit(handleFormSubmit)}>
            {step === 1 && (
              <motion.div
                key="voterInfo"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className='bg-blue-300 p-10 w-[100%] sm:w-[550px] h-[550px] gap-5 flex flex-col justify-between rounded-[10px]'
              >
                <VoterInfo />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="verification"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className='bg-blue-300 p-10 w-[100%] sm:w-[550px] h-[550px] gap-5 flex flex-col justify-between rounded-[10px]'
              >
                <Verification />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="voterInfo"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className='bg-blue-300 p-10 sm:w-[550px] w-[100%] h-[550px] gap-5 flex flex-col justify-between rounded-[10px]'
              >
                <VotingPreferences />
              </motion.div>
            )}
            {step === 4 && (
              <motion.div
                key="verification"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className='bg-blue-300 p-10 w-[100%] sm:w-[550px] h-[550px] gap-5 flex flex-col justify-between rounded-[10px]'
              >
                <OpinionQuestions />
              </motion.div>
            )}
            {step === 5 && (
              <motion.div
                key="voterInfo"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className='bg-blue-300 p-10 w-[100%] sm:w-[550px] h-[550px] gap-5 flex flex-col justify-between rounded-[10px]'
              >
                <ReviewAndSubmit />
              </motion.div>
            )}

            <div className='mt-5 flex justify-center items-center gap-10'>
              {step > 1 && <button className='bg-red-100 px-10 py-3 rounded-[10px] w-[200px]' type="button" onClick={prevStep}>Atrás</button>}
              {step < totalSteps && <button className='bg-red-100 px-10 py-3 rounded-[10px] w-[200px]' type="button" onClick={nextStep}>Siguiente</button>}
              {step === totalSteps && <button type="submit">Enviar</button>}
            </div>



          </form>
        }

      </main>

    </FormProvider>
  );
}
