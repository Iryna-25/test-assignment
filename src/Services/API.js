import axios from "axios";

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getTeamMembers = (page) => {
    const URL = `${BASE_URL}users?page=${page}&count=6`;
    return axios.get(URL).then(response => response.data);
};

export const getPositions = () => {
    const URL = `${BASE_URL}positions`;
    return axios.get(URL).then(response => response.data);
};