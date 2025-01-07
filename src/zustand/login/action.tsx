import axios from 'axios'

export const signin = async (data) => {
    try {
        const response = await axios.post(
            `https://pleased-presumably-egret.ngrok-free.app/auth/login`,
            data,
        )
        return response?.data;
    } catch (err) {
        return err?.response?.data;

    }
}

