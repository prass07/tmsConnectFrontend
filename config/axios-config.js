import axios from "axios";

const base_url = "https://tmsconnect.sahasautomation.com";

const instance = axios.create({
  timeout: 100000,
  baseURL: base_url,
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default instance;
