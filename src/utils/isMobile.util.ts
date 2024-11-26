const getIsMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|ipod/.test(userAgent);
  }

export default getIsMobile;