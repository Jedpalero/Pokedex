import { Link } from "react-router-dom";
import error from "../assets/error.png";

const ErrorNotFound = () => {
  return (
    <div className="md:flex justify-center items-center gap-10">
      <img
        src={error}
        alt="error"
        className="md:size-[30rem] size-[15rem] md:m-0 m-auto"
      />
      <div className="md:space-y-10 space-y-4 md:text-start text-center">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <p>
          We're sorry, there is an error in fetching the data. Please try again!
        </p>
        <button>
          <Link to="/">GO HOME</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorNotFound;
