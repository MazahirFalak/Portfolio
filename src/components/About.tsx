import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-xl text-gray-600">Passionate about creating exceptional web experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">Writing maintainable and scalable code following best practices</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-600">Creating beautiful and responsive user interfaces</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-600">Optimizing applications for the best user experience</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-600 leading-relaxed">
            With a passion for web development and years of experience in creating modern web applications,
            I specialize in building responsive and user-friendly interfaces using React, TypeScript, and
            modern CSS frameworks. I'm constantly learning and adapting to new technologies to deliver
            the best possible solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;