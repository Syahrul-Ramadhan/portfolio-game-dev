function Contact() {
  return (
    <section className="px-8 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Let's Connect 🚀
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-8">
        
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/syahrul-ramadhan-b06094279/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-100 transition hover:scale-110"
        >
          <svg
            viewBox="0 0 382 382"
            className="w-6 h-6 md:w-8 md:h-8 fill-current"
          >
            <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654z" />
          </svg>
        </a>

        {/* Instagram (disederhanakan biar bisa warna) */}
        <a
          href="https://www.instagram.com/sramadhannn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-100 transition hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-8 md:h-8 fill-current"
          >
            <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Syahrul-Ramadhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-100 transition hover:scale-110"
        >
          <svg
            viewBox="0 0 20 20"
            className="w-6 h-6 md:w-8 md:h-8 fill-current"
          >
            <path d="M10 0C4.477 0 0 4.59 0 10.253c0 4.529 2.862 8.371 6.833 9.728.507.101.687-.219.687-.492 0-.338-.012-1.442-.012-2.814-2.227.254-4.567-.613-4.567-4.551 0-1.12.388-2.034 1.03-2.752-.104-.259-.447-1.302.098-2.714 0 0 .838-.275 2.747 1.051.799-.227 1.655-.341 2.505-.345.85.004 1.706.118 2.505.345 1.909-1.326 2.747-1.051 2.747-1.051.545 1.412.202 2.455.098 2.714.642.718 1.03 1.632 1.03 2.752 0 3.938-2.34 4.797-4.567 4.551.359.318.679.942.679 1.898 0 1.372-.012 2.476-.012 2.814 0 .273.18.593.687.492C17.138 18.624 20 14.782 20 10.253 20 4.59 15.523 0 10 0z" />
          </svg>
        </a>
      </div>

      <p className="text-zinc-400">
        Thank you for taking the time to view my portfolio.
      </p>
    </section>
  );
}

export default Contact;