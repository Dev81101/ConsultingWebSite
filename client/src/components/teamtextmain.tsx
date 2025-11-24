import React from 'react';
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

export default function TeamTextMain() {
    const { language } = useLanguage();
    const t = useTranslations()[language];
    const imageUrl = "../images/StrucenTim.png";

    return (
        <section className="py-20 bg-transparent overflow-hidden" data-testid="team-text-main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 space-y-8 flex flex-col justify-center">
                        {t.team.title && (
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                                {t.team.title.toUpperCase()}
                            </span>
                        )}

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                            {t.team.subtitle}
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t.team.description}
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-700 hover:bg-red-800 transition duration-150 ease-in-out shadow-lg transform hover:scale-[1.02]"
                            >
                                {t.team.cta}
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        {/* Transparent container - removed background, border-radius and shadow */}
                        <div className="relative transform transition duration-500 hover:scale-[1.01] h-full w-full lg:max-h-[30em]">
                            <img
                                src={imageUrl}
                                alt="A photo of our dedicated consulting team"
                                className="w-full h-full object-contain"
                            />
                            {/* Removed the blue overlay completely to maintain transparency */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}