import { Fragment } from 'react';
import City, { CityType } from '../../components/city';
import { Waypoint } from 'react-waypoint';
import getCities from '../../api/Cities';

import './Home.scss';

interface IHomeProps {
    cities: CityType[];
    setCities: (cities) => void;
}

const Home = ({ cities, setCities }: IHomeProps) => {
    const fetchCities = () => {
        (async () => {
            const data = await getCities(cities.length);
            setCities((prevState: CityType[]) => [...prevState, ...data.items]);
        })();
    };

    return (
        <div className='homepage'>
            {cities &&
                cities.map(({ area, region, title, id }, i) => (
                    <Fragment key={id}>
                        {i === cities.length - 3 && (
                            <Waypoint onEnter={fetchCities} key={`wp_${id}`} />
                        )}
                        <City
                            area={area}
                            region={region}
                            title={title}
                            id={id}
                        />
                    </Fragment>
                ))}
        </div>
    );
};

export default Home;
