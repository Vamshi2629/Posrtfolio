import AnimatedSection from './AnimatedSection';
import { Code, Sparkles, Zap, Target } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Code, value: '3+', label: 'Projects Completed' },
        { icon: Sparkles, value: '1+', label: 'Years Experience' },
        { icon: Zap, value: '100%', label: 'Client Satisfaction' },
        { icon: Target, value: '24/7', label: 'Availability' },
    ];

    return (
        <section id="about" className="relative py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

            <div className="section-container">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left side - Image/Avatar */}
                    <AnimatedSection className="order-2 md:order-1">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                            <div className="relative glass-effect rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                                <div className="text-center">
                                    <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1">
                                        <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                                            <span className="text-6xl">👨‍💻</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xl font-semibold gradient-text">Passionate Developer</p>
                                        <p className="text-gray-400">Building the future, one line at a time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right side - Description */}
                    <AnimatedSection className="order-1 md:order-2 space-y-6">
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with
                                a love for creating beautiful, functional, and user-friendly web applications.
                            </p>
                            <p>
                                With expertise in modern web technologies, I transform ideas into reality through
                                clean code and innovative solutions. I believe in continuous learning and staying
                                updated with the latest industry trends.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {['React', 'Node.js', 'Express.js', 'JavaScript', 'Tailwind CSS', 'Mysql', 'postgres'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 glass-effect rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                {/* Stats Section */}
                <AnimatedSection className="mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 glow-card"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default About;
