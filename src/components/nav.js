import "./nav.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                <IconButton edge="start" color="inherit" aria-label="home" sx={{mr: 2}}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
                <li>
                    <a href="https://github.com/YeeeeeHan">Medium</a>
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
        </nav>
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