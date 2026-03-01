import React from "react";

function About() {
  return (
    // <div className="container mx-auto my-12 space-y-4 p-4">
    //   <h1 className="text-2xl font-bold">About</h1>
    //   <p>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rem
    //     expedita adipisci a est porro debitis, cumque optio quam omnis quibusdam
    //     iusto vero voluptate eligendi sint, reprehenderit, molestiae neque.
    //     Doloremque.
    //   </p>
    //   <h2 className="font-semibold text-blue-800 mb-6 text-xl">
    //     Technical Expertise:
    //   </h2>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eius,
    //     veniam placeat quae reiciendis fuga sequi illo officiis debitis
    //     molestiae optio dolorem ex laborum culpa illum hic sed sunt eos.
    //   </p>
    //   <h2 className="font-semibold text-blue-800 mb-6 text-xl">
    //     Professional Highlights:
    //   </h2>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quas!
    //     Qui consectetur suscipit ipsum quae nemo? Neque pariatur, velit labore
    //     odio enim obcaecati quo earum id corrupti doloremque quis, laborum
    //     consequuntur sit sed nostrum ut.
    //   </p>
    //   <h2 className="font-semibold text-blue-800 mb-6 text-xl">
    //     Personal Interests and Inspiration:{" "}
    //   </h2>
    //   <p>
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
    //     fugiat eum consequuntur error voluptates reprehenderit eligendi odit ex
    //     enim dolore ab temporibus accusantium nisi ipsum voluptatem, fugit
    //     labore, eveniet laboriosam praesentium. Ipsam enim sunt illo.
    //   </p>
    // </div>

    <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        About Me
      </h1>

      <p className="text-gray-700 leading-relaxed text-lg">
        Welcome! I'm passionate about technology and innovation. Below, you'll
        find insights into my technical expertise, professional journey, and
        personal inspirations.
      </p>

      {/* Technical Expertise */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-700 border-l-4 border-indigo-500 pl-3 mb-4">
          Technical Expertise
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I have a strong foundation in software development, with expertise in
          modern web technologies, backend systems, and cloud infrastructure. My
          technical skills include React, Node.js, Python, and database
          management.
        </p>
      </div>

      {/* Professional Highlights */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-700 border-l-4 border-indigo-500 pl-3 mb-4">
          Professional Highlights
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Throughout my career, I have contributed to various projects that have
          enhanced user experience and optimized system performance. My work
          includes developing scalable applications and implementing best coding
          practices.
        </p>
      </div>

      {/* Personal Interests */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-700 border-l-4 border-indigo-500 pl-3 mb-4">
          Personal Interests & Inspiration
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Beyond technology, I am an avid reader and enjoy exploring new ideas
          in artificial intelligence and cybersecurity. I find inspiration in
          solving complex problems and continuously learning.
        </p>
      </div>
    </div>
  );
}

export default About;
