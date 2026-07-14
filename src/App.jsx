import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "./assets/logo.png";

import sistema from "./assets/sistema.png";
import veja from "./assets/veja.png";
import veja2 from "./assets/veja2.png";
import zeldynai from "./assets/zeldynai.png";
import zeldynai2 from "./assets/zeldynai2.png";
import sodinimas from "./assets/sodinimas.png";
import sodinimas2 from "./assets/sodinimas2.png";
import genejimas from "./assets/genejimas.png";
import tujos from "./assets/tujos.png";
import tujos2 from "./assets/tujos2.png";
import terasa from "./assets/terasa.png";
import terasa2 from "./assets/terasa2.png";
import stogines from "./assets/stogines.png";

/*
  SVARBU:
  Pakeisk TAVO-EMAIL@gmail.com į tikrą el. paštą,
  į kurį turi ateiti klientų užklausos.
*/
const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/TAVO-EMAIL@gmail.com";

const images = {
  hero1: veja2,
  hero2: zeldynai2,
  irrigation: sistema,
  lawn: veja,
  garden: zeldynai,
  planting: sodinimas,
  treePruning: genejimas,
  hedge: tujos,
  terrace: terasa,
};
const services = [
  {
    id: "laistymo-sistemos",
    number: "01",
    title: "Laistymo sistemos",
    short:
      "Automatinių vejos ir želdynų laistymo sistemų projektavimas bei įrengimas.",
    description:
      "Įrengiame patogias ir ekonomiškas automatines laistymo sistemas vejai, augalams bei želdynams. Sistema pritaikoma konkrečiam sklypui, augalams ir kliento poreikiams.",
    image: images.irrigation,
    benefits: [
      "Automatinis laistymas",
      "Tolygus vandens paskirstymas",
      "Mažesnės vandens sąnaudos",
      "Individualus sistemos suplanavimas",
    ],
  },
  {
    id: "vejos-irengimas",
    number: "02",
    title: "Vejos įrengimas",
    short:
      "Grunto paruošimas, vejos sėjimas, ruloninės vejos klojimas ir priežiūra.",
    description:
      "Paruošiame pagrindą, išlyginame teritoriją ir įrengiame tankią bei estetišką veją. Galime įrengti tiek sėjamą, tiek ruloninę veją.",
    image: images.lawn,
    benefits: [
      "Grunto paruošimas",
      "Teritorijos lyginimas",
      "Sėjama arba ruloninė veja",
      "Pradinės priežiūros rekomendacijos",
    ],
  },
  {
    id: "zeldynu-formavimas",
    number: "03",
    title: "Želdynų formavimas",
    short:
      "Estetiškas augalų, dekoratyvinių zonų ir aplinkos suplanavimas.",
    description:
      "Formuojame funkcionalius ir estetiškus želdynus, derindami augalus, sklypo reljefą, apšvietimą ir bendrą aplinkos stilių.",
    image: images.garden,
    benefits: [
      "Želdyno plano sudarymas",
      "Augalų derinimas",
      "Dekoratyvinių zonų formavimas",
      "Sprendimai įvairaus dydžio sklypams",
    ],
  },
  {
    id: "augalu-sodinimas",
    number: "04",
    title: "Augalų sodinimas",
    short:
      "Medžių, krūmų, gyvatvorių ir dekoratyvinių augalų sodinimas.",
    description:
      "Parenkame augalams tinkamas vietas, paruošiame dirvožemį ir profesionaliai pasodiname medžius, krūmus, tujas bei kitus dekoratyvinius augalus.",
    image: images.planting,
    benefits: [
      "Dirvožemio paruošimas",
      "Tinkamas sodinimo gylis",
      "Medžių ir krūmų sodinimas",
      "Priežiūros rekomendacijos",
    ],
  },
  {
    id: "medziu-genejimas",
    number: "05",
    title: "Medžių genėjimas",
    short:
      "Formuojamasis, sanitarinis ir atjauninamasis medžių genėjimas.",
    description:
      "Genime vaismedžius ir dekoratyvinius medžius, pašaliname sausas, pažeistas arba netinkamai augančias šakas.",
    image: images.treePruning,
    benefits: [
      "Sausų šakų pašalinimas",
      "Lajos formavimas",
      "Medžio būklės gerinimas",
      "Tvarkingesnė sklypo išvaizda",
    ],
  },
  {
    id: "tuju-genejimas",
    number: "06",
    title: "Tujų genėjimas",
    short:
      "Tujų gyvatvorių formavimas, aukščio koregavimas ir priežiūra.",
    description:
      "Profesionaliai formuojame tujų gyvatvores, išlyginame šonus ir viršūnes, koreguojame aukštį bei suteikiame augalams tvarkingą formą.",
    image: images.hedge,
    benefits: [
      "Gyvatvorės formavimas",
      "Aukščio koregavimas",
      "Šonų ir viršūnių lyginimas",
      "Tvarkingas galutinis rezultatas",
    ],
  },
  {
    id: "terasos-stogines",
    number: "07",
    title: "Terasų ir stoginių gamyba",
    short:
      "Medinių terasų, poilsio zonų ir stoginių projektavimas bei gamyba.",
    description:
      "Gaminame praktiškas ir estetiškas terasas bei stogines, pritaikytas prie namo, sklypo ir užsakovo poreikių.",
    image: images.terrace,
    benefits: [
      "Individualūs matmenys",
      "Konstrukcijos paruošimas",
      "Terasų montavimas",
      "Stoginių gamyba",
    ],
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src={logo}
          alt="Žalios Bangos"
          className="logoImg"
        />
      </Link>

      <button
        type="button"
        className={`mobileMenuBtn ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen((previous) => !previous)}
        aria-label={mobileOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav ${mobileOpen ? "navOpen" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Pagrindinis
        </NavLink>

        <NavLink to="/darbai" onClick={closeMenu}>
          Darbai
        </NavLink>

        <NavLink to="/paslaugos" onClick={closeMenu}>
          Paslaugos
        </NavLink>

        <NavLink to="/kontaktai" onClick={closeMenu}>
          Kontaktai
        </NavLink>
      </nav>

      <Link
        to="/kontaktai"
        className="headerBtn"
        onClick={closeMenu}
      >
        Gauti pasiūlymą
      </Link>
    </header>
  );
}

function Home() {
  const heroImages = [images.hero1, images.hero2];
  const [heroImage, setHeroImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroImage(
        (previous) => (previous + 1) % heroImages.length
      );
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main>
      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.42),
              rgba(0, 0, 0, 0.76)
            ),
            url(${heroImages[heroImage]})
          `,
        }}
      >
        <div className="heroOverlay" />

        <div className="heroContent" data-aos="fade-up">
          <p className="heroTag">
            Gerbūvio ir aplinkos tvarkymo darbai
          </p>

          <h1>Žalios Bangos</h1>

          <p className="heroText">
            Kuriame tvarkingą, funkcionalią ir estetišką aplinką –
            nuo vejos bei želdynų iki laistymo sistemų, terasų ir
            stoginių.
          </p>

          <div className="heroActions">
            <Link to="/kontaktai" className="mainBtn">
              Gauti pasiūlymą
            </Link>

            <Link to="/paslaugos" className="ghostBtn">
              Peržiūrėti paslaugas
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutPreview">
        <div className="aboutText" data-aos="fade-right">
          <p className="sectionTag">Apie mus</p>

          <h2>Pasirūpiname jūsų aplinka nuo idėjos iki rezultato</h2>

          <p>
            Atliekame gerbūvio, apželdinimo ir aplinkos tvarkymo
            darbus. Kiekvieną projektą planuojame individualiai,
            atsižvelgdami į sklypo būklę, kliento poreikius ir
            norimą galutinį rezultatą.
          </p>

          <div className="features">
            <div>
              <CheckCircle />
              <span>Individualūs sprendimai</span>
            </div>

            <div>
              <CheckCircle />
              <span>Tvarkingas darbų atlikimas</span>
            </div>

            <div>
              <CheckCircle />
              <span>Konsultacija ir aiškus pasiūlymas</span>
            </div>
          </div>
        </div>

        <div
          className="aboutImage"
          data-aos="fade-left"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.08),
                rgba(0, 0, 0, 0.2)
              ),
              url(${images.garden})
            `,
          }}
        />
      </section>

      <section className="infoSection homeServices">
        <div className="infoContainer">
          <div className="sectionHeading" data-aos="fade-up">
            <p className="sectionTag">Mūsų paslaugos</p>
            <h2>Visi svarbiausi gerbūvio darbai vienoje vietoje</h2>
            <p className="infoIntro">
              Padėsime sukurti prižiūrėtą, patogią ir estetišką
              aplinką prie jūsų namų ar verslo objekto.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article
                className="serviceCard"
                key={service.id}
                data-aos="fade-up"
              >
                <div
                  className="serviceCardImage"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.82),
                        rgba(0, 0, 0, 0.06)
                      ),
                      url(${service.image})
                    `,
                  }}
                >
                  <span className="serviceNumber">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>
                </div>

                <div className="serviceCardContent">
                  <p>{service.short}</p>

                  <Link
                    to="/paslaugos"
                    className="serviceMoreLink"
                  >
                    Plačiau
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="centerAction">
            <Link to="/kontaktai" className="mainBtn">
              Aptarti projektą
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Darbai() {
  const projectPhotos = [
    { title: "Laistymo sistemos", image: sistema },
    { title: "Vejos įrengimas", image: veja },
    { title: "Vejos įrengimas", image: veja2 },
    { title: "Želdynų formavimas", image: zeldynai },
    { title: "Želdynų formavimas", image: zeldynai2 },
    { title: "Augalų sodinimas", image: sodinimas },
    { title: "Augalų sodinimas", image: sodinimas2 },
    { title: "Medžių genėjimas", image: genejimas },
    { title: "Tujų genėjimas", image: tujos },
    { title: "Tujų genėjimas", image: tujos2 },
    { title: "Terasų gamyba", image: terasa },
    { title: "Terasų gamyba", image: terasa2 },
    { title: "Stoginių gamyba", image: stogines },
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto(
      (previous) => (previous + 1) % projectPhotos.length
    );
  };

  const previousPhoto = () => {
    setCurrentPhoto(
      (previous) =>
        (previous - 1 + projectPhotos.length) %
        projectPhotos.length
    );
  };

  return (
    <main className="page">
      <section
        className="pageHero smallHero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.58),
              rgba(0, 0, 0, 0.8)
            ),
            url(${images.lawn})
          `,
        }}
      >
        <div data-aos="fade-up">
          <p className="sectionTag">Darbų galerija</p>
          <h1>Mūsų darbai</h1>
          <p>
            Gerbūvio, apželdinimo, priežiūros ir medžio darbų
            sprendimai.
          </p>
        </div>
      </section>

      <section className="sliderSection">
        <div className="photoSlider" data-aos="zoom-in">
          <button
            type="button"
            className="sliderArrow leftArrow"
            onClick={previousPhoto}
            aria-label="Ankstesnė nuotrauka"
          >
            <ChevronLeft />
          </button>

          <div className="sliderImage">
            <div
              className="sliderBackground"
              style={{
                backgroundImage: `url(${projectPhotos[currentPhoto].image})`,
              }}
            />

            <img
              src={projectPhotos[currentPhoto].image}
              alt={projectPhotos[currentPhoto].title}
              className="sliderPhoto"
            />

            <div className="sliderOverlay">
              <h2>{projectPhotos[currentPhoto].title}</h2>
            </div>
          </div>

          <button
            type="button"
            className="sliderArrow rightArrow"
            onClick={nextPhoto}
            aria-label="Kita nuotrauka"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="sliderDots">
          {projectPhotos.map((photo, index) => (
            <button
              type="button"
              key={`${photo.title}-${index}`}
              onClick={() => setCurrentPhoto(index)}
              className={
                currentPhoto === index ? "activeDot" : ""
              }
              aria-label={`Rodyti: ${photo.title}`}
            />
          ))}
        </div>
      </section>

      <section className="infoSection">
        <div className="infoContainer">
          <div className="sectionHeading">
            <p className="sectionTag">Darbų sritys</p>
            <h2>Kokius projektus atliekame?</h2>
            <p className="infoIntro">
              Atliekame tiek pavienius aplinkos tvarkymo darbus,
              tiek išsamesnius projektus, apimančius kelias
              skirtingas paslaugas.
            </p>
          </div>

          <div className="infoGrid">
            <div className="infoCard">
              <h3>Apželdinimas</h3>
              <ul>
                <li>✔ Vejos įrengimas</li>
                <li>✔ Augalų sodinimas</li>
                <li>✔ Želdynų formavimas</li>
                <li>✔ Gyvatvorių priežiūra</li>
              </ul>
            </div>

            <div className="infoCard">
              <h3>Inžineriniai ir medžio darbai</h3>
              <ul>
                <li>✔ Laistymo sistemų įrengimas</li>
                <li>✔ Terasų gamyba</li>
                <li>✔ Stoginių gamyba</li>
                <li>✔ Medžių ir tujų genėjimas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Paslaugos() {
  return (
    <main className="page">
      <section
        className="pageHero smallHero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.58),
              rgba(0, 0, 0, 0.82)
            ),
            url(${images.garden})
          `,
        }}
      >
        <div data-aos="fade-up">
          <p className="sectionTag">Ką atliekame</p>
          <h1>Paslaugos</h1>
          <p>
            Gerbūvio, apželdinimo ir aplinkos priežiūros
            sprendimai.
          </p>
        </div>
      </section>

      <section className="infoSection">
        <div className="infoContainer">
          <div className="sectionHeading" data-aos="fade-up">
            <p className="sectionTag">Žalios Bangos</p>
            <h2>Paslaugos jūsų sklypui</h2>
            <p className="infoIntro">
              Paslaugas galime atlikti atskirai arba sudaryti bendrą
              darbų planą visai teritorijai.
            </p>
          </div>

          <div className="servicesList">
            {services.map((service, index) => (
              <article
                id={service.id}
                className="serviceDetail"
                key={service.id}
                data-aos="fade-up"
              >
                <div
                  className="serviceDetailImage"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        rgba(0, 0, 0, 0.08),
                        rgba(0, 0, 0, 0.28)
                      ),
                      url(${service.image})
                    `,
                  }}
                />

                <div className="serviceDetailContent">
                  <span className="serviceNumber">
                    {service.number}
                  </span>

                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <ul>
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckCircle />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/kontaktai" className="serviceMoreLink">
                    Gauti pasiūlymą
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Kontaktai() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formos nepavyko išsiųsti.");
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Nepavyko išsiųsti užklausos. Prašome bandyti dar kartą arba susisiekti telefonu."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="contactSection">
        <div className="contactInfo" data-aos="fade-right">
          <p className="sectionTag">Susisiekite</p>
          <h1>Gaukite pasiūlymą</h1>

          <p className="contactIntro">
            Trumpai aprašykite reikalingus darbus. Susisieksime,
            aptarsime situaciją ir pateiksime pasiūlymą.
          </p>

          <div className="contactLine">
            <Phone />
            <div>
              <h3>Telefonas</h3>
              <a href="tel:+37060000000">
                +370 600 00000
              </a>
            </div>
          </div>

          <div className="contactLine">
            <Mail />
            <div>
              <h3>El. paštas</h3>
              <a href="mailto:TAVO-EMAIL@gmail.com">
                TAVO-EMAIL@gmail.com
              </a>
            </div>
          </div>

          <div className="contactLine">
            <MapPin />
            <div>
              <h3>Darbo teritorija</h3>
              <p>Lietuva ir aplinkiniai regionai</p>
            </div>
          </div>
        </div>

        <form
          className="bookingForm cleanBookingForm"
          data-aos="fade-left"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nauja užklausa – Žalios Bangos"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="text"
            name="Vardas ir pavardė"
            placeholder="Vardas ir pavardė*"
            autoComplete="name"
            required
          />

          <input
            type="tel"
            name="Telefono numeris"
            placeholder="Telefono numeris*"
            autoComplete="tel"
            required
          />

          <div className="inputIcon">
            <Mail size={18} />

            <input
              type="email"
              name="El. paštas"
              placeholder="El. paštas*"
              autoComplete="email"
              required
            />
          </div>

          <select
            name="Dominanti paslauga"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Pasirinkite paslaugą*
            </option>

            {services.map((service) => (
              <option
                value={service.title}
                key={service.id}
              >
                {service.title}
              </option>
            ))}

            <option value="Kelios paslaugos">
              Kelios paslaugos
            </option>
          </select>

          <input
            type="text"
            name="Objekto vieta"
            placeholder="Miestas arba objekto vieta"
          />

          <textarea
            name="Užklausos aprašymas"
            placeholder="Trumpai aprašykite reikalingus darbus*"
            rows="6"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Siunčiama..." : "Siųsti užklausą"}
          </button>

          {success && (
            <div className="successBox" role="status">
              Užklausa sėkmingai išsiųsta. Susisieksime su jumis
              artimiausiu metu.
            </div>
          )}

          {errorMessage && (
            <div className="errorBox" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>ŽALIOS BANGOS</p>
      <p>
        Gerbūvio, apželdinimo ir aplinkos tvarkymo darbai.
      </p>

      <div className="footerLinks">
        <Link to="/">Pagrindinis</Link>
        <Link to="/darbai">Darbai</Link>
        <Link to="/paslaugos">Paslaugos</Link>
        <Link to="/kontaktai">Kontaktai</Link>
      </div>

      <small>
        © {new Date().getFullYear()} Žalios Bangos. Visos teisės
        saugomos.
      </small>
    </footer>
  );
}

function ScrollToTop() {
  const location = window.location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/darbai" element={<Darbai />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}