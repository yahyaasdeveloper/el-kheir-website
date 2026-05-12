import { Globe, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary text-primary flex items-center justify-center rounded-lg font-display font-bold text-xl">
                EK
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                El Kheir
              </span>
            </div>
            <p className="text-white/80 max-w-xs mt-4">
              El Kheir — Qualité, confiance et disponibilité. Votre partenaire de confiance pour tous les produits alimentaires.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Liens Rapides</h4>
            <ul className="space-y-3">
              {["Accueil", "À propos", "Nos Produits", "Nos Services", "Galerie", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Catégories</h4>
            <ul className="space-y-3">
              {["Produits Alimentaires", "Boissons & Jus", "Conserves", "Produits d'Importation", "Produits Ménagers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-white/80">123 Zone Industrielle, Avenue des Commerces, Ville</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/80">+212 500 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-white/80">contact@elkheir.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} El Kheir. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
