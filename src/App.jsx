import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Calendar, Mail, Phone, MapPin, Users, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "./assets/logo.png";

import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import kiemas1 from "./assets/kiemas1.png";
import kiemas2 from "./assets/kiemas2.png";
import kiemas3 from "./assets/kiemas3.png";
import miegamieji1 from "./assets/miegamieji1.png";
import miegamieji2 from "./assets/miegamieji2.png";
import vidus1 from "./assets/vidus1.png";
import virtuve1 from "./assets/virtuve1.png";
import vanduo1 from "./assets/vanduo1.png";
import vonia1 from "./assets/vonia1.png";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Virintų Slėnis" className="logoImg" />
      </Link>

      <button
        type="button"
        className={`mobileMenuBtn ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Atidaryti meniu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${mobileOpen ? "navOpen" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Pagrindinis
        </NavLink>
        <NavLink to="/sodyba" onClick={closeMenu}>
          Sodyba
        </NavLink>
        <NavLink to="/nuoma" onClick={closeMenu}>
          Nuoma
        </NavLink>
        <NavLink to="/kontaktai" onClick={closeMenu}>
          Kontaktai
        </NavLink>
      </nav>

      <Link to="/nuoma" className="headerBtn" onClick={closeMenu}>
        Rezervuoti
      </Link>
    </header>
  );
}

function Home() {
  const heroImages = [hero1, hero2];
  const [heroImage, setHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.68)), url(${heroImages[heroImage]})`,
        }}
      >
        <div className="heroOverlay"></div>

        <div className="heroContent" data-aos="fade-up">
          <p className="heroTag">Kaimo sodybos nuoma</p>
          <h1>Ramybė, gamta ir jaukus poilsis vienoje vietoje</h1>
          <p className="heroText">
            Puiki vieta savaitgaliui, šeimos poilsiui, šventei ar pabėgimui nuo
            miesto šurmulio.
          </p>

          <div className="heroActions">
            <Link to="/nuoma" className="mainBtn">
              Pateikti užklausą
            </Link>
            <Link to="/sodyba" className="ghostBtn">
              Apžiūrėti sodybą
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutPreview">
        <div className="aboutText" data-aos="fade-right">
          <h2>Sodyba gamtos apsuptyje</h2>

          <div className="features">
            <div>
              <CheckCircle />
              <span>Privati aplinka</span>
            </div>
            <div>
              <CheckCircle />
              <span>Patogu šeimai ir draugams</span>
            </div>
            <div>
              <CheckCircle />
              <span>Greita užklausos forma</span>
            </div>
          </div>
        </div>

        <div
          className="aboutImage"
          data-aos="fade-left"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.2)), url(${kiemas1})`,
          }}
        ></div>
      </section>
    </main>
  );
}

function Sodyba() {
  const photos = [
    { title: "Kiemas", image: kiemas1 },
    { title: "Kiemas", image: kiemas2 },
    { title: "Kiemas", image: kiemas3 },
    { title: "Vidus", image: vidus1 },
    { title: "Virtuvė", image: virtuve1 },
    { title: "Miegamasis", image: miegamieji1 },
    { title: "Miegamasis", image: miegamieji2 },
    { title: "Vonia", image: vonia1 },
    { title: "Vandens telkinys", image: vanduo1 },
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <main className="page">
      <section
        className="pageHero smallHero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.78)), url(${hero2})`,
        }}
      >
        <div data-aos="fade-up">
          <p className="sectionTag">Galerija</p>
          <h1>Sodyba</h1>
          <p>Peržiūrėkite sodybos aplinką, vidų ir poilsio zonas.</p>
        </div>
      </section>

      <section className="sliderSection">
        <div className="photoSlider" data-aos="zoom-in">
          <button type="button" className="sliderArrow leftArrow" onClick={prevPhoto}>
            ‹
          </button>

          <div className="sliderImage">
            <div
              className="sliderBackground"
              style={{
                backgroundImage: `url(${photos[currentPhoto].image})`,
              }}
            ></div>

            <img
              src={photos[currentPhoto].image}
              alt={photos[currentPhoto].title}
              className="sliderPhoto"
            />

            <div className="sliderOverlay">
              <h2>{photos[currentPhoto].title}</h2>
            </div>
          </div>

          <button type="button" className="sliderArrow rightArrow" onClick={nextPhoto}>
            ›
          </button>
        </div>

        <div className="sliderDots">
          {photos.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={currentPhoto === index ? "activeDot" : ""}
            ></button>
          ))}
        </div>
      </section>

      <section className="infoSection">
        <div className="infoContainer">
          <h2>„Virintų Slėnis“</h2>

          <p className="infoIntro">
            Išnuomojama visiškai nauja kaimo turizmo sodyba Molėtų rajone,
            Verbiškių kaime. Sodyba įsikūrusi tarp Virintų ežero ir Virinta
            upės, ant tvenkinių kranto, todėl čia galėsite mėgautis visiška
            ramybe ir gamtos apsuptimi.
          </p>

          <div className="infoGrid">
            <div className="infoCard">
              <h3>Ką rasite sodyboje?</h3>
              <ul>
                <li>✔ Aptverta privati teritorija</li>
                <li>✔ Krepšinio aikštelė</li>
                <li>✔ Vaikų žaidimų aikštelė</li>
                <li>✔ Didelis lieptas su gultais</li>
                <li>✔ Valtis žvejybai</li>
                <li>✔ Irklentė</li>
                <li>✔ Šašlykinė</li>
                <li>✔ Anglys ir malkos</li>
              </ul>
            </div>

            <div className="infoCard">
              <h3>Į kainą įskaičiuota</h3>
              <ul>
                <li>✔ Kubilas / Jacuzzi</li>
                <li>✔ Malkos kubilui</li>
                <li>✔ Anglys</li>
                <li>✔ Valtis</li>
                <li>✔ Irklentė</li>
                <li>✔ Gultai</li>
                <li>✔ Hamakas</li>
                <li>✔ Supynės</li>
                <li>✔ Patalynė</li>
                <li>✔ Rankšluosčiai</li>
              </ul>
            </div>
          </div>

          <div className="priceBox">
            <h2>Kainos</h2>

            <div className="priceItem">
              <h3>6–7 vietų namelis</h3>
              <p>500 € / savaitgalis</p>
              <small>Su Jacuzzi / kubilu – 570 €</small>
            </div>

            <div className="priceItem">
              <h3>2–4 vietų namelis</h3>
              <p>300 € / savaitgalis</p>
              <small>Su Ofūro Jacuzzi – 360 €</small>
            </div>
          </div>

          <div className="aboutTextBlock">
            <h2>Kodėl verta rinktis mus?</h2>

            <p>
              Čia mėgausitės visišku privatumu ir ramybe. Jūsų laukia privati
              tvenkinio pakrantė, maudykla upėje, jaukus kubilas po atviru
              dangumi, aptverta teritorija, krepšinio aikštelė, vaikų žaidimų
              zona ir visas komfortas kokybiškam poilsiui.
            </p>

            <p>
              Galima rezervuoti abu namelius vienai kompanijai. Iš viso – 9
              miegamos vietos. Taip pat taikomos nuolaidos ilgesniems
              apsistojimams.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Nuoma() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/virintuslenis@gmail.com", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setSuccess(true);
        e.target.reset();
      } else {
        alert("Nepavyko išsiųsti formos. Bandykite dar kartą.");
      }
    } catch (error) {
      alert("Įvyko klaida siunčiant formą.");
    }

    setLoading(false);
  };

  return (
    <main className="page">
      <section className="formSection cleanFormSection">
        <div className="formHeader" data-aos="fade-up">
          <p className="sectionTag">Rezervacija</p>
          <h1>Pateikite užklausą</h1>
          <p>
            Užpildykite formą ir mes susisieksime dėl laisvų datų, kainos bei
            papildomų paslaugų.
          </p>
        </div>

        <form className="bookingForm cleanBookingForm" data-aos="fade-up" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Nauja sodybos nuomos užklausa" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="formGroup">
            <label>Atvykimo data *</label>
            <div className="inputIcon">
              <Calendar size={18} />
              <input type="date" name="Atvykimo data" required />
            </div>
          </div>

          <div className="formGroup">
            <label>Išvykimo data *</label>
            <div className="inputIcon">
              <Calendar size={18} />
              <input type="date" name="Išvykimo data" required />
            </div>
          </div>

          <div className="inputIcon">
            <Users size={18} />
            <select name="Svečių skaičius" required>
              <option value="">Svečių skaičius*</option>
              <option>1–2</option>
              <option>3–5</option>
              <option>6–10</option>
              <option>10+</option>
            </select>
          </div>

          <input name="Vardas ir pavardė" placeholder="Vardas ir pavardė*" required />
          <input name="Telefono numeris" placeholder="Tel. nr.*" required />

          <div className="inputIcon">
            <Mail size={18} />
            <input type="email" name="El. paštas" placeholder="El. paštas*" required />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Siunčiama..." : "Pateikti užklausą"}
          </button>

          {success && (
            <div className="successBox">
              Forma sėkmingai išsiųsta! Susisieksime su Jumis artimiausiu metu.
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

function Kontaktai() {
  return (
    <main className="page">
      <section className="contactSection">
        <div className="contactInfo" data-aos="fade-right">
          <p className="sectionTag">Susisiekite</p>
          <h1>Kontaktai</h1>

          <div className="contactLine">
            <Phone />
            <div>
              <h3>Telefonas</h3>
              <p>+370 600 66004</p>
            </div>
          </div>

          <div className="contactLine">
            <Mail />
            <div>
              <h3>El. paštas</h3>
              <p>virintuslenis@gmail.com</p>
            </div>
          </div>

          <div className="contactLine">
            <MapPin />
            <div>
              <h3>Adresas</h3>
              <p>Paupio g. 1A, Verbiškių k., Molėtų rajonas</p>
            </div>
          </div>
        </div>

        <div className="mapBox" data-aos="fade-left">
          <iframe
            title="Sodybos vieta"
            src="https://www.google.com/maps?q=Paupio+g.+1A,+Verbi%C5%A1ki%C5%B3+k.,+Mol%C4%97t%C5%B3+rajonas&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>VIRINTŲ SLĖNIS</p>
      <p>Rami vieta jūsų poilsiui gamtos apsuptyje.</p>
      <small>© 2026 Visos teisės saugomos.</small>

      
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sodyba" element={<Sodyba />} />
        <Route path="/nuoma" element={<Nuoma />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
      </Routes>

      <Footer />
    </>
  );
}