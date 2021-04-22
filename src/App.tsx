import { useState, useEffect } from 'react';
import Home from './containers/home';
import getCities from './api/Cities';
import { CityType } from './components/city';

const App = () => {
    const [cities, setCities] = useState<CityType[]>([]);

    useEffect(() => {
        (async () => {
            const { items } = await getCities();
            items && setCities(items);
        })();
    }, []);

    return cities && <Home cities={cities} setCities={setCities} />;
};

export default App;
