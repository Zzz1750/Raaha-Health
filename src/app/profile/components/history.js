import React from 'react';

const SessionHistoryComponent = () => {
  const sessionsData = [
    {
      id: 1,
      date: '16-10-2023',
      details: 'A session with Dr SeethaLakshmi for 50 minutes'
    },
    {
      id: 2,
      date: '20-10-2023',
      details: 'Follow-up session with Dr SeethaLakshmi for 30 minutes'
    },
    {
      id: 3,
      date: '25-10-2023',
      details: 'Final consultation with Dr SeethaLakshmi for 45 minutes'
    },
    {
      id: 4,
      date: '30-10-2023',
      details: 'Emergency session with Dr SeethaLakshmi for 60 minutes'
    },
    {
      id: 5,
      date: '05-11-2023',
      details: 'Check-in session with Dr SeethaLakshmi for 40 minutes'
    },
    {
      id: 6,
      date: '10-11-2023',
      details: 'Follow-up session with Dr SeethaLakshmi for 50 minutes'
    }
  ];

  return (
    <div id="session-section" className="p-4 sm:p-10 rounded-lg w-full min-h-[300px] bg-white">
      <div className="flex justify-between items-center mb-6 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Session History</h1>
      </div>

      <div className="space-y-6 sm:space-y-12">
        {sessionsData.map((session) => (
          <div key={session.id} className="-mx-4 sm:-mx-10 relative">
            <p className="absolute -top-3 left-4 sm:left-10 px-2 bg-white text-gray-600 text-sm sm:text-base">
              {session.date}
            </p>
            <div className="border-y border-gray-300">
              <div className="px-4 sm:px-10 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex-1 text-left mb-3 sm:mb-0">
                    <p className="text-black text-sm sm:text-base font-medium">{session.details}</p>
                  </div>
                  <button className="rounded-md border border-gray-400 text-black px-3 sm:px-4 py-1 sm:py-2 hover:bg-gray-50 self-end sm:self-auto">
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionHistoryComponent;