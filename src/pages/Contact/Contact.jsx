import React, { useState } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus('Please fill in all required fields correctly.');
            return;
        }

        setIsLoading(true);
        setStatus(null);

        const form = new FormData();
        form.append('access_key', '5b7f2160-7543-4c39-8372-b6995e7ee62b');
        form.append('to', 'bharathyadav650@gmail.com');
        form.append('from_name', formData.name);
        form.append('from_email', formData.email);
        form.append('replyto', formData.email);
        form.append('subject', formData.subject || 'New Contact Form Submission');
        form.append('message', formData.message)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: form,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus(result.message || 'There was an error sending your message. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again later.');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
            <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Have a question or want to work together? Drop a message!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-400">bharathyadav650@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-pink-500/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className="text-gray-400">Tenali</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.name ? 'border-red-500' : 'border-gray-700'
                                            } focus:border-blue-500 focus:outline-none transition-colors`}
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.email ? 'border-red-500' : 'border-gray-700'
                                            } focus:border-blue-500 focus:outline-none transition-colors`}
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            placeholder="Subject"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.subject ? 'border-red-500' : 'border-gray-700'
                                            } focus:border-blue-500 focus:outline-none transition-colors`}
                                            value={formData.subject}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                        {errors.subject && (
                                            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                        )}
                                    </div>

                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            rows="4"
                                            className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                                                errors.message ? 'border-red-500' : 'border-gray-700'
                                            } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        ></textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>

                            {status && (
                                <div
                                    className={`mt-4 p-3 text-center rounded-lg ${
                                        status.includes('success')
                                            ? 'bg-green-500/10 text-green-400'
                                            : 'bg-red-500/10 text-red-400'
                                    }`}
                                >
                                    <p>{status}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
