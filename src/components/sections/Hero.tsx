"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              Distribution & Fourniture
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            El Kheir — Votre partenaire de confiance pour tous les produits alimentaires
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            El Kheir est une entreprise spécialisée dans la distribution et la fourniture de produits alimentaires et de consommation.
            Nous mettons à disposition une large gamme de produits présents sur le marché afin de répondre aux besoins des particuliers, commerces, restaurants et entreprises.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2 border-none">
              <MessageCircle className="w-5 h-5" />
              Contactez-nous sur WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 gap-2 backdrop-blur-sm">
              <Mail className="w-5 h-5" />
              Envoyez-nous un Email
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
