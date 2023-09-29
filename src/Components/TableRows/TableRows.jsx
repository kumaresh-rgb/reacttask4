import React from 'react';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';
import { BsTag, BsListStars, BsChatRightDots, BsLink45Deg, BsThreeDots } from 'react-icons/bs';

function TableRow({title}) {
  return (
    <tr tabIndex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
      <td>
        <div className="ml-5">
          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
            <input
              placeholder="checkbox"
              type="checkbox"
              className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
            />
            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
              <FiCheck />
            </div>
          </div>
        </div>
      </td>
      <td className="">
        <div className="flex items-center pl-5">
          <p className="text-base font-medium leading-none text-gray-700 mr-2">{title}</p>
          <FiAlertCircle className="text-gray-600" />
        </div>
      </td>
      <td className="pl-24">
        <div className="flex items-center">
          <BsTag className="text-gray-600" />
          <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
        </div>
      </td>
      <td className="pl-24">
        <div className="flex items-center">
          <BsListStars className="text-gray-600" />
          <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
        </div>
      </td>
      <td className="pl-5">
        <div className="flex items-center">
          <BsChatRightDots className="text-gray-600 " />
          <p className="text-sm leading-none text-gray-600 ml-2">23</p>
        </div>
      </td>
      <td className="pl-24">
        <div className="flex items-center">
          <BsLink45Deg className="text-gray-600" />
          <p className="text-sm leading-none text-gray-600 ml-2">04/07</p>
        </div>
      </td>
      <td className="pl-5">
        <div className="flex items-center">
          <FiAlertCircle className="text-red-700 mx-2" />
          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded-lg">Due today at 18:00</button>
        </div>
      </td>
      <td className="pl-5">
        <div className="flex items-center">
          <button className="py-3 px-3 w-22 text-sm focus:outline-none leading-none text-slate-500 bg-gray-200 rounded">View</button>
        </div>
      </td>
      <td className="pl-4">
        <button className=" text-sm leading-none text-gray-600 py-3 px-5 rounded hover:text-gray-5000 focus:outline-none">
          <BsThreeDots />
        </button>
      </td>
    </tr>
  );
}

function TableRows({ titles }) {
  // Map through the titles and render a TableRow for each title
  const rows = titles.map((title, index) => (
    <TableRow key={index} title={title} />
  ));

  return <>{rows}</>;
}

export default TableRows;
