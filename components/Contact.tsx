'use client';

  import { motion } from 'framer-motion';
  import { useInView } from 'react-intersection-observer';
  import { useState, memo } from 'react';
  import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
  import { Button } from './ui/button';
  import { Card, CardContent } from './ui/card';

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abdulrahmankhan35@outlook.com',
      link: 'mailto:abdulrahmankhan35@outlook.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 3349883051',
      link: 'tel:+923349883051',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karachi, Pakistan',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/abdullrkk',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abdullrkk',
      color: 'hover:text-blue-400',
    },
  ];

  function Contact() {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('sending');

      // Simulate form submission
      setTimeout(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setStatus('idle'), 3000);
      }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <section id="contact" className="section-padding relative">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Have a project in mind? Let's work together to create something amazing!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                              <item.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                              {item.link ? (
                                <a
                                  href={item.link}
                                  className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <p className="text-gray-400">{item.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 transition-all ${social.color}`}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Project Inquiry"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          'Sending...'
                        ) : status === 'sent' ? (
                          '✓ Message Sent!'
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>

                      {status === 'sent' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-400 text-sm text-center"
                        >
                          Thank you! I'll get back to you soon.
                        </motion.p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  export default memo(Contact);