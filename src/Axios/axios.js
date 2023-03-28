import axios from 'axios';
const instance = axios.create({baseURL: 'https://collegewebsitebackend.onrender.com'});
export default instance