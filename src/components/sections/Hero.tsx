'use client'; // IMPORTANTE - convierte a componente cliente

import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen flex items-center">
        {/* Fondo con overlay */}
        <div className="absolute inset-0 z-0">
            <Image
            src="/images/hero-bg.jpg"
            alt="Liga Deportiva TTNB"
            fill
            className="object-cover"
            priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Contenido */}
        <div className="container mx-auto px-4 z-10 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Liga Deportiva TTNB
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Somos el primer equipo deportivo TTNB en formar <><strong>atletas de alto rendimiento</strong></> en LATAM
            </p>
            <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('calendar')} variant="primary">
                Ver calendario
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="secondary">
                Contacto
            </Button>
            </div>
        </div>
        </section>
    );
}