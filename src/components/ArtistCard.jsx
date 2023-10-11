import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ArtistCard = ({ img, title }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title={title}
      />
      <CardContent sx={{ mb: '-10px' }} >
        <Typography noWrap color="white">
          <b>{title}</b>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
