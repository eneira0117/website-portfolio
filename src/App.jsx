import { useState } from 'react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1c2731] text-white min-h-screen font-sans px-6 py-10 max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-14">
        <h1 className="text-xl font-bold text-cyan-400">Ariene Glieza</h1>
        <nav className="space-x-8">
          {['Home', 'About', 'Activities', 'Achievement', 'Contact'].map((item) => (
            <button
              key={item}
              className="uppercase text-sm hover:text-cyan-400 transition"
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-10 items-end justify-center mb-20">
        {/* Hex shape with centered image */}
        <div className="relative w-52 h-52 md:w-64 md:h-64 flex-shrink-0">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0ec9f0"
              d="M50 3 L150 3 L193 100 L150 197 L50 197 L7 100 Z"
              filter="drop-shadow(0 0 10px #0ec9f0)"
            />
          </svg>
          <img
            src="public/yessah.png"
            alt="yessah"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[190px] h-[215px] object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold mb-3">Hi, I’m Ariene Glieza Y. Casigay</h2>
          <p className="text-cyan-400 mb-6 text-lg">And I’m a Photographer | Web Designer</p>
          <button className="bg-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition">
            Download CV
          </button>
        </div>
      </section>

      {/* About Me */}
      <section className="mb-20 bg-[#0f1924] p-8 rounded-lg max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h3>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {`I am a passionate web developer and photographer with a creative eye and a strong dedication to crafting meaningful digital experiences. I specialize in building responsive, user-friendly applications and capturing visually compelling images that tell a story.

My journey started with a curiosity for technology and a love for visual art, which eventually led me to explore both code and camera. From clean, modern website layouts to stunning landscape shots, I bring an artistic approach to everything I do.

I enjoy solving problems, learning new tools, and collaborating with others to bring ideas to life. Whether it's developing a portfolio, documenting an event, or designing an app, I aim to blend functionality with beauty in every project.

Let's build something amazing together.`}
        </p>
      </section>

      <section className="mb-20 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-10 text-cyan-400 text-center">Activities</h3>
        <div className="grid md:grid-cols-3 gap-10">
         {[
        {
          title: 'calculator',
          desc: 'Creating responsive, clean UI designs.',
          link: 'calculator/index.html'

        }
        ].map(({ title, desc, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0f1924] p-8 rounded-lg border border-cyan-400/20 shadow-md hover:shadow-cyan-400/50 transition block"
        >
          <h4 className="font-semibold text-xl mb-2">{title}</h4>
          <p className="text-gray-300">{desc}</p>
        </a>
      ))}
      </div>
    </section>


      <section className="mb-20 max-w-5xl mx-auto">
  <h3 className="text-3xl font-bold mb-10 text-cyan-400 text-center">Achievement</h3>
  <div className="grid md:grid-cols-3 gap-8">
    {[1].map((num) => (
      <div
        key={num}
        className="bg-[#0f1924] rounded-lg p-6 border border-cyan-400/30 shadow-lg hover:shadow-cyan-400/50 transition"
      >
        {/* Image inside the card */}
        <img
          src={`award1.png`} // Place this image inside your /public folder
          alt={`Project ${num}`}
          className="w-full h-40 object-cover rounded-md mb-4"
        />

        <h4 className="font-semibold text-lg mb-1">Project {num}</h4>
        <p className="text-gray-300 text-sm">A sample project description.</p>
      </div>
    ))}
  </div>
</section>


      {/* Contact */}
      <section className="max-w-xl mx-auto bg-[#0f1924] rounded-lg p-8">
        <h3 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Contact Me</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded px-4 py-3 bg-[#15202b] border border-cyan-400 placeholder-cyan-400 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded px-4 py-3 bg-[#15202b] border border-cyan-400 placeholder-cyan-400 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full rounded px-4 py-3 bg-[#15202b] border border-cyan-400 placeholder-cyan-400 text-white resize-none"
            required
          />
          {submitted && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          <button
            type="submit"
            className="w-full bg-cyan-400 py-3 rounded font-semibold hover:bg-cyan-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}