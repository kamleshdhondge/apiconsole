import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import axios from 'axios';

import CloudUploadIcon from '@material-ui/icons/CloudUpload'; 

export default class DropzoneDialogExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleSave(files) {
        this.setState({
            files: files,
            open: false
        });

        
        const data = new FormData() 
        data.append('file', this.state.files[0])
        axios.post("http://localhost:5000/file-upload", data, { 
           
        })
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                   
                    startIcon={<CloudUploadIcon />}
                    onClick={this.handleOpen.bind(this)}
                    >
                    Upload File
                </Button>

                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
               
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}