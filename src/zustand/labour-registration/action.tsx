import { API_URL } from '@/constants/Constant';
import axios from 'axios'

export const addlabour = async (data: any) => {
    try {
        const response = await axios.post(
            `${API_URL}/labour/add-labour`,
            data,
        )
        return response?.data;
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return err.response.data;
        }
        return { message: 'An unknown error occurred' };

    }
}

