import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/Slice";


const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user)
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullname: user?.fullname || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    phoneNumber: user?.phoneNumber || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);
    try {
      const res = await axios.put(
        "http://localhost:3000/user/profile",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        setEditing(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6">
      {!editing ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Full Name:</span> {user?.fullname}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user?.phoneNumber}
            </p>
            <p>
              <span className="font-semibold">Bio:</span>{" "}
              {user?.profile?.bio || "Not added"}
            </p>
            <p>
              <span className="font-semibold">Skills:</span>{" "}
              {user?.profile?.skills?.length
                ? user.profile.skills.join(", ")
                : "Not added"}
            </p>
          </div>

          <button
            onClick={() => setEditing(true)}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Edit Profile
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />

            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Your Bio"
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills (comma separated)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Profile;
