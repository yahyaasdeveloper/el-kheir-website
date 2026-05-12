"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ShieldCheck, Tag, HeadphonesIcon, Truck, Box, Handshake, HeartHandshake } from "lucide-react";

const features = [
  { icon: ShoppingBag, title: "Large choix de produits", desc: "Des milliers de références pour répondre à tous vos besoins." },
  { icon: ShieldCheck, title: "Qualité garantie", desc: "Des produits sélectionnés selon des standards stricts." },
  { icon: Tag, title: "Prix compétitifs", desc: "Le meilleur rapport qualité/prix du marché." },
  { icon: HeadphonesIcon, title: "Service client", desc: "Une équipe à votre écoute pour vous accompagner." },
  { icon: Truck, title: "Livraison rapide", desc: "Un réseau logistique performant et réactif." },
  { icon: Box, title: "Disponibilité permanente", desc: "Un stock toujours approvisionné pour vous servir." },
  { icon: Handshake, title: "Partenaire fiable", desc: "Une relation de confiance sur le long terme." },
  { icon: HeartHandshake, title: "Satisfaction client", desc: "Votre réussite est notre priorité absolue." },
];

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Pourquoi choisir <span className="text-primary">El Kheir ?</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-accent/30 rounded-2xl p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-transparent hover:border-gray-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
