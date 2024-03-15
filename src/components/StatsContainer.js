import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import { useSelector } from 'react-redux';
import { FaAddressBook } from "react-icons/fa6";
import axios from 'axios';
import React, {useState, useEffect} from 'react';


const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const [allEmployees, setAllEmployees] = useState(null)
  useEffect(()=>{
    axios.get('http://localhost:8800/api/v1/auth/getalluser')
  .then(response => {
    setAllEmployees(response.data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  },[])
  console.log(allEmployees)
  const defaultStats = [
    {
      title: 'pending Projects',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Projects completed',
      count: stats.interview || 1,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Number of Employees',
      count:  0,
      icon: <FaAddressBook />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
