import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMedal, FaTrophy } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    university: {
      name: 'Sri Krishna College of Engineering and Technology',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      period: '2022 - 2026',
      location: 'Coimbatore, Tamil Nadu',
      gpa: '7.90/10.0',
      achievements: [
        'Finalist – Ideathon (XPLORE 2022), sponsored by AICTE SPICES',
       
      ],
      relevantCourses: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management',
        'Computer Networks',
        'Web Development',
        'Cloud Computing',
        'Machine Learning',
        'Software Engineering',
      ],
    },
    certifications: [
      {
        name: 'AWS Academy Graduate',
        issuer: 'Amazon Web Services Training and Certification',
        date: 'Jun 2024',
      },
      {
        name: 'Academic Process Mining Fundamental ',
        issuer: 'Celonis',
        date: 'Jun 2023',
      },
      {
        name: 'IT Academy: Cloud and Virtualization Concepts',
        issuer: 'Broadcom',
        date: 'Apr 2023',
      },
      {
        name: 'Google Cloud Computing Foundations Certificate',
        issuer: 'Google Cloud',
        date: 'Apr 2024',
      },
      {
        name: 'Introduction to Cybersecurity',
        issuer: 'CISCO',
        date: 'Apr 2025',
      },
    ],
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-gray-900"
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
            Education & Certifications
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* University Education */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                University Education
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {education.university.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400">
                  {education.university.degree}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {education.university.period} • {education.university.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  CGPA: {education.university.gpa}
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Achievements
                </h5>
                <ul className="space-y-2">
                  {education.university.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <FaTrophy className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.university.relevantCourses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FaMedal className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {education.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="border-l-4 border-blue-600 dark:border-blue-400 pl-4"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 