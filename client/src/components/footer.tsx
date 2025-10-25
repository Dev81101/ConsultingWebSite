import { Link } from "wouter";
import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

export default function Footer() {
  const { country } = useCountry();
  const { language } = useLanguage();
  const t = useTranslations()[language];
  
  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="ml-2 text-xl font-bold">WVP Plus Consulting</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="social-facebook"
              >
                <span className="text-white text-sm">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="social-twitter"
              >
                <span className="text-white text-sm">t</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="social-linkedin"
              >
                <span className="text-white text-sm">in</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                data-testid="social-instagram"
              >
                <span className="text-white text-sm">ig</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${country}/programs#ipard`} className="hover:text-white transition-colors" data-testid="footer-ipard">
                  {t.footer.ipard}
                </Link>
              </li>
              <li>
                <Link href={`/${country}/programs#financial-aid`} className="hover:text-white transition-colors" data-testid="footer-financial-aid">
                  {t.footer.financialAid}
                </Link>
              </li>
              <li>
                <Link href={`/${country}/programs#consulting`} className="hover:text-white transition-colors" data-testid="footer-consulting">
                  {t.footer.consulting}
                </Link>
              </li>
              <li>
                <Link href={`/${country}/programs#business-plans`} className="hover:text-white transition-colors" data-testid="footer-business-plans">
                  {t.footer.businessPlans}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.companyTitle}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${country}/about`} className="hover:text-white transition-colors" data-testid="footer-about">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${country}/about#team`} className="hover:text-white transition-colors" data-testid="footer-team">
                  {t.footer.ourTeam}
                </Link>
              </li>
              <li>
                <Link href={`/${country}/about#careers`} className="hover:text-white transition-colors" data-testid="footer-careers">
                  {t.footer.careers}
                </Link>
              </li>
              <li>
                <Link href={`/${country}/contact`} className="hover:text-white transition-colors" data-testid="footer-contact">
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300" data-testid="footer-copyright">
            {t.footer.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-privacy">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-terms">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
