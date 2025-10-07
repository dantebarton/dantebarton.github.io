
import news_scanner from "@/assets/images/news_scanner_app_icon_crop.jpg";
import movie_trailer from "@/assets/images/movie_trailer_app_icon_crop.jpg";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "News Alert Scanner App",
      image: news_scanner,
      description: "A Python application that scans news articles for user-defined keywords and sends discord alerts for relevant articles.",
      tags: ["Python"],
      github: "https://github.com/dantebarton/news-alert-scanner",
      live: "#"
    },
    {
      title: "Interactive Movie Trailer App",
      description: "A cross-platform mobile application built with Dart and Flutter, providing users with an engaging way to browse and watch movie trailers. (Currently in development)",
      image: movie_trailer,
      tags: ["C++", "Dart", "Flutter"],
      github: "https://github.com/dantebarton/flutter-movie-app",
      live: "#"
    },
    // { TODO: Add more projects as needed
    //   title: "Task Management System",
    //   description: "A comprehensive task management application with real-time updates, collaboration features, and automated reminders.",
    //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    //   tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    //   github: "#",
    //   live: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy-dark mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#4D96DA] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different challenges and learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-navy-light text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 border-navy text-navy hover:bg-navy hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  {/* TODO: Add live demo link when available
                  <Button  
                    size="sm" 
                    className="flex items-center gap-1 bg-[#4D96DA] hover:bg-[#3778B8] text-white"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
