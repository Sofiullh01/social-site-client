
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import PropTypes from 'prop-types'

const AdminRoure = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();
    
    const location = useLocation();
    if (loading ||isAdminLoading) {
      return (
        <div className="flex justify-center items-center">
          <span className="loading loading-ring loading-lg inline-block"></span>
        </div>
      );
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};
AdminRoure.propTypes = {
    children: PropTypes.node,
  };
export default AdminRoure;