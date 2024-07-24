import axios from 'axios';

const url = "http://localhost:3000";

export const addApplicant = async (applicantData) => {
    return await axios.post(`${url}/gameApplicants`, applicantData);
}

export const getApplicant = async () => {
    return await axios.get(`${url}/viewApplicants`)
}
