'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';

const AboutPage = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
    { name: 'Next.js', level: 88, color: 'from-gray-400 to-gray-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'UI/UX Design', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'GraphQL', level: 70, color: 'from-pink-400 to-pink-600' },
    { name: 'AWS', level: 65, color: 'from-orange-400 to-orange-600' }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud solutions.',
      technologies: ['React', 'Next.js', 'TypeScript', 'AWS', 'GraphQL']
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      description: 'Developed and maintained multiple client projects, improving performance by 40% and implementing modern development practices.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      year: '2020 - 2021',
      title: 'Frontend Developer',
      company: 'Creative Agency Pro',
      description: 'Specialized in creating responsive, accessible web interfaces. Collaborated with designers to bring creative visions to life.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js']
    },
    {
      year: '2019 - 2020',
      title: 'Junior Developer',
      company: 'StartupFlow',
      description: 'Started my journey in web development, contributing to various projects and learning modern development frameworks.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance First',
      description: 'I believe in creating fast, efficient applications that provide excellent user experiences.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Constantly learning and implementing cutting-edge technologies to solve complex problems.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Working closely with teams to achieve common goals and create exceptional digital products.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality',
      description: 'Committed to writing clean, maintainable code and following industry best practices.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 mesh-gradient pointer-events-none" />
        <div className="fixed inset-0 grid-background opacity-20" />

        {/* Hero Section - with proper top spacing */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="text-gradient-animated">About Me</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer with over 4 years of experience creating 
                  digital solutions that make a difference. I love turning complex problems into 
                  simple, beautiful, and intuitive designs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-glow text-center"
                  >
                    Let's Work Together
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-xl font-medium transition-colors text-center"
                  >
                    Download Resume
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-gray-700/50">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl font-bold">
                      VT
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8"
            >
              My Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey into web development started during my college years when I built my first website 
                using HTML and CSS. What began as a curiosity quickly turned into a passion as I discovered 
                the power of creating digital experiences that could reach and impact people worldwide.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Over the years, I've had the privilege of working with startups, agencies, and enterprises, 
                each experience teaching me something new about the craft of development. I specialize in 
                creating full-stack applications using modern technologies like React, Next.js, and Node.js, 
                always with a focus on performance, accessibility, and user experience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge through blog posts and community discussions. I believe in 
                the power of continuous learning and the importance of giving back to the developer community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative py-20 px-4 bg-[#161B22]/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-modern p-6 rounded-xl"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16"
            >
              Professional Experience
            </motion.h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="sticky top-24">
                        <div className="text-sm text-blue-400 font-medium bg-blue-400/10 px-3 py-1 rounded-full inline-block">
                          {exp.year}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <div className="card-modern p-8 rounded-xl">
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <h4 className="text-blue-400 font-medium mb-4">{exp.company}</h4>
                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 px-4 bg-[#161B22]/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16"
            >
              What I Believe In
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-modern p-6 rounded-xl text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8"
            >
              Let's Create Something Amazing Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              I'm always excited to work on new projects and collaborate with talented individuals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-glow"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border border-gray-600 hover:border-gray-400 rounded-xl font-medium transition-colors"
              >
                View My Projects
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
