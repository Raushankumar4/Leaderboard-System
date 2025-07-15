import { useQuery } from "@tanstack/react-query";
import { getHistory } from "./services/api";

const History = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  });

  if (isLoading) {
    return (
      <div className="text-center text-gray-600 text-sm mt-4">
        Loading history...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Claim History
      </h3>
      {data?.data.length === 0 ? (
        <p className="text-gray-500 text-sm">No claims found.</p>
      ) : (
        <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {data?.data.map((h) => (
            <li
              key={h._id}
              className="border border-gray-200 rounded p-4 hover:bg-gray-50 transition"
            >
              <div className="text-sm text-gray-700 font-medium">
                {h.userId.name}
              </div>
              <div className="text-sm text-gray-500">
                Claimed <span className="font-semibold text-blue-600">{h.pointsClaimed} pts</span> on{" "}
                {new Date(h.claimedAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
