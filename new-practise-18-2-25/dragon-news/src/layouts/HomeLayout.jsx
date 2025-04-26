import Header from '../components/Header';
import LatestNews from './LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header>
            <section className='w-11/12 mx-auto mt-3'>
            <LatestNews></LatestNews>
            </section>
            </header>
            <nav>
             
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;