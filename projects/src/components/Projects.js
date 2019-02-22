import React from 'react';

const Projects = props => {
    return (
        <div>
           {props.projects.map(project => {
               return (
                   <Project
                       name={project.name}
                       description={project.description} 
                   />
               );
           })} 
        </div>
    );
}

export default Projects;