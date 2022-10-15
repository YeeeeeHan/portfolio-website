import "./cv.css"
import React, {Component} from 'react';
import Pdf from '../documents/cv.pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';


export default function CV() {
    return (
        <div className="cv">
            <a href={Pdf}>
                <Button variant="contained" style={{backgroundColor: "#bebebe"}} sx={{ boxShadow: 0 }} size="sm">
                    <DownloadIcon/>
                    View Cv
                </Button>
            </a>
        </div>
    );
}