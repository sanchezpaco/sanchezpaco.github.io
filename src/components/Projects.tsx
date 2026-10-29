import React from 'react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <a key={project.slug} href={`/${project.slug}`} className="group flex gap-4 items-start">
          <img src={project.icon} alt="" className="w-12 h-12 rounded-xl flex-none" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {project.name} <span className="text-sm font-normal text-gray-500">· {project.platform}</span>
            </h3>
            <p className="text-gray-600">{project.summary}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
