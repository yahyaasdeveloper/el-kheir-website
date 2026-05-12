"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "Produits alimentaires", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" },
  { name: "Boissons", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop" },
  { name: "Produits laitiers", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop" },
  { name: "Conserves", image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?q=80&w=600&auto=format&fit=crop" },
  { name: "Riz et pâtes", image: "https://images.unsplash.com/photo-1589367920969-ab8e050bfc19?q=80&w=600&auto=format&fit=crop" },
  { name: "Huiles alimentaires", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop" },
  { name: "Épices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop" },
  { name: "Produits surgelés", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=600&auto=format&fit=crop" },
  { name: "Produits ménagers", image: "https://images.unsplash.com/photo-1584824486509-112e4181f1ce?q=80&w=600&auto=format&fit=crop" },
  { name: "Snacks et confiseries", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=600&auto=format&fit=crop" },
  { name: "Fruits et légumes", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop" },
  { name: "Produits d’importation", image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=600&auto=format&fit=crop" },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-accent/30 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Nos <span className="text-primary">Produits</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Nous fournissons pratiquement tous les produits disponibles sur le marché avec une qualité garantie et des prix compétitifs. Découvrez notre large sélection.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-display font-semibold text-lg drop-shadow-md">
                  {category.name}
                </h3>
                <div className="w-8 h-1 bg-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
