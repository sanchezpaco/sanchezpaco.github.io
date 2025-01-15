import { Github, Linkedin, Mail, Code2, Terminal, Waves, PawPrint, PianoIcon, ScanSearch, ContactIcon} from 'lucide-react';
import Timeline from './components/Timeline';
import SkillTag from './components/SkillTag';
import Piano from './components/Piano';
import { BorderPulse } from './components/BorderPulse';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-end h-16 items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#hobbies" className="text-gray-600 hover:text-blue-600">Hobbies</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hello world, I'm Paco Sanchez!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            SRE specializing in Developer Productivity, with a passion for continuous learning and improving workflows. Feel free to contact me!
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/pacosanchezlopez/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/sanchezpaco" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:sanchezpaco3@gmail.com" className="text-gray-600 hover:text-blue-600">
              <Mail className="h-6 w-6" />
            </a>
            <a href="CV.pdf" title="CV" className="text-gray-600 hover:text-blue-600">
              <ContactIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <img
              src="https://avatars.githubusercontent.com/u/25083338?s=400&u=97461cbe747c5e2c24064f0dc366043ae2bfe434&v=4"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 text-justify">
                I’m an SRE focused on Developer Productivity and Platform Engineering, with over 8 years of experience building tools that help developers work smarter. I pride myself on being highly pragmatic, always prioritizing solutions that balance efficiency and impact. 
              </p>
              <p className="text-gray-600 text-justify">
                I love learning new things, whether it’s tech or something totally random. I even did a challenge where I created a game a week for 15 weeks straight. 
              </p>
              <p className="text-gray-600 text-justify">
                Outside of work, I’m usually swimming— it’s my favorite way to clear my mind and recharge.
              </p>
              <p className="text-gray-600 text-justify">
                Oh, and fun fact: my right thumb is actually my toe. Yes, it’s as weird as it sounds, but I like to think I can give "Super Likes".
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Experience</h2>
          <Timeline />
        </div>
      </section>

      <section id="skills" className="py-20 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Skills</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Code2 className="mr-2" /> Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="Ruby"/>
                <SkillTag name="Python"/>
                <SkillTag name="Docker"/>
                <SkillTag name="AWS"/>
                <SkillTag name="ECS"/>
                <SkillTag name="GCP"/>
                <SkillTag name="Terraform"/>
                <SkillTag name="CI/CD"/>
                <SkillTag name="Observability"/>
                <SkillTag name="OTEL"/>
                <SkillTag name="Testing"/>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Terminal className="mr-2" /> Also worked with 
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="Golang"/>
                <SkillTag name="Javascript"/>
                <SkillTag name="C#"/>
                <SkillTag name="K8S"/>
                <SkillTag name="MongoDB"/>
                <SkillTag name="MySQL"/>
                <SkillTag name="Chef"/>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <ScanSearch className="mr-2" /> Now focused in 
              </h3>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="Development experience"/>
                <SkillTag name="CI/CD"/>
                <SkillTag name="Observability"/>
                <SkillTag name="Platform Engineering"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-20 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Waves className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Swimming</h3>
              <p className="text-gray-600">My number one way to clear my mind</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PianoIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Piano</h3>
              <p className="text-gray-600">Just in case I don't press enough keys during the day. Psst, press 11 55 66 5 in your keyboard</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PawPrint className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Animals!</h3>
              <p className="text-gray-600">Spending time with my 4 paws friends is a must in my life! :)</p>
            </div>
          </div>
        </div>
      </section>

      <Piano />
      <BorderPulse />

      <section id="contact" className="py-20 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/pacosanchezlopez/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/sanchezpaco" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:sanchezpaco3@gmail.com" className="text-gray-600 hover:text-blue-600">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;