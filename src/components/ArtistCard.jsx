import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ArtistCard = ({ img, title }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          sx={{ height: 300 }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography noWrap color="white" fontWeight="medium" >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArtistCard;
