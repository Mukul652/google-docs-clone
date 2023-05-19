
import React, { useEffect, useState } from 'react';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AssignmentIcon from '@mui/icons-material/Assignment';

import styled from '@emotion/styled';

const Component = styled.div`
  display: flex;
  height: 100vh;
`;

const EditorContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

const Sidebar = styled.div`
  width: 240px;
  background: #f5f5f5;
`;

const SidebarToggle = styled.div`
  position: absolute;
  top: 1px;
  
  left: 250px;
  z-index: 999;
`;

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean'],
];

const Editor = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const quillServer = new Quill('#container', { theme: 'snow', modules: { toolbar: toolbarOptions } });
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Component>
      <Sidebar>
        <SidebarToggle isOpen={isSidebarOpen}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        </SidebarToggle>
        <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
          <List>
            
            <ListItem button>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Sheets" />
              
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CloudQueueIcon />
              </ListItemIcon>
              <ListItemText primary="Drive" />
              
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SlideshowIcon />
              </ListItemIcon>
              <ListItemText primary="Slides" />
              
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Forms" />
              
            </ListItem>
          </List>
        </Drawer>
      </Sidebar>
      <EditorContainer>
        <Box className="container" id="container"></Box>
      </EditorContainer>
    </Component>
  );
};

export default Editor;

