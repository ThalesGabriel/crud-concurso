export const getApiUrl = () => {
    const localUrl = "https://vmify-mark-api-dev.herokuapp.com/";
    if (process.env.REACT_APP_ENV === "develop") {
      return localUrl;
    } else {
      return "https://vmify-mark-api-dev.herokuapp.com/";
    }
  };
  