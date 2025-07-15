const getMedal = (rank) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return "";
};

const LeaderboardCard = ({ user }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-lg bg-white shadow mb-2">
      <div className="flex items-center gap-3">
        <span className={`text-xl font-bold w-6 text-center ${user.rank <= 3 ? "text-yellow-500" : "text-gray-700"}`}>
          {user.rank}
        </span>
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-sm font-semibold">{user.name}</div>
          <div className="text-xs text-gray-500">{getMedal(user.rank)}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-md font-bold text-purple-600">{user.totalPoints.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
