import CV from "./cv";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import {CardHeader, Container, Stack} from "@mui/material";
import "./landing.css"


const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        &nbsp;&nbsp;•&nbsp;&nbsp;
    </Box>
);

export default function Landing() {
    return (
        <>
            <br/><br/><br/><br/><br/><br/>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <IntroductionCard/>
                        <p className="landing-body" style={{fontSize: 18}}>
                            Based in Singapore{bull}
                            Open to remote work/ relocation{bull}
                            Computer Science Graduate
                        </p>
                        {/*<Container maxWidth="sm">*/}
                        {/*    <Grid container spacing={4}>*/}
                        {/*        <Grid item xs={6}>*/}
                        {/*            <p className="landing-buttons" style={{fontSize: 20}}> View Personal*/}
                        {/*                Projects</p>*/}
                        {/*        </Grid>*/}
                        {/*        <Grid item xs={6}>*/}
                        {/*            <p className="landing-buttons" style={{fontSize: 20}}> View Articles</p>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}
                        {/*</Container>*/}
                    </Grid>
                    <Grid item xs={4}>
                        <img src={require('../documents/dp.JPG')} height="500"/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export function IntroductionCard() {
    return (
        <>
            {/*<Card sx={{minWidth: 275}}>*/}
            <p className="landing-header" style={{fontSize: 50}}> Hi, I'm Yee Han.</p>
            <Stack direction="row" justifyContent="center">
                <p className="landing-subtitle" style={{fontSize: 18}}> Backend Engineer at TikTok</p>
                <CV/>
            </Stack>
            <br/><br/><br/>
            <p className="landing-body" style={{fontSize: 18}}>
                I am a <strong>Software Engineer</strong> in the Video Architecture team at TikTok Singapore.
                I graduated from Nanyang Technological University with a major in <strong> Computer Science</strong>.
                I have a passion for building applications with real-world impact, and am currently exploring use cases
                in the <strong> Web3 </strong> space.
            </p>
            {/*</Card>*/}
        </>
    );
}