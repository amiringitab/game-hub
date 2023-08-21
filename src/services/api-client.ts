import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3cc22e244d484847bf740a1fd1923a6b",
  },
});
