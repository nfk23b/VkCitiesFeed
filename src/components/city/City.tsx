import './City.scss';

export type CityType = {
    area: string;
    region: string;
    title: string;
    id: number;
};

const City = ({ area, region, title }: CityType) => {
    return (
        <div className='city'>
            <div className='city_title'>{title}</div>
            <div className='city_region'>{region}</div>
            <div className='city_area'>{area}</div>
        </div>
    );
};

export default City;
