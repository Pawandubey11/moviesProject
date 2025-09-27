import React, { useEffect, useState } from "react";

const ListShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("shows")) || [];
    setShows(saved);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">List of Shows</h1>

      {shows.length === 0 ? (
        <p className="text-gray-600">⚠️ No shows found</p>
      ) : (
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Movie</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Poster</th>
              </tr>
            </thead>
            <tbody>
              {shows.map((show, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-3">{show.title}</td>
                  <td className="p-3">{show.date}</td>
                  <td className="p-3">{show.time}</td>
                  <td className="p-3">
                    {show.poster && (
                      <img
                        src={show.poster}
                        alt={show.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListShows;
