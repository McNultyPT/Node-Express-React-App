import React from 'react';

import Project from './Project';

const Projects = props => {
    return (
        <div>
            <h1>Projects</h1>
           {props.projects.map(project => {
               return (
                   <Project
                       name={project.name}
                       description={project.description}
                       key={project.id} 
                   />
               );
           })} 
        </div>
    );
}

export default Projects;