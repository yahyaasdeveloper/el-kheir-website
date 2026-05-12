"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Besoin de produits alimentaires de qualité ? Contactez El Kheir dès aujourd’hui !
            </h2>
            <a
              href="https://wa.me/22242036005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2 border-none rounded-full h-14 px-8 text-lg mt-4 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-6 h-6" />
                Discuter sur WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Contactez-<span className="text-primary">nous</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Notre équipe est disponible pour répondre à toutes vos demandes de devis, commandes ou informations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1 text-dark">Notre Adresse</h4>
                  <p className="text-gray-600">Nouakchott, Mauritania</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1 text-dark">Téléphone</h4>
                  <p className="text-gray-600">+222 42 03 60 05</p>
                  <p className="text-gray-600">+222 42 03 60 05 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1 text-dark">Email</h4>
                  <p className="text-gray-600">contact@elkheir.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-dark mb-6">Envoyez un message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark/80">Prénom</label>
                  <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark/80">Nom</label>
                  <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Votre nom" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-dark/80">Email</label>
                <input type="email" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-dark/80">Sujet</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Demande de devis..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-dark/80">Message</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[120px] resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full mt-2 gap-2 h-14 text-base">
                Envoyer le message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>

        </div>

        {/* Google Maps Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden h-[400px] bg-gray-100 shadow-inner"
        >
          {/* Using a placeholder iframe for Maps, ideally should be a real location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10500.56930818274!2d2.3429312217730873!3d48.85590924962292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
