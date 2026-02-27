import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Josh Herr" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Josh Herr
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Josh proudly considers Alaska home. The son of a retired Air Force Major, Josh grew up in multiple locations before settling in the Last Frontier, where he built both his career and his family life. He spends his summers camping and fishing under the midnight sun and his winters planning his next warm-weather getaway, always balancing adventure with dedication to his community.
              </p>
              <p>
                Josh began his financial services career at just 20 years old as a teller at a local credit union. What started as an entry-level role quickly became a long-term pursuit of excellence. Through disciplined study, hands-on experience, and a deep commitment to serving others, Josh advanced into the role of Senior Loan Officer in the Indirect Lending Center. Over more than a decade, he helped countless individuals and families navigate important financial decisions with clarity and confidence.
              </p>
              <p>
                In 2020, Josh expanded his expertise into residential mortgage lending, joining First Rate Financial as a licensed Mortgage Loan Originator. His strong background in underwriting, debt management strategy, and client service gives him a comprehensive understanding of the full lending picture. He approaches each mortgage not just as a loan, but as a financial structure that should support long-term stability and growth.
              </p>
              <p>
                Clients value Josh for his transparency, work ethic, and practical guidance. He understands that buying or refinancing a home is one of the most significant financial decisions a person can make, and he takes pride in simplifying the process while providing thoughtful, informed advice at every stage. Whether you are purchasing your first home, upgrading, or refinancing to strengthen your financial position, Josh is committed to delivering steady guidance and a seamless lending experience from start to finish.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in AK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
