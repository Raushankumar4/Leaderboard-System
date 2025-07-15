import { useState } from "react";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import History from "./components/History";

const App = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [showClaim, setShowClaim] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <div className="max-w-2xl mx-auto px-4 py-6">

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShowHistory(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Show History
          </button>
          <button
            onClick={() => setShowClaim(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Claim Points & Add Users
          </button>
        </div>


        <Leaderboard />
      </div>


      {showHistory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[80vh] p-4 shadow-lg overflow-y-auto relative">
            <button
              onClick={() => setShowHistory(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-3 text-center text-purple-700">
              Claim History
            </h2>
            <History />
          </div>
        </div>
      )}


      {showClaim && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-5 shadow-lg relative">
            <button
              onClick={() => setShowClaim(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center text-green-700">
              Claim Points
            </h2>
            <div className="space-y-4">
              <UserSelector
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
              <ClaimButton selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
