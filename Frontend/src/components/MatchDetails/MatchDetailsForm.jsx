import React, { useState } from "react";

const MatchDetailsForm = () => {
  const [formData, setFormData] = useState({
    toss: "",
    venue: "",
    matchFormat: "T20",
    overs: 20,
    city: "",
    date: "",
    time: "",
    pitchType: "Normal",
    ballType: "White",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Match Details Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#101010] shadow-2xl rounded-xl">
      <h2 className="text-3xl font-semibold text-center text-[#D1D5DB] mb-6">
        Enter Match Details
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Toss Winner */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Toss Winner
            </label>
            <div className="relative">
              <i className="fas fa-trophy absolute left-3 top-4 text-[#FDBA74]"></i>
              <input
                type="text"
                name="toss"
                value={formData.toss}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
                placeholder="Enter the winning team"
              />
            </div>
          </div>

          {/* Venue */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Venue
            </label>
            <div className="relative">
              <i className="fas fa-map-marker-alt absolute left-3 top-4 text-[#FDBA74]"></i>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
                placeholder="Enter the venue"
              />
            </div>
          </div>

          {/* Match Format */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Match Format
            </label>
            <div className="relative">
              <i className="fas fa-list absolute left-3 top-4 text-[#FDBA74]"></i>
              <select
                name="matchFormat"
                value={formData.matchFormat}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
              >
                <option value="T20">T20</option>
                <option value="ODI">ODI</option>
                <option value="Test">Test</option>
              </select>
            </div>
          </div>

          {/* Overs */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Overs
            </label>
            <div className="relative">
              <i className="fas fa-clock absolute left-3 top-4 text-[#FDBA74]"></i>
              <input
                type="number"
                name="overs"
                value={formData.overs}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
                min={1}
                max={50}
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              City
            </label>
            <div className="relative">
              <i className="fas fa-city absolute left-3 top-4 text-[#FDBA74]"></i>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
                placeholder="Enter the city"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Date
            </label>
            <div className="relative">
              <i className="fas fa-calendar-alt absolute left-3 top-4 text-[#FDBA74]"></i>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Time
            </label>
            <div className="relative">
              <i className="fas fa-clock absolute left-3 top-4 text-[#FDBA74]"></i>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
              />
            </div>
          </div>
        </div>

        {/* Pitch Type */}
        <div>
            <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
              Match Format
            </label>
            <div className="relative">
              <i className="fas fa-list absolute left-3 top-4 text-[#FDBA74]"></i>
              <select
                name="matchFormat"
                value={formData.matchFormat}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-[#D1D5DB] rounded-lg p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FDBA74] text-[#D1D5DB] bg-[#101010]"
              >
               <option value="Normal">Normal</option>
              <option value="Green">Green</option>
              <option value="Dusty">Dusty</option>
              </select>
            </div>
          </div>

        {/* Ball Type */}
        <div className="mt-6">
          <label className="block text-lg font-medium text-[#D1D5DB] mb-2">
            Ball Type
          </label>
          <div className="relative">
            <i className="fas fa-baseball-ball absolute left-3 top-4 text-[#FDBA74]"></i>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 pl-10">
              <label className="flex items-center text-[#D1D5DB]">
                <input
                  type="radio"
                  name="ballType"
                  value="White"
                  checked={formData.ballType === "White"}
                  onChange={handleChange}
                  className="mr-2"
                />
                White
              </label>
              <label className="flex items-center text-[#D1D5DB]">
                <input
                  type="radio"
                  name="ballType"
                  value="Red"
                  checked={formData.ballType === "Red"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Red
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
           

            className="w-full bg-[#FDBA74] text-[#18181b] p-4 rounded-lg hover:bg-[#D1D5DB] hover:text-[#101010] flex justify-center items-center space-x-2 text-lg"
          >
            <i className="fas fa-paper-plane"></i>
            <span>Submit Match Details</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MatchDetailsForm;

