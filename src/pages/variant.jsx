import Logo from '../components/Logo.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import akinov from '../public/images/akinov.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: 'https://sun9-17.userapi.com/impg/uYk4c0BfSgJdPiKAtrnJR_mr0lXQB2GJ9-Pc_Q/bDOHwx5ZH7c.jpg?size=1600x1067&quality=95&sign=a99ca1b94488ae409b2753285829f44d&type=album',
    rows: 1,
    cols: 3,
    title: 'SOLID SIGN #2',
  },
  {
    img: 'https://sun9-51.userapi.com/impg/vk_QQZFNg4Kn5tVGZW-6r1P2QGHUfJXfQc4Ogw/iKmuCub9NUw.jpg?size=1160x1600&quality=95&sign=b35931004680502e9e3cd6f1ea31714a&type=album',
    rows: 3,
    cols: 1,
    title: 'SOLID SIGN #2',
  },
  {
    img: 'https://sun9-52.userapi.com/impg/_0Ejx0AHbizLTuLjagD0InQ6osM5RT5aKnXhlQ/jRv5bPTQsCA.jpg?size=1067x1600&quality=95&sign=4948ab458aabdbcd3bd7978f2fc428aa&type=album',
    rows: 3,
    cols: 1,
    title: 'SOLID SIGN #2',
  },
  {
    img: 'https://sun9-34.userapi.com/impg/xK67ZEz2qRgGMZt4FmldFPZ0pMuVJcV_2a2vgA/D53-N7QLEYQ.jpg?size=1600x1067&quality=95&sign=6da709b10f16b7b0b85c35f3b71e3eae&type=album',
    rows: 2,
    cols: 2,
    title: 'SOLID SIGN #2',
  },
  {
    img: akinov.src,
    rows: 1,
    cols: 3,
    title: 'SOLID SIGN #2',
  },
];

export default function Home() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-around"
        width="100hw"
        minHeight="100vh"
        alignItems="center"
      >
        <Stack
          direction="column"
          justifyContent="space-around"
          spacing={4}
          maxWidth={500}
        >
          <Stack
    direction="row"
          justifyContent="space-between"
    >
            <Box p={2}>
              <Logo height={48} />
            </Box>
            <Typography variant="h2" color="white">SOLID SIGN</Typography>
          </Stack>
          <ImageList
            sx={{ width: 500 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
      </Stack>
    </>
  )
}
