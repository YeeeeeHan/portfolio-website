import {Container, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import "./portfolio.css"
import Button from "@mui/material/Button";

var cardInfo = require('./cardinfo');


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Portfolio() {
    return (
        <>
            <h1 className="portfolio-header">Blockchain Projects</h1>
            <Container maxWidth="lg" className="portfolio-grid">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <RecipeReviewCard project={cardInfo.titanic}/>
                    </Grid>
                    <Grid item xs={4}>
                        <RecipeReviewCard project={cardInfo.two}/>
                    </Grid>
                    <Grid item xs={4}>
                        <RecipeReviewCard project={cardInfo.three}/>
                    </Grid>
                </Grid>
            </Container>
            <h1 className="portfolio-header">Personal Projects</h1>
            <Container maxWidth="lg" className="portfolio-grid">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <RecipeReviewCard project={cardInfo.four}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )

}

function RecipeReviewCard({project}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="194"
                image={project.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h5" color="text.primary">
                    {project.header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <BasicModal project={project} isExpanded={expanded} toggleExpanded={handleExpandClick}/>
                <a href="https://github.com/YeeeeeHan" target="_blank">
                    <Button variant="contained" style={{backgroundColor: "#f3f3f3", color: "#777777"}} sx={{boxShadow: 0}} size="small">
                        <OpenInNewIcon/>
                        &nbsp;Demo
                    </Button>
                </a>
                <a href="https://github.com/YeeeeeHan" target="_blank">
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                </a>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
        </Card>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function BasicModal({project, isExpanded, toggleExpanded}) {
    return (
        <div>
            <Modal
                open={isExpanded}
                onClose={toggleExpanded}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={20}>
                        <Grid item xs={4}>
                            <img className="portfolio-card-img" src={project.image} height="150"/>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className="portfolio-card-header">{project.header}</h1>
                        </Grid>
                    </Grid>
                    <br/>
                    <Card>
                        <CardHeader
                            action={
                                    <a href="https://github.com/YeeeeeHan" target="_blank">
                                        <Button variant="contained" style={{backgroundColor: "#f3f3f3", color: "#777777"}} sx={{boxShadow: 0}} size="small">
                                            <OpenInNewIcon/>
                                            &nbsp;Demo
                                        </Button>
                                    </a>
                            }
                            title="Minority game that is created on the block chain"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {project.modal}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Modal>
        </div>
    );
}
