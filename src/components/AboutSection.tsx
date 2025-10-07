
import { Code, Tablet, Book, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-10 h-10 text-[#4D96DA]" />,
      title: "Front-End Development",
      description: "Expertise in building responsive and user-friendly interfaces using modern frameworks and libraries."
    },
    {
      icon: <Tablet className="w-10 h-10 text-[#4D96DA]" />,
      title: "Mobile Development",
      description: "Experience developing applications for Android and iOS platforms with a focus on performance and user experience."
    },
    {
      icon: <Book className="w-10 h-10 text-[#4D96DA]" />,
      title: "Continuous Learning",
      description: "Committed to staying updated with the latest technologies and industry best practices."
    },
    {
      icon: <Users className="w-10 h-10 text-[#4D96DA]" />,
      title: "Team Collaboration",
      description: "Strong communicator who thrives in collaborative environments and values diverse perspectives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#4D96DA] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate Software Engineer specializing in front-end and mobile development. 
            With experience across various platforms including Android, iOS, and web, I enjoy creating 
            intuitive and engaging user experiences. My approach combines technical expertise with a 
            strong focus on user needs and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-navy-dark mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
