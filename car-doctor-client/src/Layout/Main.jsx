import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h1>This Is Main Divr</h1>

        </div>
    );
};

export default Main;