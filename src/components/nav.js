import "./nav.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;
const navItems = [
    {
        name: 'Github',
        link: 'https://github.com/YeeeeeHan',
        icon: <GitHubIcon/>
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/limyeehan/',
        icon: <LinkedInIcon/>
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/Yeeeeehan',
        icon: <TwitterIcon/>
    }
];


export default function Navbar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Socials
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <a href={item.link}>
                                {item.icon}&nbsp;&nbsp;&nbsp;
                                <ListItemText primary={item.name}/>
                            </a>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    return (
        <>
            <nav className="nav">
                <Link to="/" className="site-title">
                    <IconButton edge="start" color="inherit" aria-label="home" sx={{mr: 2}}>
                        <HomeIcon/>
                    </IconButton>
                </Link>
                <Box sx={{display: {sm: 'none'}}}>
                    <ul>
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/portfolio">Portfolio</CustomLink>
                        <li>
                            <a href="https://limyeehan.medium.com/">Medium</a>
                        </li>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </ul>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'inline-block'}}}>
                    <ul>
                        <CustomLink to="/about">About</CustomLink>
                        <CustomLink to="/portfolio">Portfolio</CustomLink>
                        <li>
                            <a href="https://limyeehan.medium.com/">Medium</a>
                        </li>
                        <li>
                            <a href="https://github.com/YeeeeeHan">
                                <GitHubIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/limyeehan/">
                                <LinkedInIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Yeeeeehan">
                                <TwitterIcon/>
                            </a>
                        </li>
                    </ul>
                </Box>
            </nav>
            <Box component="nav">
                <Drawer
                    anchor="right"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


// function CustomExternalLink({to, children, ...props}) {
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }