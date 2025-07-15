import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, addUser } from "./services/api";
import { useState } from "react";
import toast from "react-hot-toast";

const UserSelector = ({ selectedUser, setSelectedUser }) => {
  const queryClient = useQueryClient();
  const [newUser, setNewUser] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setNewUser("");
      toast.success("User Added Successfully!")
    },
  });

  if (isLoading) {
    return <p className="text-center text-sm text-gray-500">Loading users…</p>;
  }

  return (
    <div className="w-full bg-white shadow rounded-lg p-5 space-y-5">
      {/* Select Existing User */}
      <div>
        <label
          htmlFor="user-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select a User
        </label>
        <select
          id="user-select"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">-- Please select a user to claim points --</option>
          {data?.data.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {/* Add New User */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <input
          type="text"
          placeholder="Add new user"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={() => mutate(newUser)}
          disabled={!newUser.trim() || isPending}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white text-sm px-5 py-2 rounded-md transition"
        >
          {isPending ? "Adding..." : "Add User"}
        </button>
      </div>
    </div>
  );
};

export default UserSelector;
