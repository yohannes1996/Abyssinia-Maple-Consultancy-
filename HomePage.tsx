
import React from 'react';
import Layout from './Layout';

export default function HomePage() {
  return (
    <Layout>
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-green-700">Welcome / እንኳን በደህና መጡ</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We support Ethiopians in pursuing education, work, and a better life in Canada.
          <br />
          እኛ የኢትዮጵያውያንን በካናዳ ማስተማር፣ ሥራ ማግኘትና የምቹ ሕይወት መኖር ላይ እንመራችዋለን።
        </p>
      </section>
    </Layout>
  );
}
