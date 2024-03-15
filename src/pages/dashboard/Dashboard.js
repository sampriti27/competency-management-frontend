import { Outlet } from 'react-router-dom';
import { BigSidebar1, Navbar1, SmallSidebar1 } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';
const Dashboard = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar1 />
        <BigSidebar1 />
        <div>
          <Navbar1 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Dashboard;