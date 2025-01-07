import axios from 'axios'

export const addlabour = async (data) => {
    try {
        const response = await axios.post(
            `https://pleased-presumably-egret.ngrok-free.app/labour/add-labour`,
            data,
        )
        return response?.data;
    } catch (err) {
        return err?.response?.data;

    }
}

