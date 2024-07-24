import {
  Multistep,
  Debug,
  Relevant,
  useFieldState,
  useMultistepApi,
  useMultistepState,
  Checkbox,
  Form
} from 'informed';

import './Stepper.css';

const Info = () => {
  const { next } = useMultistepApi();
  const state = useMultistepState();
  console.log('STATE', state);
  return (
    <Multistep.Step step="info" className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input name="first" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input name="last" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <button type="button" onClick={next} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Next
      </button>
    </Multistep.Step>
  );
};

const Allergic = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="allergies" className="p-4">
      <h5 className="text-lg font-medium text-gray-700 mb-4">Are you allergic to any of the following?</h5>
      <div className="mb-4">
        <Checkbox name="peanuts" label="Peanut butter?" className="mr-2" />
        <label className="text-sm text-gray-700">Peanut butter?</label>
      </div>
      <div className="mb-4">
        <Checkbox name="shellfish" label="Shellfish?" className="mr-2" />
        <label className="text-sm text-gray-700">Shellfish?</label>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previous} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Previous
        </button>
        <button type="button" onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const EpiPen = () => {
  const { next, previous } = useMultistepApi();

  // Only relevant if the person is allergic to something
  const relevant = ({ formState }) => {
    const { allergies } = formState.values;
    return allergies && Object.values(allergies).some(a => !!a);
  };

  return (
    <Multistep.Step step="treatment" relevant={relevant} className="p-4">
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previous} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Previous
        </button>
        <button type="button" onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const Color = () => {
  const { next, previous } = useMultistepApi();
  const { nextStep } = useMultistepState();

  return (
    <Multistep.Step step="favorite" className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Favorite Color</label>
        <input name="color" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Favorite Food</label>
        <input name="food" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <Checkbox name="pet" label="Do you have a pet?" className="mr-2" />
        <label className="text-sm text-gray-700">Do you have a pet?</label>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previous} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Previous
        </button>
        {nextStep ? (
          <button type="button" onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Next
          </button>
        ) : null}
        {!nextStep ? <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Submit</button> : null}
      </div>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { previous } = useMultistepApi();

  // Only relevant if the person is has a pet
  const relevant = ({ formState }) => {
    const { favorite } = formState.values;
    return favorite?.pet;
  };

  return (
    <Multistep.Step step="pets" previous="color" relevant={relevant} className="p-4">
      <div className="mb-4">
        <Checkbox name="hasDog" label="Do you have a dog?" className="mr-2" />
        <label className="text-sm text-gray-700">Do you have a dog?</label>
      </div>
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">What's your dog's name?</label>
          <input name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
      </Relevant>
      <div className="mb-4">
        <Checkbox name="hasCat" label="Do you have a cat?" className="mr-2" />
        <label className="text-sm text-gray-700">Do you have a cat?</label>
      </div>
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.hasCat`)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">What's your cat's name?</label>
          <input name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
      </Relevant>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previous} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Previous
        </button>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Submit
        </button>
      </div>
    </Multistep.Step>
  );
};

const StepperStep = ({ step, label, number, isComplete }) => {
  const { current } = useMultistepState();
  const { setCurrent } = useMultistepApi();
  const state = useFieldState(step);

  const active = current === step ? 'active' : '';
  const complete = isComplete(state) ? 'complete' : '';

  return (
    <div className="stepper-item flex items-center">
      <div
        className={`stepper-counter ${active ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'} ${complete ? 'bg-green-600 text-white' : ''} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer`}
        onClick={() => setCurrent(step)}>
        {number}
      </div>
      <div className="step-name ml-2 text-sm font-medium text-gray-700">{label}</div>
    </div>
  );
};

const Stepper = () => {
  return (
    <div className="stepper-wrapper flex space-x-4 mb-8">
      <StepperStep
        label="Info"
        step="info"
        number="1"
        isComplete={s => s.value?.first && s.value?.last}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Allergies"
        step="allergies"
        number="2"
        isComplete={s => s.touched}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Treatment"
        step="treatment"
        number="3"
        isComplete={s => s.value?.epipen != null}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Favorite"
        step="favorite"
        number="4"
        isComplete={s => s.value?.color && s.value?.food}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Pets"
        step="pets"
        number="5"
        isComplete={s => s.value?.name}
      />
    </div>
  );
};

const Example = () => {
  return (
    <Form autocomplete="off" className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <Multistep>
        <Stepper />
        <Info />
        <Allergic />
        <EpiPen />
        <Color />
        <Dog />
      </Multistep>
      <Debug values errors touched className="mt-8" />
    </Form>
  );
};

export default Example;