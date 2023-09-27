import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaCheckCircle,
} from 'react-icons/fa';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleLikeClick = (userId) => {
    if (likedUsers.includes(userId)) {
      setLikedUsers(likedUsers.filter((id) => id !== userId));
    } else {
      setLikedUsers([...likedUsers, userId]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-gray-800 rounded-xl shadow-2xl p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 relative"
        >
          <div
            className={`absolute top-2 right-2 cursor-pointer ${
              likedUsers.includes(user.id) ? 'text-red-500' : 'text-gray-300'
            }`}
            onClick={() => handleLikeClick(user.id)}
          >
            <FaHeart className="text-2xl" />
          </div>

          <div className="text-center relative">
            <div className="rounded-full overflow-hidden w-10 h-10 mx-auto mb-4 hover:scale-105 transition-transform">
              <FaUser className="text-3xl text-white w-10 h-10 object-cover" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-300">{user.name}</h2>
          <p className="text-gray-300">{user.username}</p>
          <div className="mt-2">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-400 mr-2" />
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-400 mr-2" />
              <p className="text-gray-400">{user.phone}</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <p className="text-gray-400">
                {user.address?.city}, {user.address?.street || 'N/A'}
              </p>
            </div>
          </div>
          <div className="flex pt-2 text-sm text-gray-400">
            <div className="flex-1 inline-flex items-center">
              <FaHeart className="h-5 w-5 mr-2" />
              <p className="">1.2k Followers</p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <FaCheckCircle className="h-5 w-5 mr-2" />
              <p className="">14 Components</p>
            </div>
            <button
              className="flex-no-shrink bg-blue-600 hover:bg-blue-700 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition duration-300"
            >
              FOLLOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
