"use client";

import { motion } from "framer-motion";
import { Store, PackageSearch, Truck, Globe, UserCheck, CheckCircle } from "lucide-react";

const services = [
  { icon: PackageSearch, title: "Distribution alimentaire", desc: "Distribution à grande échelle de produits alimentaires pour tous types de commerces." },
  { icon: CheckCircle, title: "Fourniture en gros", desc: "Vente en gros avec des tarifs dégressifs très avantageux." },
  { icon: Store, title: "Approvisionnement commerces", desc: "Solutions sur-mesure pour les supermarchés, supérettes et restaurants." },
  { icon: Truck, title: "Livraison rapide", desc: "Service de livraison express pour garantir la fraîcheur de vos produits." },
  { icon: Globe, title: "Importation de produits", desc: "Importation de produits de marques internationales exclusives." },
  { icon: UserCheck, title: "Service personnalisé", desc: "Un conseiller dédié pour suivre et optimiser vos commandes." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-primary text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-secondary rounded-full"></div>
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">Notre Expertise</span>
              <div className="w-8 h-1 bg-secondary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Nos Services
            </h2>
            <p className="text-white/80 text-lg">
              El Kheir accompagne les particuliers, commerces et entreprises avec des solutions adaptées à leurs besoins spécifiques.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
