import React from 'react';
import { Form, Input, Checkbox, RadioGroup, Radio, Select } from 'informed';

// Validation functions
const required = value => (value ? undefined : 'Required');
const validateEmail = value =>
  value && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? undefined : 'Invalid email address';

const MyForm = () => {
  const handleSubmit = ({ values }) => {
    console.log(values);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <Form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <Input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="name"
            validate={required}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <Input
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="email"
            validate={validateEmail}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <Input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="password"
            validate={required}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender:</label>
          <RadioGroup className="mt-1 flex space-x-4" field="gender">
            <label className="inline-flex items-center">
              <Radio value="male" className="text-gray-700" /> Male
            </label>
            <label className="inline-flex items-center">
              <Radio value="female" className="text-gray-700" /> Female
            </label>
          </RadioGroup>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Hobbies:</label>
          <div className="mt-1 space-y-2">
            <label className="inline-flex items-center">
              <Checkbox className="text-gray-700" field="hobbies.reading" value="reading" /> Reading
            </label>
            <label className="inline-flex items-center">
              <Checkbox className="text-gray-700" field="hobbies.traveling" value="traveling" /> Traveling
            </label>
            <label className="inline-flex items-center">
              <Checkbox className="text-gray-700" field="hobbies.sports" value="sports" /> Sports
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country:</label>
          <Select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            field="country"
            validate={required}
          >
            <option value="">Select a country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </Select>
        </div>
        <button type="submit" className="w-full mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Submit</button>
      </Form>
    </div>
  );
};

export default MyForm;
