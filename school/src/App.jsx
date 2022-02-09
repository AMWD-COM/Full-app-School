import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
// import MenuIcon from '@material-ui/icons/Menu';
import Student from './components/Student';
import Exo from './components/Exo';
import {Routes, Route} from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Student/>} ></Route>
        <Route path='/exo'  element={<Exo/>} ></Route>
      </Routes>
    </div>
  );
}
