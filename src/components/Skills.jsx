import AnimatedSection from './AnimatedSection';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'Next.js', level: 80 },
                { name: 'Vue.js', level: 75 },
            ],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 88 },
                { name: 'Express', level: 85 },
                { name: 'Python', level: 78 },
                { name: 'PostgreSQL', level: 82 },
                { name: 'MongoDB', level: 87 },
            ],
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git & GitHub', level: 92 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'Figma', level: 85 },
                { name: 'REST APIs', level: 90 },
            ],
            gradient: 'from-emerald-500 to-teal-500',
        },
    ];

    return (
        <section id="skills" className="relative py-20">
            <div className="section-container">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                            Technologies and tools I use to bring ideas to life
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <AnimatedSection key={index}>
                            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 h-full group">
                                {/* Category header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Skills list */}
                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-sm text-gray-500">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        transitionDelay: `${skillIndex * 100}ms`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Additional tech badges */}
                <AnimatedSection className="mt-16">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-8 text-gray-400">Also Familiar With</h3>
                        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                            {[
                                'Redux', 'GraphQL', 'Jest', 'Webpack', 'Vite', 'Firebase',
                                'Prisma', 'Stripe', 'Socket.io', 'Material-UI', 'Framer Motion'
                            ].map((tech, index) => (
                                <div
                                    key={index}
                                    className="px-6 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-default group"
                                >
                                    <span className="font-medium group-hover:gradient-text transition-all">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Skills;
