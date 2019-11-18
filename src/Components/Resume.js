import React, { Component } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


class Resume extends Component {
    
  render() {

    // const classes = {
    //   card: {
    //     minWidth: 275,
    //   },
    //   bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    //   },
    //   title: {
    //     fontSize: 14,
    //   },
    //   pos: {
    //     marginBottom: 12,
    //   }
    // }
    // const bull = <span className={classes.bullet}>•</span>;
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company} className="cards"><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
            <p>{skillmessage}</p>
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>

  //   <Card className={classes.card}>
  //   <CardContent>
  //     <Typography className={classes.title} color="textSecondary" gutterBottom>
  //       Word of the Day
  //     </Typography>
  //     <Typography variant="h5" component="h2">
  //       be
  //       {bull}
  //       nev
  //       {bull}o{bull}
  //       lent
  //     </Typography>
  //     <Typography className={classes.pos} color="textSecondary">
  //       adjective
  //     </Typography>
  //     <Typography variant="body2" component="p">
  //       well meaning and kindly.
  //       <br />
  //       {'"a benevolent smile"'}
  //     </Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button size="small">Learn More</Button>
  //   </CardActions>
  // </Card>

    );
  }
}

export default Resume;
