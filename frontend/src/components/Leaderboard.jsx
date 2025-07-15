import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./services/api";
import LeaderboardCard from "./LeaderboardCard";

const USERS_PER_PAGE = 10;

const Leaderboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <p className="text-center">Loading leaderboard…</p>;

  const users = data?.data || [];
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const topThree = users.slice(0, 3);
  const start = (currentPage - 1) * USERS_PER_PAGE;
  const end = start + USERS_PER_PAGE;

  const paginatedUsers = users.slice(3).slice(start, end);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">🏆 Leaderboard</h2>

      {/* 🥇 Top 3 Podium */}
      {topThree.length === 3 && (
        <div className="flex justify-center items-end gap-4 mb-8">
          {/* 2nd */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 border-4 border-gray-400 rounded-full overflow-hidden mb-1">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topThree[1].name}`}
                alt={topThree[1].name}
                className="w-full h-full"
              />
            </div>
            <span className="text-sm font-semibold">{topThree[1].name}</span>
            <span className="text-xs text-gray-500">🥈 {topThree[1].totalPoints} pts</span>
          </div>

          {/* 1st */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 border-4 border-yellow-400 rounded-full overflow-hidden mb-1">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topThree[0].name}`}
                alt={topThree[0].name}
                className="w-full h-full"
              />
            </div>
            <span className="text-base font-bold">{topThree[0].name}</span>
            <span className="text-sm text-yellow-600 font-bold">🥇 {topThree[0].totalPoints} pts</span>
          </div>

          {/* 3rd */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 border-4 border-orange-400 rounded-full overflow-hidden mb-1">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topThree[2].name}`}
                alt={topThree[2].name}
                className="w-full h-full"
              />
            </div>
            <span className="text-sm font-semibold">{topThree[2].name}</span>
            <span className="text-xs text-orange-500">🥉 {topThree[2].totalPoints} pts</span>
          </div>
        </div>
      )}

      {/* 💠 Paginated Users */}
      {paginatedUsers.map((user) => (
        <LeaderboardCard key={user._id} user={user} />
      ))}

      {/* ⬅️ Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${currentPage === index + 1
              ? "bg-yellow-500 text-white"
              : "bg-gray-100 text-gray-700"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
