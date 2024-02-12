const Contact = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col md:flex-row space-x-4 items-center">
        <div className="flex flex-col w-full p-6 space-y-4">
          <p className="text-3xl">Contact Us</p>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="p-2 rounded-lg border-2 border-secondary"
          />
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className="p-2 rounded-lg border-2 border-secondary"
          />
          <label htmlFor="message">Your Message :</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="message"
            className="p-2 rounded-lg border-2 border-secondary"
          ></textarea>
          <button className="p-2 bg-tertiary text-white rounded-lg">
            Send
          </button>
        </div>
        <div className="p-6">
          <img
            src="./assests/image3.webp"
            alt="contact"
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
