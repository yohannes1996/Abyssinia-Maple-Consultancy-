
import React from 'react';
import Layout from './Layout';

export default function AboutPage() {
  return (
    <Layout>
      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-700">About Us / ስለእኛ</h2>
        <p>
          Abyssinia Maple Consultancy connects Ethiopian talent with Canadian opportunities.
          <br />
          አቢሲኒያ ማፕል ኮንሰልታንሲ የኢትዮጵያ ችሎታን ከካናዳ እድሎች ጋር የሚያገናኝ ነው።
        </p>
        <p>
          We offer personalized services for migration, education, and consultation.
          <br />
          ለንግድ፣ ለትምህርት እና ለምክር የተሟላ የግል አገልግሎት እንሰጣለን።
        </p>
      </section>
    </Layout>
  );
}
