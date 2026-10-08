import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.62 1.62 0 0 0-1.62 1.62 1.62 1.62 0 1 0 3.24 0 1.62 1.62 0 0 0-1.62-1.62Z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E3A32B', '#C8483C', '#4E9C8A']
    });
  };

  const contactMethods = [
    {
      key: 'email',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      canCopy: true
    },
    {
      key: 'phone',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      canCopy: true
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sowjanyachandran',
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
      canCopy: false
    },
    {
      key: 'github',
      label: 'GitHub',
      value: 'github.com/rcsowjichandran-pixel',
      href: personalInfo.github,
      icon: GithubIcon,
      canCopy: false
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#c8483c] tracking-widest uppercase mb-2">
            <span>/ 06 get in touch</span>
          </div>
          <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f1eada] tracking-tight">
            Let's talk
          </h2>
          <p className="text-sm sm:text-base text-[#96a0c0] mt-2 max-w-xl">
            Hiring, project inquiries, or discussing fullstack & AI development—email or phone is quickest.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {contactMethods.map((m) => {
              const Icon = m.icon;
              const isCopied = copiedKey === m.key;

              return (
                <div
                  key={m.key}
                  className="p-4 rounded-xl bg-[#182240] border border-[#2c3a64] hover:border-[#e3a32b]/60 transition-all group flex items-center justify-between"
                >
                  <a
                    href={m.href}
                    target={m.key.includes('linked') || m.key.includes('git') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 min-w-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#131c33] border border-[#2c3a64] flex items-center justify-center text-[#e3a32b] group-hover:scale-105 transition-transform flex-none">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-[#96a0c0] uppercase">{m.label}</div>
                      <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-sm text-[#f1eada] group-hover:text-[#e3a32b] transition-colors truncate">
                        {m.value}
                      </div>
                    </div>
                  </a>

                  {m.canCopy && (
                    <button
                      onClick={() => handleCopy(m.value, m.key)}
                      className="p-2 rounded-md hover:bg-[#131c33] text-[#96a0c0] hover:text-[#f1eada] transition-colors ml-2 cursor-pointer"
                      title={`Copy ${m.label}`}
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Message Dispatcher Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-[#2c3a64]">
            <h3 className="font-['Bricolage_Grotesque',sans-serif] text-xl font-bold text-[#f1eada] mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#e3a32b]" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#96a0c0] mb-6">
              Drop a note below and I will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-3 text-center">
                <Sparkles className="w-8 h-8 mx-auto text-emerald-400 animate-bounce" />
                <h4 className="font-bold text-lg">Message Dispatched Successfully!</h4>
                <p className="text-xs text-[#96a0c0] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. A notification has been registered and Sowjanya will reply to {formData.email}.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-xs font-mono transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#96a0c0] mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full p-3 rounded-lg bg-[#131c33] border border-[#2c3a64] text-[#f1eada] text-sm focus:outline-none focus:border-[#e3a32b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#96a0c0] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full p-3 rounded-lg bg-[#131c33] border border-[#2c3a64] text-[#f1eada] text-sm focus:outline-none focus:border-[#e3a32b] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#96a0c0] mb-1">Subject / Project Intent</label>
                  <input
                    type="text"
                    placeholder="Fullstack Developer Role / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full p-3 rounded-lg bg-[#131c33] border border-[#2c3a64] text-[#f1eada] text-sm focus:outline-none focus:border-[#e3a32b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#96a0c0] mb-1">Your Message</label>
                  <textarea
                    rows="4"
                    placeholder="Hi Sowjanya, we're impressed by your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full p-3 rounded-lg bg-[#131c33] border border-[#2c3a64] text-[#f1eada] text-sm focus:outline-none focus:border-[#e3a32b] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#e3a32b] hover:bg-[#f2b53c] text-[#131c33] font-mono text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
