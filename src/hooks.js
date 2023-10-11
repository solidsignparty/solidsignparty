import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


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

export const withMaxWidth = () => {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  const upLg = useMediaQuery(theme.breakpoints.up('lg'));
  let maxWidth = "sm";
  if (upSm) { maxWidth = "sm" };
  if (upMd) { maxWidth = "md" };
  if (upLg) { maxWidth = "lg" };
  return maxWidth;
}
