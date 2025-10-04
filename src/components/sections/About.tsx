import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'SQL',
    'ReactJS',
    'Redux',
    'Spring Boot',
    'Node.js',
    'AWS',
    'MongoDB',
    'MySQL',
    'Git',
    'Tailwind CSS',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            About Me
          </motion.h2>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="ml-auto max-w-xs h-w-xs object-cover rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full f-full object-cover"
                  src="/images/Profile Photo.jpg"
                  alt="Profile"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 lg:mt-0"
            >
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                Motivated and detail-oriented Computer Science undergraduate at Sri Krishna College of Engineering and Technology, Coimbatore. 
                I have hands-on experience in full-stack web development, cloud infrastructure, and modern software engineering practices. 
                With a strong foundation in Java, Spring Boot, ReactJS, and AWS, I've built several scalable applications through 
                Agile-driven academic and personal projects. Currently maintaining a CGPA of 7.90 and actively seeking Software Engineering roles for 2025.
              </p>

              <div className="mt-6">
                <a
                  href="/documents/DURGAPRASAD_R_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mt-10"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 