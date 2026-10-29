import React from 'react';
import { Project } from '../data/projects';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <a href="/#projects" className="text-sm text-gray-500 hover:text-blue-600">← All projects</a>

        <div className="flex items-center gap-4 mt-8 mb-6">
          <img src={project.icon} alt="" className="w-16 h-16 rounded-2xl" />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{project.name}</h1>
            <div className="text-gray-500">{project.platform}</div>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-8">{project.summary}</p>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={index === 0
                ? 'px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-blue-600 transition-colors'
                : 'px-4 py-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors'}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-12 -mx-4 px-4">
          {project.screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.name} screenshot ${index + 1}`}
              loading="lazy"
              className="w-48 rounded-xl border border-gray-100 flex-none"
            />
          ))}
        </div>

        <div className="space-y-4 mb-12">
          {project.description.map((paragraph, index) => (
            <p key={index} className="text-gray-600 text-justify">{paragraph}</p>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-12">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
