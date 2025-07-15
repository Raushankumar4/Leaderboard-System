import { useMutation, useQueryClient } from "@tanstack/react-query";
import { claimPoints } from "./services/api";
import { useState } from "react";

const ClaimButton = ({ selectedUser }) => {
  const queryClient = useQueryClient();
  const [latestPoints, setLatestPoints] = useState(null);

  const { mutate, isPending } = useMutation({
    mutationFn: () => claimPoints(selectedUser),
    onSuccess: (res) => {
      setLatestPoints(res.data.points);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["history"] });
    },
  });

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <button
        onClick={() => mutate()}
        disabled={!selectedUser || isPending}
        className={`px-6 py-2 rounded text-white transition duration-200 ${!selectedUser
            ? "bg-gray-300 cursor-not-allowed"
            : isPending
              ? "bg-purple-400 cursor-wait"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
      >
        {isPending ? "Claiming..." : "🎯 Claim Points"}
      </button>

      {latestPoints !== null && (
        <p className="text-sm text-green-600 font-semibold">
          ✅ You claimed +{latestPoints} points!
        </p>
      )}
    </div>
  );
};

export default ClaimButton;
