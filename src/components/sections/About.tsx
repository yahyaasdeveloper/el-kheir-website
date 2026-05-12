"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "5000+", label: "Produits disponibles" },
  { value: "1200+", label: "Clients satisfaits" },
  { value: "24h", label: "Livraison rapide" },
  { value: "100%", label: "Disponibilité du stock" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Notre Histoire</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6 leading-tight">
              À propos de <span className="text-primary">El Kheir</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg mb-8">
              <p>
                Depuis notre création, notre objectif est d’offrir des produits de qualité avec un service fiable et rapide.
              </p>
              <p>
                Grâce à notre réseau de fournisseurs et notre expertise du marché, nous proposons une grande variété de produits alimentaires et de consommation adaptés aux besoins de nos clients.
              </p>
              <p className="font-medium text-dark/80 pl-4 border-l-4 border-secondary">
                Chez El Kheir, la satisfaction du client est notre priorité absolue.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Sélection rigoureuse des fournisseurs",
                "Contrôle qualité systématique",
                "Service client réactif",
                "Prix compétitifs"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-dark/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2574&auto=format&fit=crop" 
                alt="Entrepôt El Kheir"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
