import useAuth from "../../Hooks/useAuth";

const Profile = () => {
    const {user} = useAuth();
    console.log(user)
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-full">
        {/* User Info Section */}
        <div className="text-center mb-6">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />
          <h2 className="text-xl font-bold">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Badges Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Badges</h3>
          <div className="flex justify-center space-x-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">
              Badge 1
            </span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">
              Badge 2
            </span>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
          <div className="mb-4">
            <h4 className="text-md font-medium">Post Title 1</h4>
            <p className="text-gray-600">December 1, 2023</p>
            {/* Include other necessary information about the post */}
          </div>
          <div className="mb-4">
            <h4 className="text-md font-medium">Post Title 2</h4>
            <p className="text-gray-600">November 28, 2023</p>
            {/* Include other necessary information about the post */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
