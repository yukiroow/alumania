import React from "react";
// @author Jude Angelo Ilumin
const albums = [
  {
    id: 1,
    name: "May Ona",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "1st Year Memories",
  },
  {
    id: 2,
    name: "Shacks Taylor",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "2nd Year Memories",
  },
  {
    id: 3,
    name: "Finn Muh",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "Field Trip",
  },
  {
    id: 4,
    name: "John Sten",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "Off Campus Review",
  },
  {
    id: 5,
    name: "Stacey Hills",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "The Playoffs",
  },
  {
    id: 6,
    name: "Corey Lester",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "Festival",
  },
  {
    id: 7,
    name: "Clara Yu",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "Cultural Day",
  },
  {
    id: 8,
    name: "Amanda West",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "Study Group",
  },
  {
    id: 9,
    name: "Chase Water",
    profileUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    title: "Graduation",
  },
];

const AlbumGrid = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] p-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full"
            style={{ height: "280px", width: "310px" }}
          >
            {/* Top Section */}
            <div className="relative bg-white px-8 pt-7 pb-2  flex justify-start items-center">
              {/* Avatar Section */}
              <div className="flex items-center space-x-3">
                <div className="avatar -mt-4 -ml-4">
                  <div className="w-7 h-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img
                      src={album.profileUrl}
                      alt={album.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              {/* Album Name Section */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-8"
                style={{ fontSize: "20px", color: "#2c3e50" }}
              >
                <span className="text-gray-800 text-lg font-semibold">
                  {album.name}
                </span>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="relative bg-gray-200 flex justify-center items-center h-44"
              style={{
                backgroundImage: "url('https://www.libarts.colostate.edu/wp-content/uploads/2019/08/CSU-Liberal-Arts-students-walking-on-campus.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="text-gray-500 text-lg"></span>
            </div>

            {/* Title Section */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">{album.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
