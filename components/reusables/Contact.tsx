"use client"

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    PaperPlaneIcon,
    IdCardIcon,
    MobileIcon,
    EnvelopeClosedIcon,
    TwitterLogoIcon,
    LinkedInLogoIcon,
    InstagramLogoIcon,
} from '@radix-ui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BackgroundParticles from './BackgroundParticles';

export default function Contact() {

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            <BackgroundParticles id="contact" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2
                    data-aos="fade-up"
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                    Get in Touch
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Card
                            className={`bg-white shadow-xl transition-all duration-300 `}
                            data-aos="fade-right"
                        >
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <div className="p-2 bg-indigo-100 rounded-full">
                                        <EnvelopeClosedIcon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-slate-800">
                                        Contact Form
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Your Name
                                        </label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Your Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Your Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="How can we help you?"
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                                    >
                                        <PaperPlaneIcon className="mr-2 h-4 w-4" /> Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div
                            className="lg:flex lg:flex-col lg:justify-between space-y-8"
                            data-aos="fade-left"
                        >
                            <Card className="bg-white shadow-xl">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-purple-100 rounded-full">
                                            <IdCardIcon className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-800">
                                            Contact Details
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="flex items-center text-slate-600">
                                        <MobileIcon className="mr-2 h-5 w-5 text-purple-500" />
                                        <span className="font-medium">Phone:</span>
                                        <a
                                            href="tel:+447831640003"
                                            className="ml-2 text-purple-600 hover:text-purple-600 hover:underline transition-colors"
                                        >
                                            +44 (0) 7831 640003
                                        </a>
                                    </p>
                                    <p className="flex items-center text-slate-600">
                                        <EnvelopeClosedIcon className="mr-2 h-5 w-5 text-purple-500" />
                                        <span className="font-medium">Email:</span>
                                        <a
                                            href="mailto:jack@vanderpump.tech"
                                            className="ml-2 text-purple-600 hover:text-purple-600 hover:underline transition-colors"
                                        >
                                            jack@vanderpump.tech
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                                    <p className="mb-6">
                                        Follow us on social media for the latest updates and insights.
                                    </p>
                                    <div className="flex space-x-4">
                                        {[
                                            {
                                                Icon: TwitterLogoIcon,
                                                href: 'https://twitter.com/yourprofile',
                                            },
                                            {
                                                Icon: LinkedInLogoIcon,
                                                href: 'https://linkedin.com/in/yourprofile',
                                            },
                                            {
                                                Icon: InstagramLogoIcon,
                                                href: 'https://instagram.com/yourprofile',
                                            },
                                        ].map(({ Icon, href }, index) => (
                                            <a
                                                key={index}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                                            >
                                                <Icon className="w-6 h-6" />
                                            </a>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}