import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUser from "../../Hooks/useUser";
import { RxAvatar } from "react-icons/rx";

const ManageUser = () => {
  const [users,refetch] = useUser();
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (user) =>{
    console.log(user)
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount){
            refetch()
            toast.success(`Now ${user.username > 0} new admin`)
        }
    })

  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>User Info</th>
            <th>Subscription Status</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user,index) => (
            <tr key={user._id}>
                <td  className="font-medium">{index+1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.username}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>Purple</td>
              <th>
                {
                    user.roal === 'admin'? 'Admin'
                    :<button onClick={()=>handleMakeAdmin(user)}
                    className="btn btn-ghost btn-xs">
                      <RxAvatar className="text-2xl"/>
                   </button>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
