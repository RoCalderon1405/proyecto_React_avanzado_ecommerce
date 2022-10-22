import axios from "axios";

const BaseURL = 'https://ecomerce-master.herokuapp.com';

export const consumoApi = axios.create({ baseURL: BaseURL })