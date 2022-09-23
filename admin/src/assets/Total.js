import axios from 'axios'
import { baseUrl } from './Const';

const totalUser = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/count/userCount`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}