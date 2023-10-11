import { useState, useEffect } from 'react';

export const withOS = () => {
  const [osName, setOsName] = useState();
  useEffect(() => {
    var OSName = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.userAgent.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
    if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
    if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
    setOsName(OSName);
  });
  return osName;
};
