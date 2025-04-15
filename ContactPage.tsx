
import React from 'react';
import Layout from './Layout';

export default function ContactPage() {
  return (
    <Layout>
      <section className="max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">Contact Us / አግኙን</h2>
        <ul className="space-y-1">
          <li><strong>Email:</strong> info@abyssiniamaple.com</li>
          <li><strong>Phone:</strong> +251 912 345 678</li>
          <li><strong>Location:</strong> Debre Markos, Ethiopia</li>
        </ul>
        <p>ለትዕዛዞች፣ ጥያቄዎች ወይም ምክር እባኮትን ያግኙን።</p>
      </section>
    </Layout>
  );
}
