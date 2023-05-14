import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import PageWithMenu from '../components/PageWithMenu';
import akinov from '../public/images/akinov.jpg';
import afanasiev from '../public/images/afanasiev.jpeg';
import skind from '../public/images/skind.jpeg';
import electrostatic from '../public/images/electrostatic.jpeg';
import progruss from '../public/images/progruss.jpeg';

ImageList


const artists = [
  {
    name: "AKINOV",
    src: akinov.src,
  },
  {
    name: "Electrostatic",
    src: electrostatic.src,
  },
  {
    name: "Progruss",
    src: progruss.src,
  },
  {
    name: "Евгений Афанасьев",
    src: afanasiev.src,
  },
  {
    name: "SKind",
    src: skind.src,
  },
];


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default () => {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  const upLg = useMediaQuery(theme.breakpoints.up('lg'));
  let cols = 1;
  let width = '100%';
  let maxWidth = "sm";
  const rowHeight = {};
  if (upSm) { cols = 2; width = 600 - 48; maxWidth = "sm", rowHeight.rowHeight = 700; };
  if (upMd) { cols = 5; width = 900 - 48; maxWidth = "md", rowHeight.rowHeight = 700; };
  if (upLg) { cols = 5; width = 1200 - 48; maxWidth = "lg", rowHeight.rowHeight = 700; };
  return (
    <PageWithMenu maxWidth={maxWidth}>
      <ImageList
        ariant="quilted"
        cols={cols}
        sx={{ width }}
        {...rowHeight}
      >
        {artists.map((item) => (
          <ImageListItem key={item.src}>
            <img
              {...srcset(item.src, 100, 2, 1)}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{ color: 'white' }}
              title={item.name}
              position="bottom"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </PageWithMenu>
  );
}
