// Step2.js
import React from 'react';
import { Form, Input, TextArea } from 'informed';

const required = (value) => (value ? undefined : 'Required');

const Step2 = ({ formData, onNext, onBack }) => {
  const handleSubmit = (values) => {
    console.log('Step 2 values:', values);
    onNext(values);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={formData}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <Input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="email"
            validate={required}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message:</label>
          <TextArea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="message"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Back
          </button>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Step2;
