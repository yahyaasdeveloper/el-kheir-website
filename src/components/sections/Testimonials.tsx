"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Service rapide et produits de très bonne qualité.",
    author: "Client satisfait",
    role: "Propriétaire de restaurant",
  },
  {
    quote: "El Kheir est devenu notre fournisseur principal grâce à son sérieux et la constance de ses approvisionnements.",
    author: "Responsable commercial",
    role: "Chaîne de supermarchés",
  },
  {
    quote: "Excellent rapport qualité/prix et disponibilité permanente des produits. Un partenaire sur lequel on peut compter.",
    author: "Partenaire professionnel",
    role: "Grossiste indépendant",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-accent/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Ce que disent nos <span className="text-primary">clients</span>
            </h2>
            <p className="text-gray-600 text-lg">
              La satisfaction de nos partenaires est notre meilleure récompense.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
            >
              <Quote className="w-10 h-10 text-secondary/30 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-display font-bold text-primary">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
