// Step1.js
import React from 'react';
import { Form, Input, Select } from 'informed';

const required = (value) => (value ? undefined : 'Required');
const phoneNumber = (value) => (/^\d{10}$/.test(value) ? undefined : 'Invalid phone number');

const Step1 = ({ formData, onNext }) => {
  const handleSubmit = (values) => {
    console.log('Step 1 values:', values);
    onNext(values);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={formData}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <Input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="name"
            validate={required}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <Input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="phone"
            validate={phoneNumber}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City:</label>
          <Select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="city"
            validate={required}
          >
            <option value="">Select a city</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Language:</label>
          <Select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="language"
            validate={required}
          >
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </Select>
        </div>
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </Form>
  );
};

export default Step1;
