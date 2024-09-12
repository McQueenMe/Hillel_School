import React from 'react';
import { Container, Grid, Typography, Paper, List, ListItem, ListItemText, Divider, Avatar } from '@mui/material';

const skills = [
   'HTML5, CSS3, SASS',
   'JavaScript (ES6+)',
   'React, Redux, TypeScript',
   'REST API',
   'Version Control (Git, GitHub)',
   'Responsive Web Design',
   'Webpack, Babel',
];

const education = [
   'Frontend Pro - Hillel School',
   'Frontend Start - Фрилансер по жизни'
];

const experience = [
   {
      role: 'Frontend Developer',
      company: 'Creative Web Solutions',
      period: '2022 - Present',
      description: 'Developed responsive web applications using React and Redux. Collaborated with designers to create user-friendly interfaces.'
   },
   {
      role: 'Junior Frontend Developer',
      company: 'Web Innovators',
      period: '2020 - 2022',
      description: 'Built and maintained websites using HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized site performance.'
   },
];

const Home = () => {
   return (
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
         <Paper elevation={3} style={{ padding: '30px', backgroundColor: '#f0f8ff', borderRadius: '10px' }}>
            <Grid container spacing={4}>
               {/* Header with Avatar and Name */}
               <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Avatar
                     alt="Front-end Developer"
                     src="/path/to/avatar.jpg"
                     sx={{ width: 120, height: 120, margin: '0 auto' }}
                  />
                  <Typography variant="h3" gutterBottom style={{ color: '#0073e6' }}>
                     Ягодченко Никита Олексеевич
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                     Frontend developer
                  </Typography>
               </Grid>

               {/* Section: Skills */}
               <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom style={{ color: '#ff6600' }}>
                     Навыки
                  </Typography>
                  <Divider />
                  <List>
                     {skills.map((skill, index) => (
                        <ListItem key={index}>
                           <ListItemText primary={skill} style={{ color: '#333' }} />
                        </ListItem>
                     ))}
                  </List>
               </Grid>

               {/* Section: Education */}
               <Grid item xs={12} md={6}>
                  <Typography variant="h5" gutterBottom style={{ color: '#ff6600' }}>
                     Образование
                  </Typography>
                  <Divider />
                  <List>
                     {education.map((edu, index) => (
                        <ListItem key={index}>
                           <ListItemText primary={edu} style={{ color: '#333' }} />
                        </ListItem>
                     ))}
                  </List>
               </Grid>

               {/* Section: Experience */}
               <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom style={{ color: '#ff6600' }}>
                     Опыт работы
                  </Typography>
                  <Divider />
                  <List>
                     {experience.map((exp, index) => (
                        <ListItem key={index} alignItems="flex-start">
                           <ListItemText
                              primary={<span style={{ color: '#0073e6' }}>{exp.role}</span>}
                              secondary={
                                 <>
                                    <Typography component="span" variant="body2" color="textSecondary">
                                       {exp.company} - {exp.period}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: '#333' }}>
                                       {exp.description}
                                    </Typography>
                                 </>
                              }
                           />
                        </ListItem>
                     ))}
                  </List>
               </Grid>
            </Grid>
         </Paper>
      </Container>
   );
};

export default Home;
