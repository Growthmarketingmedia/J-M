import React from 'react';
import Container from '../ui/Container';

const MapSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <p className="text-secondary font-semibold mb-2 uppercase tracking-wide text-sm">— VISIT US —</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Find Us in <span className="text-primary">Colorado Springs</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Conveniently located to serve Colorado Springs and surrounding areas
                    </p>
                </div>

                {/* Map */}
                <div className="w-full rounded-2xl overflow-hidden shadow-xl mb-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12163512.191596076!2d-99.70162899955237!3d37.55733162983902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41bb4bcc7511cef%3A0xd289196b14da263d!2sQuick%20Response%20Restoration!5e1!3m2!1sen!2sus!4v1765812340788!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Quick Response Restoration Location"
                    />
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Address */}
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Address</h3>
                        <p className="text-gray-900 font-medium">Colorado Springs, CO</p>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Phone</h3>
                        <a href="tel:+19152683375" className="text-gray-900 font-medium hover:text-secondary transition-colors">
                            (915) 268-3375
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Call for Free Inspection</p>
                    </div>

                    {/* Hours */}
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Hours</h3>
                        <p className="text-gray-900 font-medium">24/7 Emergency Service</p>
                        <p className="text-sm text-gray-500 mt-1">Always available</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MapSection;
