import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Pinnacle Infotech',
      company: 'Software Developer Intern',
      period: 'May 2025 - Jun 2025',
      location: 'Remote',
      description: [
        'Developed and maintained microservices using Spring Boot and Docker, improving system scalability by 40%',
        'Implemented RESTful APIs and integrated third-party services, handling 100K+ daily requests',
        'Collaborated with senior developers on code reviews and architectural decisions',
        'Technologies: Java, Spring Boot, Docker, AWS, Git',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'StartUp Solutions',
      period: 'Jan 2023 - Apr 2023',
      location: 'Hybrid',
      description: [
        'Built responsive web applications using React and Node.js, serving 10K+ users',
        'Optimized database queries and implemented caching, reducing load times by 60%',
        'Participated in daily stand-ups and sprint planning meetings',
        'Technologies: React, Node.js, MongoDB, Redis, AWS',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Digital Innovations',
      period: 'Jun 2022 - Aug 2022',
      location: 'Remote',
      description: [
        'Developed and maintained company website using modern web technologies',
        'Implemented responsive designs and improved mobile user experience',
        'Worked with UI/UX team to implement design improvements',
        'Technologies: HTML5, CSS3, JavaScript, React',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto"
          >
            My journey through various roles and companies
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
            aria-hidden="true"
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.period}
              variants={itemVariants}
              className={`relative ${index !== 0 ? 'mt-12' : ''}`}
            >
              <div className="flex items-center md:justify-between">
                <div className="flex md:w-1/2 md:justify-end md:pr-8">
                  <div className="w-full md:max-w-md">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {experience.period} • {experience.location}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-600 dark:text-gray-300 text-sm"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 