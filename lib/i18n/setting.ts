export const fallbackLng = "zh";
export const languages = [fallbackLng, "en"];

export const defaultNS = "translation";

export const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};
