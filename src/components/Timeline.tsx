import React from 'react';

const Timeline: React.FC = () => {
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Senior Site Reliability Engineer - Platform Engineering',
      company: 'Flywire',
      description: ["I continue to work on the Victoria idP, which is designed with cloud best practices like scalability, high availability, observability, and operability. I enhance it by adding OpenTelemetry for platform insights, implementing testing approaches like canary releases, and using DORA metrics to improve performance."],
      technologies: ['Ruby', 'AWS', 'ECS', 'Terraform', 'OTEL', 'CI/CD', 'Python', 'GCP', 'Honeycomb']
    },
    {
      period: '2018 - 2022',
      title: 'Site Reliability Engineer - Platform Engineering',
      company: 'Flywire',
      description: ["In charge of creating the current Flywire idP (Victoria), implementing a CI/CD process for fast application deployment, empowering developers with a DSL for independence, and enhancing platform monitoring and observability with alerting services."],
      technologies: ['Ruby', 'AWS', 'ECS', 'Terraform', 'CI/CD', 'Python', 'GCP']
    },
    {
      period: '2017 - 2018',
      title: 'Site Reliability Engineer',
      company: 'Flywire',
      description: ['I joined the SRE team to help migrate infrastructure to code. This involved updating Chef recipes, migrating AWS resources to Terraform with RSpec, supporting SOC-II Type II certification, working on a Kubernetes migration PoC, and revising checks and alerts in Sensu and Cloudwatch.'],
      technologies: ['Chef', 'Ruby', 'AWS', 'New Relic', 'MySQL', 'MongoDB', 'Sensu']
    },
    {
      period: '2013 - 2016',
      title: 'DevOps Engineer',
      company: 'HoopTap',
      description: ["I was responsible for developing the platform backend, managing and orchestrating the infrastructure, including the deployment system, and handling on-call duties due to Hooptap's operations in multiple countries. I also built a robust system to handle significant load spikes, as the applications we developed were designed to function as Second Screen for programs like Masterchef and Big Brother."],
      technologies: ['NodeJS', 'MongoDB', 'AWS', 'MySQL']
    }
  ];

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          <div className="mb-2 text-sm text-gray-500">{exp.period}</div>
          <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
          <div className="text-gray-600 mb-2">{exp.company}</div>
          {exp.description.map((desc, index) => (
            <p key={index} className="text-gray-600 mb-4">{desc}</p>
          ))}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;