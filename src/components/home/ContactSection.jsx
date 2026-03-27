import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const ContactSection = ({
  formRef,
  formData,
  handleChange,
  handleSubmit,
  submitting,
}) => (
  <section id="contact" className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
    <ScrollReveal>
      <SectionHeader eyebrow="Contact" title="Write me a letter" />
    </ScrollReveal>

    <ScrollReveal>
      <div className="rounded-[34px] border border-[var(--line)] bg-[rgba(255,251,246,0.9)] p-6 shadow-[0_24px_60px_rgba(88,58,34,0.1)] md:p-10">
        <div className="rounded-[28px] border border-[rgba(201,168,118,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(250,246,239,0.92))] p-7">
          <p className="text-lg leading-8 text-[var(--muted)]">Dear Christy,</p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
            <input
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full border-0 border-b border-[var(--line-strong)] bg-transparent py-3 outline-none placeholder:text-[var(--muted)]"
            />
            <input
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full border-0 border-b border-[var(--line-strong)] bg-transparent py-3 outline-none placeholder:text-[var(--muted)]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              placeholder="Message"
              className="w-full resize-none border-0 border-b border-[var(--line-strong)] bg-transparent py-3 outline-none placeholder:text-[var(--muted)]"
            />
            <p className="pt-2 text-lg leading-8 text-[var(--muted)]">Best regards,</p>
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-white shadow-[0_16px_36px_rgba(255,122,89,0.24)] transition duration-200 hover:-translate-y-px hover:bg-[#ff6c47] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? 'Sending...' : 'Send letter'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default ContactSection;
