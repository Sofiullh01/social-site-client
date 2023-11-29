
import { Link } from 'react-router-dom';
import '../../../src/index.css';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-[400px] font-bold text-orange-500 -mt-28 transform -skew-x-6">404</h1>
        <Link to='/'>
        <button className=" py-2 px-2 mb-4 -mt-48 hover:bg-orange-500 hover:text-white font-medium duration-1000 rounded-md border-b-4 outline-none">Go Back Home</button>
        </Link>
        <p className="text-lg text-gray-400">Sorry, the page you are looking for might be in another dimension.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
