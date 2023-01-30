// import * as React from "react";

import 'katex/dist/katex.min.css';
import {  InlineMath, BlockMath } from 'react-katex';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
//
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// import InboxIcon from '@mui/icons-material/Inbox';
//BlockMath
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';


//import React, { useEffect, }  from "react";
import { BrowserRouter as Router ,    Routes,    Route,    Link ,useParams }  from "react-router-dom";
//useNavigate,
//

//import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
//import OutlinedInput from '@mui/material/OutlinedInput'

// import axios from 'axios';

import React, { useEffect,useState }  from "react";





//
//
// const drawerWidth = 240;



 const darkTheme = createTheme({ palette: { mode: 'dark' } });
// const lightTheme = createTheme({ palette: { mode: 'light' } });


function App() {
  //let  darkTheme = createTheme({ palette: { mode: 'dark' } });









//
// import cStringIO
// my_stringIObytes = cStringIO.StringIO()
// plt.savefig(my_stringIObytes, format='jpg')
// my_stringIObytes.seek(0)
// my_base64_jpgData = base64.b64encode(my_stringIObytes.read())

//  <ThemeProvider theme={}>
//---------------------------------------
//     { data1 && data1.result.categories.map((item)=>
//         <div key={item.name}>
//         { item.sub.map((item2)=>
//

//
//       )}
//       </div >
// )}

const [data1,setData1]= useState('');

useEffect ( () =>  {
  axios.post('/api/main',{})
      .then(response => {
        console.log(response);
        setData1(response.data)

      })
      .catch(error => {
         console.error('There was an error!', error);
      });

},[])
  return (

  <Router>
<Grid container spacing={2}>
  <Grid item xs={12} md={12}>
    <Box>
    <AppBar position="static">
       <Toolbar variant="dense">
         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" color="inherit" component="div">
           RoboMATH
         </Typography>
       </Toolbar>
     </AppBar>
    </Box>
  </Grid>

  <Grid item xs={2} md={1}>
    <Box></Box>
  </Grid>
  <Grid item xs={9} md={10}>

    <Box>

    <Routes>
      <Route path="/" element={<Home  />} />




    <Route  path=":slug1/:slug2"  element={    <Equations   />  } />








    </Routes>

    <Divider light />

    { data1 && data1.result.categories.map((item)=>
      <div key={item.name}>
      <ThemeProvider theme={darkTheme}>
      <Box
      sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                borderRadius: 5
              }}

      >
      <Paper>
        {item.name}
        </Paper>
        </Box>
    </ThemeProvider >
    <List component="nav" aria-label="main mailbox folders">
    { item.sub.map((item2)=>
        <Link  key={item2.name} to={"/"+item.slug +"/" + item2.slug}>
               <ListItemButton>

                 <ListItemText primary={item2.name} />
               </ListItemButton>
          </Link>
        )}
        </List>
        </div>
         )}




    </Box>
  </Grid>
  <Grid item xs={10} md={11}>
  Hello
  </Grid >

</Grid>

  </Router>



    );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Home() {
  return (
    <div>HOME</div>
  );
}
// <Box
//   component="form"
//   sx={{
//     '& > :not(style)': { m: 1 },
//   }}
//   noValidate
//   autoComplete="off"
// >
//   <FormControl variant="standard">
//     <InputLabel htmlFor="component-simple">a</InputLabel>
//     <Input type="number" id="component-simple" value={valueA}
//      onChange={(e) => setValueA(e.target.value)}
//    />
//   </FormControl>
//   <FormControl variant="standard">
//     <InputLabel htmlFor="component-helper">b</InputLabel>
//     <Input
//     type="number"
//       id="component-helper"
//       value={valueB}
//     onChange={(e) => setValueB(e.target.value)}
//       aria-describedby="component-helper-text"
//     />
//     <FormHelperText id="component-helper-text">
//       Some important helper text
//     </FormHelperText>
//   </FormControl>
//   <FormControl variant="standard">
//     <InputLabel htmlFor="component-simple">c</InputLabel>
//     <Input type="number" id="component-simple" value={valueC}
//     onChange={(e) => setValueC(e.target.value)}/>
//   </FormControl>
//
//
//
// value={newState[`${item4.input}`]}
// </Box>


