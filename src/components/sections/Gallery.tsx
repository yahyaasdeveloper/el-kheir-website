"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", // Entrepôt
  "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop", // Rayons
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop", // Supermarché
  "https://images.unsplash.com/photo-1588610534572-cddb6e3fcf64?q=80&w=800&auto=format&fit=crop", // Logistique
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop", // Fruits/Légumes
  "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=800&auto=format&fit=crop", // Équipe
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Notre <span className="text-primary">Galerie</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez nos infrastructures, notre équipe professionnelle et notre large gamme de produits.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Galerie El Kheir ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
