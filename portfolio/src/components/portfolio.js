import React from 'react'
import NavBar from "./navbar";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import project1 from "../html-css-javascript-lg.jpg"

const useStyles = makeStyles({
    mainContainer:{
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <NavBar/>
            <Grid container justify="center" >
                {/* Project 1   */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Porject 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Card content for project 1
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    LiveDemo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* Project 2   */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 2" height="140" image={project1}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Porject 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Card content for project 2
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    LiveDemo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                 {/* Project 3   */}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 3" height="140" image={project1}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Porject 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Card content for project 3
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    LiveDemo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                 {/* Project 4   */}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 4" height="140" image={project1}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Porject 4
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Card content for project 4
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    LiveDemo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}


export default Portfolio;