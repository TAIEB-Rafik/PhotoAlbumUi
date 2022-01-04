import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant='h6'>
          Photo Album
        </Typography>      
      </Toolbar>
    </AppBar>
    <main className={classes.container}>
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
          Photo Album 
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            Hello every one my name is Mr taieb and this is a photo album and am trying to publish the beautful photos that i take
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  See My Photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Secondary action
                </Button>
              </Grid>
            </Grid>{/** End grid container */}
          </div>
        </Container>
      </div>{/** 1st dev after main */}
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
        {cards.map((card)=>(
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}> 
              <CardMedia
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                title='Image Title'
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5'>
                  Heading
                </Typography>
                <Typography>
                  This is a Media card.Use this section to describe the Content
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>View</Button>
                <Button size='small' color='primary'>Edit</Button>
              </CardActions>
            </Card>
          </Grid> /** end grid item */
        ))}
          
        </Grid> {/** end grid container */}
      </Container>
    </main>
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary'>
        put here what we put on footer
      </Typography>
    </footer>
    </>
    
  );
}

export default App;
