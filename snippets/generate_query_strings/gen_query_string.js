// A URL string with parameters looks like this:
// https//www.domain.com/page?key1=value1&key2=value2

const search = {
    widht: 360,
    height: 300,
    locale: "en",
    toolbar_bg: "",
    interval: "3h",
    pair: "BTC_USD"
  };
  
  function generateUrl(obj) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "") {
        delete obj[key];
      }
    });
    const url = Object.entries(obj)
      .map((pair) => pair.map(encodeURIComponent).join("="))
      .join("&");
    return url.length ? `?${url}` : "";
  }
  
  const query = generateUrl(search);
  console.log(`https//www.domain.com/page${query}`);
  