export function transformUrl(url, type = "thumb") {
  if (!url) return "";
  const presets = {
    thumb: "w_300,h_400,c_fill,q_auto,f_auto",
    banner: "w_1200,h_600,c_fill,q_auto,f_auto"
  };
  return url.includes("/upload/")
    ? url.replace("/upload/", `/upload/${presets[type]}/`)
    : url;
}
