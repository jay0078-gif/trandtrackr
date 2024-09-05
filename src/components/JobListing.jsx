import { useState, useEffect } from 'react';
import JobListings from './JobListings';
import Spinner from './Spinner';

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');


  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/pages/HomnePage.jsx' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? '' : 'Registration'}
         
        </h2>
        <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Name'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
        <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                > Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Email"
                required
                value={contactEmail}
                onChange={(e)=> setContactEmail(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Password</label
              >
              <input
                type="password"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter Password"
                value={contactPhone}
                onChange={(e)=> setContactPhone(e.target.value) }
              />
            </div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              
        
      </div>
    </section>
  );
};
export default JobListing;
