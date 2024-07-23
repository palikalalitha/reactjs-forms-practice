// MultiStepForm.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import ThankyouScreen from './ThankyouScreen';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    language: '',
    email: '',
    message: ''
  });
  const [step, setStep] = useState(1);

  const handleNext = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };


  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-10">
      {step === 1 && <Step1 formData={formData} onNext={handleNext} />}
      {step === 2 && <Step2 formData={formData} onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <ThankyouScreen />}
    </div>
  );
};

export default MultiStepForm;
