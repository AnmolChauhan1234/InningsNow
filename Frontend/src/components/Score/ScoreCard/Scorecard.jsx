import React, { useState } from "react";

const Dropdown = () => {
  const data = {
    team: "United Arab Emirates U19",
    innings: "137-10 (44 Ov)",
    batters: [
      {
        name: "Aryan Saxena",
        dismissal: "b Yudhajit Guha",
        runs: 9,
        balls: 17,
        fours: 1,
        sixes: 0,
        sr: 52.94,
      },
      {
        name: "Akshat Rai",
        dismissal: "lbw b KP Karthikeya",
        runs: 26,
        balls: 52,
        fours: 1,
        sixes: 0,
        sr: 50.0,
      },
      {
        name: "Yayin Rai",
        dismissal: "c Harvansh Singh b Chetan Sharma",
        runs: 0,
        balls: 1,
        fours: 0,
        sixes: 0,
        sr: 0.0,
      },
      {
        name: "DSouza",
        dismissal: "c Harvansh Singh b Hardik Raj",
        runs: 17,
        balls: 27,
        fours: 2,
        sixes: 0,
        sr: 62.96,
      },
      {
        name: "Rayan Khan",
        dismissal: "b Ayush Mhatre",
        runs: 35,
        balls: 48,
        fours: 3,
        sixes: 1,
        sr: 72.92,
      },
      {
        name: "Aayan Khan (c)",
        dismissal: "b Hardik Raj",
        runs: 5,
        balls: 5,
        fours: 1,
        sixes: 0,
        sr: 100.0,
      },
      {
        name: "Uddish Suri",
        dismissal: "run out (Ayush Mhatre)",
        runs: 16,
        balls: 46,
        fours: 0,
        sixes: 0,
        sr: 34.78,
      },
      {
        name: "Noorullah Ayobi",
        dismissal: "b Chetan Sharma",
        runs: 9,
        balls: 23,
        fours: 1,
        sixes: 0,
        sr: 39.13,
      },
      {
        name: "Harsh Desai",
        dismissal: "not out",
        runs: 7,
        balls: 22,
        fours: 0,
        sixes: 0,
        sr: 31.82,
      },
      {
        name: "Mudit Agarwal (wk)",
        dismissal: "c KP Karthikeya b Yudhajit Guha",
        runs: 4,
        balls: 16,
        fours: 0,
        sixes: 0,
        sr: 25.0,
      },
      {
        name: "Ali Asgar Shums",
        dismissal: "c Harvansh Singh b Yudhajit Guha",
        runs: 2,
        balls: 7,
        fours: 0,
        sixes: 0,
        sr: 28.57,
      },
    ],
    bowlers: [
      {
        name: "Yudhajit Guha",
        overs: 7,
        maidens: 0,
        runs: 15,
        wickets: 3,
        eco: 2.1,
      },
      {
        name: "Chetan Sharma",
        overs: 8,
        maidens: 1,
        runs: 27,
        wickets: 2,
        eco: 3.4,
      },
      {
        name: "Hardik Raj",
        overs: 10,
        maidens: 1,
        runs: 28,
        wickets: 2,
        eco: 2.8,
      },
      {
        name: "Samarth Nagaraj",
        overs: 3,
        maidens: 0,
        runs: 15,
        wickets: 0,
        eco: 5.0,
      },
      {
        name: "KP Karthikeya",
        overs: 10,
        maidens: 1,
        runs: 24,
        wickets: 1,
        eco: 2.4,
      },
      {
        name: "Ayush Mhatre",
        overs: 5,
        maidens: 1,
        runs: 19,
        wickets: 1,
        eco: 3.8,
      },
      {
        name: "Nikhil Kumar",
        overs: 1,
        maidens: 0,
        runs: 4,
        wickets: 0,
        eco: 4.0,
      },
      {
        name: "Harvansh Singh",
        overs: 1,
        maidens: 0,
        runs: 5,
        wickets: 0,
        eco: 5.0,
      },
    ],
  };
  const teamData = [data, data];
  const [isOpen, setIsOpen] = useState(Array(teamData.length).fill(false)); // Array to track open states

  const toggleDropdown = (index) => {
    const updatedState = isOpen.map((open, i) => (i === index ? !open : open));
    setIsOpen(updatedState);
  };

  return (
    <main className="h-full w-full flex flex-col space-y-4">
      {" "}
      {/* Ensures vertical stacking */}
      {teamData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full" // Ensures each button/dropdown adjusts dynamically
        >
          {/* Dropdown Button */}
          <button
            onClick={() => toggleDropdown(index)}
            className="flex items-center justify-between w-[42rem] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {/* Team Name */}
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-[#18181b]">
                {data.team}
              </h2>
            </div>

            {/* Score */}
            <div className="text-right">
              <p className="text-xl text-[#101010]">{data.innings}</p>
            </div>

            {/* Dropdown Icon */}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isOpen[index] && (
            <div className="mt-4 w-[42rem] rounded-md shadow-lg bg-white p-6">
              {/* Batting Table */}
              <h3 className="text-lg font-semibold mb-4 text-[#18181b]">
                Batters
              </h3>
              <table className="table-auto w-full border-collapse border border-[#D1D5DB]">
                <thead>
                  <tr className="bg-[#F3F4F6]">
                    <th className="text-left p-2 font-medium text-[#18181b]">
                      Batter
                    </th>
                    <th className="text-left p-2 font-medium text-[#18181b]">
                      Dismissal
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      R
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      B
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      4s
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      6s
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      SR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.batters.map((batter, i) => (
                    <tr
                      key={i}
                      className={`border-b ${
                        i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                      }`}
                    >
                      <td className="p-2 text-[#101010]">{batter.name}</td>
                      <td className="p-2 text-[#101010]">{batter.dismissal}</td>
                      <td className="p-2 text-right text-[#101010]">
                        {batter.runs}
                      </td>
                      <td className="p-2 text-right text-[#101010]">
                        {batter.balls}
                      </td>
                      <td className="p-2 text-right text-[#101010]">
                        {batter.fours}
                      </td>
                      <td className="p-2 text-right text-[#101010]">
                        {batter.sixes}
                      </td>
                      <td className="p-2 text-right text-[#101010]">
                        {batter.sr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Bowling Table */}
              <h3 className="text-lg font-semibold mt-8 mb-4 text-[#18181b]">
                Bowlers
              </h3>
              <table className="table-auto w-full border-collapse border border-[#D1D5DB]">
                <thead>
                  <tr className="bg-[#F3F4F6]">
                    <th className="text-left p-2 font-medium text-[#18181b]">
                      Bowler
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      O
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      M
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      R
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      W
                    </th>
                    <th className="text-right p-2 font-medium text-[#18181b]">
                      Eco
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.bowlers.map((bowler, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                      }`}
                    >
                      <td className="p-2 text-[#18181b]">{bowler.name}</td>
                      <td className="p-2 text-right text-[#18181b]">
                        {bowler.overs}
                      </td>
                      <td className="p-2 text-right text-[#18181b]">
                        {bowler.maidens}
                      </td>
                      <td className="p-2 text-right text-[#18181b]">
                        {bowler.runs}
                      </td>
                      <td className="p-2 text-right text-[#18181b]">
                        {bowler.wickets}
                      </td>
                      <td className="p-2 text-right text-[#18181b]">
                        {bowler.eco}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Dropdown;
