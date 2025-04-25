import { RevealOnScroll } from "./RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Gmail</h3>
                <div className="space-y-4 text-gray-300 ">
                  <div>
                    <h4 className="font-semibold bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      prathameshppakhare@gmail.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
                <div className="space-y-4 text-gray-300 ">
                  <div>
                    <h4 className="font-semibold bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      https://www.linkedin.com/in/prathamesh-pakhare/
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
