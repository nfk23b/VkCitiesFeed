import ApiCall from './Request';

const getCities = async (offset?: number) => {
    const params = {
        country_id: 1,
        need_all: 1,
        count: 10
    };

    if (offset) {
        params['offset'] = offset;
    }

    return await ApiCall('database.getCities', params);
};

export default getCities;
