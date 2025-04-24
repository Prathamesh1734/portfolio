export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">
              AI Web Application (Deepseek Clone) 🐋
            </h3>
            <p className="text-gray-400 mb-4">
              AI web application using Deepseek API
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "MongoDB", "Clerk", "OpenAI"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://ai-webapp-chi.vercel.app/"
                className="text-blue-400 hover:text-blue-200 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Chat App 💬</h3>
            <p className="text-gray-400 mb-4">
              Realtime chat app where user can login and chat with other people
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "Express.js", "WebSockets"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Prathamesh1734/mern-chat-app"
                className="text-blue-400 hover:text-blue-200 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Banking App 🏦</h3>
            <p className="text-gray-400 mb-4">
              A simple banking app (paytm like) where user can signup/signin &
              send money to other users
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "Express.js", "TailwindCSS"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Prathamesh1734/paytm-like-app"
                className="text-blue-400 hover:text-blue-200 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Chatbot 🤖</h3>
            <p className="text-gray-400 mb-4">
              A chatbot made with Google Gemini API
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Axios", "TailwindCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Prathamesh1734/chatbot"
                className="text-blue-400 hover:text-blue-200 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
