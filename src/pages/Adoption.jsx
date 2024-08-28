import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Adoption = ({isLoggedIn}) => {
  console.log(isLoggedIn) ;
  console.log("test") ;
  return (
    <>
    <div className="page-container">
      <div className="content-wrap"> 
        <section className='adoption-section'>
        <h1>Our Adoption Gallery</h1>
        <p>Step 1: Browse our adoption gallery</p>
        <p>Step 2: Book an appointment</p>
        <p>Step 3: Show up for your appointment on time.</p>
        </section>
        <section className='adoption-section2'>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Bean"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240826-WA0053.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bean
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <p>Gender: Female</p>
                  <p>Age: 4 years</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Bear"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2024/04/bear.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bear
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Male</p>
                  <p>Age: 8 months</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Cheesy"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240820-WA0031.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cheesy
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Female</p>
                  <p>Age: 1 year 1 month</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Floof"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2024/07/IMG-20240709-WA0027.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Floof
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Female</p>
                  <p>Age: 5.5 years</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </section>
        <section className='adoption-section2'>
        <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Bacon"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2023/07/IMG-20230705-WA0018.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bacon
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Male</p>
                  <p>Age: 5 years 10 months</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Niko"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-18.47.00_b2ac09d8.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Niko
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Male</p>
                  <p>Age: 8 months</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Smooch"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240816-WA0021.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Smooch
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Female</p>
                  <p>Age: 5.5 years</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='adoption-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Tracy"
                height="250"
                image="https://spca.org.sg/wp-content/uploads/2024/06/IMG-20240612-WA0046.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tracy
                </Typography>
                <Typography variant="body2" className='card-desc' sx={{ color: 'text.secondary' }}>
                  <p>Gender: Female</p>
                  <p>Age: 3 years</p>
                </Typography>
              </CardContent>
              <CardActions className='card-item'>
                {isLoggedIn && <Button size="small">Book an Appointment</Button>}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </section>

      </div>
    </div>
    </>
  );
};

export default Adoption;
