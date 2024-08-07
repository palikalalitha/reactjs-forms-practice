import React from 'react';
import {
  Multistep,
  Debug,
  Relevant,
  useMultistepApi,
  useMultistepState,
  Form,
  Input,
  Checkbox,
  RadioGroup,
  Radio,
  useFormApi,
  useFormState
} from 'informed';

const Info = () => {
  const { next } = useMultistepApi();
  const { errors } = useFormState();

  const handleNext = () => {
    next();
  };

  return (
    <Multistep.Step step="info">
      <div className="mb-4">
        <label className="block mb-1">First Name</label>
        <Input
          name="first"
          required
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errors?.first && <p className="text-red-500">{errors.first}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Last Name</label>
        <Input
          name="last"
          required
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errors?.last && <p className="text-red-500">{errors.last}</p>}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const Allergic = () => {
  const { next, previous } = useMultistepApi();
  const formApi = useFormApi();
  const { errors } = useFormState();

  const handleNext = () => {
    next();
  };


  return (
    <Multistep.Step step="allergies">
      <h5 className="mb-4">Are you allergic to any of the following?</h5>
      <Checkbox name="peanuts" label="Peanut butter?"  />
      <Checkbox name="shellfish" label="Shellfish?" />
      {errors?.peanuts && <p className="text-red-500">{errors.peanuts}</p>}
      {errors?.shellfish && <p className="text-red-500">{errors.shellfish}</p>}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={previous}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const EpiPen = () => {
  const { next, previous } = useMultistepApi();
  const relevant = ({ formState }) => formState.values?.peanuts || formState.values?.shellfish;
  const formApi = useFormApi();
  const { errors } = useFormState();

  const handleNext = () => {
    next();
  };
  
  return (
    <Multistep.Step step="treatment" relevant={relevant}>
      <RadioGroup name="epipen" label="Do you have an epipen?" required>
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
      {errors?.epipen && <p className="text-red-500">{errors.epipen}</p>}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={previous}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const Color = () => {
  const { next, previous } = useMultistepApi();
  const formApi = useFormApi();
  const { nextStep } = useMultistepState();
  const { errors } = useFormState();

  const handleNext = () => {
    formApi.validate();
    if (Object.keys(errors).length === 0) {
      next();
    }
  };

  return (
    <Multistep.Step step="favorite">
      <div className="mb-4">
        <label className="block mb-1">Favorite Color:</label>
        <Input
          name="color"
          required
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errors?.color && <p className="text-red-500">{errors.color}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Favorite Food:</label>
        <Input
          name="food"
          required
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errors?.food && <p className="text-red-500">{errors.food}</p>}
      </div>
      <div className="mb-4">
        <Checkbox name="pet" label="Do you have a pet?" />
      </div>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={previous}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        {nextStep ? (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { previous } = useMultistepApi();
  const { errors } = useFormState();

  const relevant = ({ formState }) => formState.values?.pet;

  return (
    <Multistep.Step step="pets" relevant={relevant}>
      <Checkbox name="hasDog" label="Do you have a dog?" />
      <Relevant when={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}>
        <div className="mb-4">
          <label className="block mb-1">What's your dog's name?</label>
          <Input
            name="dogName"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors?.dogName && <p className="text-red-500">{errors.dogName}</p>}
        </div>
      </Relevant>
      <Checkbox name="hasCat" label="Do you have a cat?" />
      <Relevant when={({ formApi, scope }) => formApi.getValue(`${scope}.hasCat`)}>
        <div className="mb-4">
          <label className="block mb-1">What's your cat's name?</label>
          <Input
            name="catName"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors?.catName && <p className="text-red-500">{errors.catName}</p>}
        </div>
      </Relevant>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={previous}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </Multistep.Step>
  );
};

const StepperStep = ({ step, label, number, isComplete }) => {
  const { current } = useMultistepState();
  const { setCurrent } = useMultistepApi();
  const { values } = useFormState();

  const active = current === step ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700';
  const complete = isComplete(values) ? 'line-through text-green-500' : '';

  return (
    <div
      className={`flex items-center ${active} ${complete} cursor-pointer py-2 px-4 rounded`}
      onClick={() => setCurrent(step)}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
        {number}
      </div>
      <div className="ml-4">{label}</div>
    </div>
  );
};

const Stepper = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <StepperStep
        label="Info"
        step="info"
        number="1"
        isComplete={(values) => values.first && values.last}
      />
      <div className="flex-grow border-t border-gray-300"></div>
      <StepperStep
        label="Allergies"
        step="allergies"
        number="2"
        isComplete={(values) => values.peanuts || values.shellfish}
      />
      <div className="flex-grow border-t border-gray-300"></div>
      <StepperStep
        label="Treatment"
        step="treatment"
        number="3"
        isComplete={(values) => values.epipen != null}
      />
      <div className="flex-grow border-t border-gray-300"></div>
      <StepperStep
        label="Favorite"
        step="favorite"
        number="4"
        isComplete={(values) => values.color && values.food}
      />
      <div className="flex-grow border-t border-gray-300"></div>
      <StepperStep
        label="Pets"
        step="pets"
        number="5"
        isComplete={(values) => values.dogName || values.catName}
      />
    </div>
  );
};

const Example = () => {
  return (
    <Form autocomplete="off">
      <Multistep>
        <Stepper />
        <Info />
        <Allergic />
        <EpiPen />
        <Color />
        <Dog />
      </Multistep>
      <Debug values errors touched />
    </Form>
  );
};

export default Example;
