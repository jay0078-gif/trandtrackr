import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
    <Link
      to="/jobs"
      className=" text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
      </Link>
  </section>
  );
};

export default ViewAllJobs;
