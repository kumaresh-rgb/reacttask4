import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: 'Easy',
      price: '$29',
      features: ['One project'],
    },
    {
      name: 'Basic',
      price: '$59',
      features: ['Two projects', 'Your dashboard'],
    },
    {
      name: 'Custom',
      price: '$139',
      features: ['Unlimited projects', 'Your dashboard'],
    },
  ];

  return (
    <main className="mx-4 my-16 py-20">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
          Our <span className="font-semibold">plans</span> for your{' '}
          <span className="font-semibold">strategies</span>
        </h1>
        <p className="text-sm font-normal text-gray-400">
          See below our main three plans for your business, for your startup and agency.
        </p>
        <p className="text-sm font-normal text-gray-400">
          It starts from here! You can teach yourself what you really like.
        </p>
      </div>

      {/* Plan switch */}
      <div className="flex items-center justify-center mt-10 space-x-4">
        <span className="text-base font-medium">Bill Monthly</span>
        <button
          className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          // Add your click handler here
        >
          <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
          <div
            className="absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1"
            // Add your class and logic here
          ></div>
        </button>
        <span className="text-base font-medium">Bill Annually</span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md"
          >
            {/* Price */}
            <div className="flex-shrink-0">
              <span className="text-4xl font-medium tracking-tight">{plan.price}</span>
              <span className="text-gray-400">/month</span>
            </div>

            {/* Plan Details */}
            <div className="flex-shrink-0 pb-6 space-y-2 border-b">
              <h2 className="text-2xl font-normal">{plan.name}</h2>
              <p className="text-sm text-gray-400">
                {plan.name === 'Easy'
                  ? 'All the basics for businesses that are just getting started.'
                  : plan.name === 'Basic'
                  ? 'Better for growing businesses that want more customers.'
                  : 'Advanced features for pros who need more customization.'}
              </p>
            </div>

            {/* Features */}
            <ul className="flex-1 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="w-6 h-6 text-green-300" />
                  <span className="ml-3 text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="flex-shrink-0 pt-4">
            <button
            className="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Get {plan.name}
          </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
