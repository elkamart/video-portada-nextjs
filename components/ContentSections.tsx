export default function ContentSections() {
  return (
    <main className="main-content relative z-10 bg-white min-h-screen pt-0">
      {/* Servicios Section */}
      <section id="servicios" className="content-section px-8 py-16 max-w-[1200px] mx-auto">
        <h2 className="text-4xl mb-6 text-center text-[var(--title-color)] font-medium tracking-tight">
          Servicios a Empresas
        </h2>
        <p className="text-base mb-5 text-center leading-relaxed text-[var(--secondary-color)]">
          Este es el contenido principal de tu página web. Aquí puedes agregar cualquier elemento que desees que aparezca después del video de portada.
        </p>
        <p className="text-base mb-5 text-center leading-relaxed text-[var(--secondary-color)]">
          El video de portada ocupa toda la pantalla inicialmente, y los usuarios pueden hacer scroll hacia abajo para ver este contenido.
        </p>
      </section>

      {/* Productos Section */}
      <section id="productos" className="content-section px-8 py-16 max-w-[1200px] mx-auto">
        <h2 className="text-4xl mb-6 text-center text-[var(--title-color)] font-medium tracking-tight">
          Productos
        </h2>
        <p className="text-base mb-5 text-center leading-relaxed text-[var(--secondary-color)]">
          Puedes agregar tantas secciones como necesites. El diseño es completamente responsive y funcionará en todos los dispositivos.
        </p>
        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="feature-card bg-[var(--off-white)] p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--title-color)] mb-3 text-xl font-medium tracking-tight">
              Característica 1
            </h3>
            <p className="text-[var(--secondary-color)]">Descripción de la característica</p>
          </div>
          <div className="feature-card bg-[var(--off-white)] p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--title-color)] mb-3 text-xl font-medium tracking-tight">
              Característica 2
            </h3>
            <p className="text-[var(--secondary-color)]">Descripción de la característica</p>
          </div>
          <div className="feature-card bg-[var(--off-white)] p-8 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--title-color)] mb-3 text-xl font-medium tracking-tight">
              Característica 3
            </h3>
            <p className="text-[var(--secondary-color)]">Descripción de la característica</p>
          </div>
        </div>
      </section>

      {/* Quién Nos Elige Section */}
      <section id="quienes" className="content-section px-8 py-16 max-w-[1200px] mx-auto">
        <h2 className="text-4xl mb-6 text-center text-[var(--title-color)] font-medium tracking-tight">
          Quién Nos Elige
        </h2>
        <p className="text-base mb-5 text-center leading-relaxed text-[var(--secondary-color)]">
          Más contenido para demostrar el scroll. El video permanece fijo en la parte superior mientras el usuario navega por el resto del contenido.
        </p>
      </section>

      {/* Distribuidores Section */}
      <section id="distribuidores" className="content-section px-8 py-16 max-w-[1200px] mx-auto">
        <h2 className="text-4xl mb-6 text-center text-[var(--title-color)] font-medium tracking-tight">
          Distribuidores
        </h2>
        <p className="text-base mb-5 text-center leading-relaxed text-[var(--secondary-color)]">
          Información sobre nuestros distribuidores y puntos de venta.
        </p>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="content-section px-8 py-16 max-w-[1200px] mx-auto">
        <h2 className="text-4xl mb-6 text-center text-[var(--title-color)] font-medium tracking-tight">
          Contacto
        </h2>
        <p className="text-base mb-5 text-center leading-relaxed text-[var(--secondary-color)]">
          Ponte en contacto con nosotros para más información sobre nuestros productos y servicios.
        </p>
        <div className="contact-info-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="contact-item bg-[var(--off-white)] p-8 rounded-xl text-center shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--title-color)] mb-3 text-lg font-medium tracking-tight">
              Teléfono
            </h3>
            <p className="text-[var(--secondary-color)] text-lg m-0">+34 933 425 586</p>
          </div>
          <div className="contact-item bg-[var(--off-white)] p-8 rounded-xl text-center shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--title-color)] mb-3 text-lg font-medium tracking-tight">
              Horario
            </h3>
            <p className="text-[var(--secondary-color)] text-lg m-0">Lun a vie: 9.30 a 14 - 16 a 19</p>
          </div>
          <div className="contact-item bg-[var(--off-white)] p-8 rounded-xl text-center shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
            <h3 className="text-[var(--title-color)] mb-3 text-lg font-medium tracking-tight">
              Email
            </h3>
            <p className="text-[var(--secondary-color)] text-lg m-0">info@centhylon.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
