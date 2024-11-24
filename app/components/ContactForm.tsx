"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xqakdbak"); // Replace "yourFormspreeID" with your Formspree form ID.

  if (state.succeeded) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-transparent'>
        <div className='text-center bg-gray-800 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-gray-100 mb-4'>
            Thank you for your message!
          </h2>
          <p className='text-gray-100'>
            We&apos; ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-transparent p-6'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-lg bg-white shadow-md rounded-lg p-6'
      >
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Contact Us</h2>

        {/* Name Field */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-medium mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Your Name'
            required
          />
          <ValidationError
            prefix='Name'
            field='name'
            errors={state.errors}
            className='text-red-500 text-sm mt-1'
          />
        </div>

        {/* Email Field */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-medium mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Your Email'
            required
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
            className='text-red-500 text-sm mt-1'
          />
        </div>

        {/* Subject Field */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-medium mb-2'
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            id='subject'
            type='text'
            name='subject'
            className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Subject'
            required
          />
          <ValidationError
            prefix='Subject'
            field='subject'
            errors={state.errors}
            className='text-red-500 text-sm mt-1'
          />
        </div>

        {/* Message Field */}
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-medium mb-2'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Your Message'
            required
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
            className='text-red-500 text-sm mt-1'
          />
        </div>

        {/* Submit Button */}
        <div className='mt-4'>
          <button
            type='submit'
            className='w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary transition duration-300'
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;