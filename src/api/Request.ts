import { CityType } from '../components/city';

declare var VK: any;

interface Data {
    count: number;
    items?: CityType[];
}

const apiCall = async (method: string, params?: object) => {
    return new Promise<Data>((resolve, reject) => {
        VK.Api.call(method, { ...params, v: '5.73' }, function ({ response }) {
            if (response) {
                resolve(response);
            }
        });
    });
};

export default apiCall;
