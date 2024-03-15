import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaAddressBook } from "react-icons/fa6";

const links1 = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all projects', path: 'all-projects', icon: <MdQueryStats /> },
  // { id: 3, text: 'add skills', path: 'add-skill', icon: <FaWpforms /> },
  { id: 4, text: 'view skills', path: 'view-skill', icon: <FaAddressBook /> },
  { id: 5, text: 'profile', path: 'profile', icon: <ImProfile /> },

];

export default links1;