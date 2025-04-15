
import React from 'react';
import Layout from './Layout';

export default function ServicesPage() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">Our Services / አገልግሎቶቻችን</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Student Visa Application / የተማሪ ቪዛ ማመልከቻ</li>
          <li>University and College Admissions / ወደ ዩኒቨርሲቲ እና ኮሌጅ መግቢያ</li>
          <li>Immigration Consulting / የኢምሬጌሽን ምክር</li>
          <li>Document Review & Translation / ሰነድ እይታና ትርጉም</li>
          <li>Visa Interview Prep / ለቪዛ ቃለ መጠይቅ አዘጋጅት</li>
        </ul>
      </section>
    </Layout>
  );
}
