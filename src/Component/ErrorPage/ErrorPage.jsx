import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const error =useRouteError()
    return (
        <div className="flex flex-col text-center gap-4 items-center mt-[300px]">
            <h2 className="text-5xl text-red-400 font-bold">Oops!</h2>
      <p className="text-xl font-medium">Page {error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
            <p className="text-xl">Sorry, the page you are looking for does not exist.</p>
           <Link to="/"><button className="text-xl mt-3 bg-gray-800 rounded-lg text-white px-7 py-4">Home Page</button></Link>
        </div>
      }
        </div>
    );
};

export default ErrorPage;