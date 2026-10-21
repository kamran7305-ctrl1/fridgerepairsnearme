import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  callOutFee,
  warrantyPeriod,
} from "../data/content";
import {
  MailIcon,
  WrenchIcon,
  ShieldIcon,
  CheckIcon,
  ClockIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/freezer-repairs-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const freezerTypes = [
  { title: "Chest freezers", text: "Top-opening bulk freezers, usually in garages and laundries. Lid seals, thermostats and condenser airflow are the usual checks, and heat in a garage makes every fault worse." },
  { title: "Upright freezers", text: "Standing freezers with shelves or drawers. Door seals, fans and defrost parts cause most faults, and frost on the back wall is the first sign." },
  { title: "Fridge-freezers", text: "Top-mount, bottom-mount, French door and side-by-side models. The freezer often fails first because of a fan or defrost fault, then the fridge section warms up." },
  { title: "Bar and small freezers", text: "Compact units in offices, granny flats and entertaining areas. We tell you before quoting whether a repair is worth the price of a new one." },
];

const checkFirst = [
  "Check the power point and that the plug is fully in. Make sure nothing else is tripping the circuit.",
  "Check the temperature setting. A dial knocked to a warmer setting is a common cause.",
  "Check the lid or door seal. If it does not close flat, or you can slide a sheet of paper out easily, warm air is getting in.",
  "Look at the back wall and vents. A thick layer of frost or ice usually points to a defrost or seal fault.",
  "Pull the freezer out slightly and look for dust on the coil at the back. Switch it off at the wall before touching anything.",
];

const faultRows = [
  { fault: "Freezer is not freezing, compressor running", cause: "Dirty condenser, failed condenser fan or a gas leak", fix: "Clean and test the condenser, check fans and leak test before any regas" },
  { fault: "Thick frost or an ice wall", cause: "Failed defrost heater, timer or sensor, or a door that does not seal", fix: "Test the defrost circuit and replace the failed part" },
  { fault: "Freezer is warm but the fridge is cold (or the other way round)", cause: "Failed evaporator fan, air damper or thermostat", fix: "Test the fans and damper and replace the failed part" },
  { fault: "Clicking, then no start", cause: "Start relay or overload protector on the compressor", fix: "Test the start components first; they cost much less than a compressor" },
  { fault: "Water under or inside the freezer", cause: "Blocked defrost drain or a damaged door seal", fix: "Clear the drain and replace the seal if needed" },
  { fault: "Runs all the time and is noisy", cause: "Dirty coil, worn fan motor or a failing compressor", fix: "Clean the coil, check the fan, then tell you what the compressor is doing" },
];

const faqs = [
  {
    q: "Can you fix my freezer today in Sydney?",
    a: "Possibly. Same-day visits depend on the day's bookings and are easier to arrange the earlier you call. If the freezer is full of food, say so when you book and we will try to prioritise it.",
  },
  {
    q: "How much does a freezer repair cost?",
    a: `Our call-out is ${callOutFee}. After diagnosis you get a fixed quote before any work starts. As a general Sydney market guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more.`,
  },
  {
    q: "My freezer has stopped working. What should I do with the food?",
    a: "Keep the lid or door closed so the food stays cold for as long as possible, and call us. Do not refreeze food that has fully thawed. Check current food safety advice from your state food authority if you are unsure what is safe.",
  },
  {
    q: "Why is my chest freezer not freezing in summer?",
    a: "Heat in a garage makes a chest freezer work much harder. A dirty condenser, a worn lid seal or a failing fan will show up first. Give the freezer a few centimetres of clear space around it and keep it out of direct sun.",
  },
  {
    q: "Why does my freezer keep icing up?",
    a: "Usually a failed defrost part, or a door or lid that is not sealing and is letting in moist air. Do not chip the ice with a sharp tool, as you can puncture the cooling coil.",
  },
  {
    q: "Is it worth repairing an old freezer?",
    a: "Usually, if it is under about 8 years old and the fault is not the compressor. If the sealed system has failed on an old freezer, replacement can be cheaper, and we will tell you plainly after diagnosis.",
  },
  {
    q: "Do you repair commercial freezers?",
    a: "Yes. See our commercial freezer repairs page for upright, chest and display freezers and freezer rooms in businesses.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Freezer repair",
    name: "Freezer Repairs Sydney",
    description:
      "On-site freezer and fridge-freezer repairs across Sydney for chest freezers, upright freezers and household fridge-freezers, with a fixed quote before any work starts.",
    url: CANONICAL_URL,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Fridge Repairs Near Me",
      url: "https://fridgerepairsnearme.com.au/",
      email: enquiryEmail,
    },
    areaServed: { "@type": "City", name: "Sydney" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freezer repair services in Sydney",
      itemListElement: freezerTypes.map((t) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${t.title} repairs` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Freezer Repairs", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function FreezerRepairsPage() {
  usePageSeo({
    title: `Freezer Repairs Sydney | Chest, Upright & Fridge-Freezers`,
    description: `Freezer repairs in Sydney for chest freezers, upright freezers and fridge-freezers. Not freezing or iced up? ${callOutFee} call-out, fixed quote first.`,
    canonical: CANONICAL_URL,
    schema,
  });

  return (
    <>
      <section className="hero hero--simple" id="top">
        <div className="hero__backdrop" aria-hidden="true">
          <span className="hero__glow hero__glow--a" />
          <span className="hero__glow hero__glow--b" />
        </div>

        <div className="container">
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">Freezers and Fridge-Freezers</p>
            <h1>Freezer Repairs in Sydney</h1>
            <p className="hero__lede">
              A chest freezer in the garage that has stopped freezing, an upright freezer
              covered in frost, or a fridge-freezer where the freezer side is warm? We repair
              household freezers and fridge-freezers across Sydney.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you plainly when a
              repair is not worth it.
            </p>
            <div className="hero__actions">
              <a href="/#contact" className="btn btn-primary">Request a Free Quote</a>
              <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar__grid trust-bar__grid--4">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div className="trust-bar__item" key={label}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Quick Answer</p>
            <h2>Freezer Repair in Sydney in Brief</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair chest freezers, upright freezers and the freezer side of fridge-freezers
              across Sydney. The call-out is {callOutFee}, the quote is fixed after diagnosis,
              and repairs carry a {warrantyPeriod} warranty on parts and labour. Most freezer
              faults come down to the defrost system, a door or lid seal, a fan or the
              compressor's start parts. Same-day visits may be available depending on the day's
              bookings. For a business freezer, see{" "}
              <a href="/commercial-freezer-repairs-sydney/">commercial freezer repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="types">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Freezer Types</p>
            <h2>Freezers and Fridge-Freezers We Repair</h2>
          </div>

          <div className="grid grid-4">
            {freezerTypes.map((t) => (
              <div className="card domestic__card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <p className="hub-suburbs__note" style={{ textAlign: "center" }}>
            Fridge-freezer fault? See our{" "}
            <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>.
          </p>
        </div>
      </section>

      <section className="section" id="check-first">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Before You Call</p>
            <h2>Freezer Not Freezing? Check These Five Things First</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {checkFirst.map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p style={{ marginTop: 14 }}>
              Still not freezing? Switch it off at the wall and call us rather than leaving it
              running. Need it quickly? See{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Faults</p>
            <h2>Common Freezer Faults and Their Usual Causes</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>What you see</th>
                  <th>Usual cause</th>
                  <th>What we do</th>
                </tr>
              </thead>
              <tbody>
                {faultRows.map((r) => (
                  <tr key={r.fault}>
                    <td>{r.fault}</td>
                    <td>{r.cause}</td>
                    <td>{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hub-suburbs__note">
            Gas leak? See <a href="/fridge-regas-sydney/">fridge regas</a>.
          </p>
        </div>
      </section>

      <section className="section" id="garage">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Sydney Summers</p>
            <h2>Why Garage Freezers Fail in Summer</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Many Sydney homes keep a second freezer in a garage or on a covered patio, and
              summer heat is hard on them. A freezer sitting in a hot garage runs almost
              constantly, which wears the compressor, dries out the lid seal and loads the
              condenser with dust. Give the freezer a few centimetres of clear space on every
              side, keep it out of direct sun, and vacuum the condenser coil once or twice a
              year while it is switched off at the wall.
            </p>
          </div>
        </div>
      </section>

      <section className="section cost section--alt" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What a Freezer Repair Costs</h2>
            <p>
              Our call-out is {callOutFee} incl. GST. You get a fixed quote after diagnosis and we
              only go ahead if you agree. For a general Sydney market guide (not our prices), see
              the <a href="/#cost">fridge repair cost guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Freezer Repairs Across Sydney</h2>
            <p>
              Inner West · <a href="/fridge-repairs/western-sydney/">Western Sydney</a> ·{" "}
              <a href="/fridge-repairs/north-shore/">North Shore</a> ·{" "}
              <a href="/fridge-repairs/northern-beaches/">Northern Beaches</a> ·{" "}
              <a href="/fridge-repairs/eastern-suburbs/">Eastern Suburbs</a> ·{" "}
              <a href="/fridge-repairs/sydney-cbd/">Sydney CBD</a> ·{" "}
              <a href="/fridge-repairs/st-george/">St George</a> ·{" "}
              <a href="/fridge-repairs/sutherland-shire/">Sutherland Shire</a>
            </p>
            <p><a href="/fridge-repairs/">See all service areas →</a></p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="freezer-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Freezer Repairs Sydney: Your Questions</h2>
          </div>

          <div className="accordion faq__accordion">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="freezer-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Freezer Repair</h2>
            <p>
              Tell us the freezer type, brand and model, what it is doing and your suburb. We will
              find the fault and quote before we start.
            </p>
          </div>
          <div className="hub-cta__actions">
            <a href="/#contact" className="btn btn-primary">Request a Free Quote</a>
            <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