// function typeOf(obj) {
//   const stringified = obj.toString();
//   const type = stringified.split(' ')[1].slice(0, -1);
//
//   return type.toLowerCase();
// }

function Equations() {

  const { slug1,slug2 } = useParams();
  const [value, setValue] = React.useState(0);

  const [newState, setNewState] = React.useState({"a":"1","b":"1","z":"1"});
  // const [valueA, setValueA] = React.useState(0);
  // const [valueB, setValueB] = React.useState(0);
  // const [valueC, setValueC] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue({newValue});
  };

   const handleChange2 = (event, newState) => {
     console.log("Before" );
     console.log(JSON.stringify(newState) );
     //console.log( typeOf newState )
     if (typeof newState !== 'undefined') {

        let state=newState


     //state.set (event.target.id,event.target.value);
     state[event.target.id]= event.target.value
     setNewState(state);
     console.log(JSON.stringify(state) );
     console.log(JSON.stringify(newState) );
   } else {
     let state =  new Map()

     console.log(JSON.stringify( event.target.id) );
     console.log(JSON.stringify( event.target.value) );
     //state.set (event.target.id,event.target.value);
     state[event.target.id]= event.target.value
     console.log(JSON.stringify(state) );


     setNewState( state);
    console.log(JSON.stringify(newState) );
   }
   };



 const [data,setData]= useState('');
  useEffect ( () =>  {
    axios.post('/api/detail',{slug1: slug1,slug2:slug2})
        .then(response => {
          console.log(response);
          setData(response.data)

        })
        .catch(error => {
           console.error('There was an error!', error);
        });

  },[])
  return (
    <div>
      {slug1}{slug2}

        { data && data.result.map((item)=>

        <div key={item.name}>



     <Typography variant="h5" color="inherit" component="div">
    {item.name}
    </Typography>
    <Box
    sx={{
              p: 2,
              bgcolor: '#eeeeff',
              display: 'grid',
              gap: 2,
              borderRadius: 5,
              width: '100%'
            }}

    >

  {item.text}



    </Box>

    <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Калькулятор" {...a11yProps(0)} />
              <Tab label="Инструкция" {...a11yProps(1)} />
              <Tab label="Теория" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
  <p>формула

  <Box

    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >

    { item.calculator.form.map((item4)=>
    <FormControl key={item4.input} variant="standard">
      <InputLabel htmlFor="component-simple">{item4.input}</InputLabel>
      <Input type="number" id={item4.input} value={newState[item4.input]}
       onChange={handleChange2}
     />


      <FormHelperText id="component-helper-text">
        Some important helper text
      </FormHelperText>
  </FormControl> )}




  </Box>
  </p>
  <p>a={newState && <p>
    {JSON.stringify(newState)}
    </p>}
  </p>
  <p>a={newState['a'] && <p>{newState['a']}</p>}</p>


          </TabPanel>
          <TabPanel value={value} index={2}>
              { item.theory.map((item2)=>

                  <div key={item2.blk_id}>
                  <Box
                  sx={{
                            p: 2,
                            m:2,
                            bgcolor: '#eeeeff',
                            display: 'grid',
                            borderRadius: 5,
                            width: '100%'
                          }}

                  >


                  { item2.container.map((item3)=>
                    <div key={item3.id}>

                    {item3.type==="center_math" &&

                  <p><InlineMath  math={item3.text}/></p>
                    }
                    {item3.type==="math" &&

                  <InlineMath  math={item3.text}/>
                    }

                    {item3.type==="block_math" &&
                  <BlockMath  math={item3.text}/>
                    }
                    {item3.type==="text" &&
                    <p>{item3.text}</p>
                    }




                  </div>
                )}
                    </Box>
                   </div>
              )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            instruction
          </TabPanel>
        </Box>
        </div>
      )}
    </div>
  );
}








export default App;
