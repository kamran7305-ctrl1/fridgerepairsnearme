import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  callOutFee,
  warrantyPeriod,
  commercialEquipment,
} from "../data/content";
import {
  MailIcon,
  WrenchIcon,
  ShieldIcon,
  CheckIcon,
  ClockIcon,
  BuildingIcon,
  DropletIcon,
  AlertIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/commercial-fridge-repairs-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Urgent jobs prioritised where possible" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const firstSteps = [
  "Keep the doors shut as much as you can. Every opening lets cold air out.",
  "Check the temperature with a probe thermometer and write down the time and reading.",
  "Move high-risk stock such as meat, dairy and prepared food into working fridges or coolers. Follow your food safety plan on what to keep and what to bin.",
  "Look for the obvious: a tripped breaker, a door not sealing, an iced-up coil, or a blocked vent. Do not open panels yourself.",
  "Call us with the equipment type, brand, what it is doing and how long it has been warm. Say so if stock is at risk.",
];

const faultRows = [
  { fault: "Warm cabinet but the compressor runs", cause: "Dirty condenser coil, failed condenser fan or a gas leak", fix: "Clean and test the condenser, check fan motors, leak test before any regas" },
  { fault: "Iced-up evaporator or frost on the back wall", cause: "Failed defrost heater, defrost timer or sensor, or a door that does not seal", fix: "Test the defrost circuit, replace the failed part and check the door seals" },
  { fault: "Water pooling under the unit or inside the cabinet", cause: "Blocked drain line, cracked drain tray or heavy condensation", fix: "Clear and flush the drain, check the tray and the door gaskets" },
  { fault: "Clicking, then no start", cause: "Start relay or overload protector on the compressor", fix: "Test the start components first; they cost far less than a compressor" },
  { fault: "Temperature swings during service", cause: "Faulty thermostat or controller, or a door left ajar by worn hinges", fix: "Test the controller and probe, adjust or replace hinges and gaskets" },
  { fault: "Noisy fan or loud rattle", cause: "Worn fan motor or blade, loose panel or compressor mount", fix: "Replace the fan motor or mounts before the fault takes the system down" },
];

const sectorCards = [
  {
    icon: BuildingIcon,
    title: "Restaurants, Cafes and Bakeries",
    text: "Prep benches, underbench fridges, makeline units and upright freezers that run from the morning prep until close. We diagnose quickly so you know whether stock has to move, and we try to repair outside your rush.",
  },
  {
    icon: DropletIcon,
    title: "Supermarkets, Grocers and Convenience Stores",
    text: "Glass-door fridges, display cabinets, drink coolers and ice cream freezers that are open to customers all day. Door seals, fans and thermostats cause most of the faults.",
  },
  {
    icon: AlertIcon,
    title: "Pubs, Bars and Venues",
    text: "Back-bar fridges, beverage coolers and keg rooms under heavy summer load, often in hot spaces. Condenser airflow matters as much as the cooling parts.",
  },
  {
    icon: ShieldIcon,
    title: "Caterers, Hotels and Food Suppliers",
    text: "Coolrooms, freezer rooms and large cabinets where product and deliveries depend on the unit staying down to temperature.",
  },
];

const priceFactors = [
  "The fault: a door gasket is a different job from a compressor.",
  "Equipment type and size: a prep fridge, a display cabinet and a walk-in coolroom each have different parts.",
  "Parts availability: common fans, thermostats and gaskets are usually quick; imported or older parts can take longer.",
  "Access: loading docks, trading hours and out-of-hours work can change how long a visit takes.",
];

const faqs = [
  {
    q: "How quickly can you attend a commercial fridge breakdown in Sydney?",
    a: "Same-day visits may be available depending on the day's bookings and your location. Call early, say what failed and whether stock is at risk, and we will prioritise the job where we can.",
  },
  {
    q: "Which commercial refrigeration equipment do you repair?",
    a: "Upright and underbench fridges, prep fridges and makeline units, display and glass-door fridges, beverage fridges, commercial freezers, coolrooms and walk-in refrigeration systems.",
  },
  {
    q: "How much does a commercial refrigeration repair cost?",
    a: `Our call-out is ${callOutFee}. After diagnosis you receive a fixed quote before any work starts. Price depends on the fault, the equipment and the part, so we do not quote a flat figure. See our general Sydney market guide on the cost page.`,
  },
  {
    q: "Do you offer servicing and maintenance for commercial fridges?",
    a: "A service visit can be quoted on request. It usually covers cleaning the condenser coil, checking door seals and drains, testing fans and the thermostat, and recording operating temperatures.",
  },
  {
    q: "Can you repair a coolroom or walk-in freezer?",
    a: "Yes. We repair walk-in coolrooms and freezer rooms, including the condensing unit, evaporator, defrost system and door gaskets. For a coolroom that is not holding temperature, call early.",
  },
  {
    q: "Do you work around trading hours?",
    a: "We try to. Tell us your trading hours and any loading dock or access limits when you book, and we will plan the visit around them where possible.",
  },
  {
    q: "Which brands do you repair?",
    a: "Commercial brands such as Bromic, Skope, Williams and True, and most other makes found in Sydney kitchens, shops and venues. Send the model number from the compliance plate if you have it.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Commercial refrigeration repair",
    name: "Commercial Refrigeration Repairs Sydney",
    description:
      "On-site commercial fridge, freezer and coolroom repairs across Sydney for restaurants, cafes, shops and food businesses, with a fixed quote before any work starts.",
    url: CANONICAL_URL,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Fridge Repairs Near Me",
      url: "https://fridgerepairsnearme.com.au/",
      email: enquiryEmail,
    },
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial refrigeration repair services in Sydney",
      itemListElement: commercialEquipment.map((n) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${n} repairs` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Commercial Refrigeration Repairs", item: CANONICAL_URL },
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

export default function CommercialFridgeRepairsPage() {
  usePageSeo({
    title: `Commercial Refrigeration Repairs Sydney | ${callOutFee} Call-Out`,
    description: `Commercial refrigeration repairs in Sydney for restaurants, cafes, shops, pubs and coolrooms. ${callOutFee} call-out, fixed quote first, ${warrantyPeriod} warranty.`,
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
            <p className="eyebrow eyebrow--light">Business Refrigeration</p>
            <h1>Commercial Refrigeration Repairs in Sydney</h1>
            <p className="hero__lede">
              A prep fridge that will not hold temperature, a glass-door cabinet running warm or
              a coolroom that has stopped cooling can cost you a day's stock. We repair
              commercial fridges, freezers and coolrooms for Sydney food businesses.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you early if a part has to
              be ordered.
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
            <h2>Commercial Refrigeration Repair in Sydney: What You Need to Know</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair commercial fridges, freezers, display cabinets and coolrooms across
              Sydney for restaurants, cafes, bakeries, grocers, pubs, caterers and suppliers. The
              call-out is {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Same-day visits depend on the day's
              bookings, so call early and tell us if stock is at risk. Need a home fridge looked
              at instead? See our{" "}
              <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="equipment">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Equipment</p>
            <h2>Commercial Fridges, Freezers and Coolrooms We Repair</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {commercialEquipment.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p style={{ marginTop: 14 }}>
              Looking for a specific type? See{" "}
              <a href="/commercial-freezer-repairs-sydney/">commercial freezer repairs</a>,{" "}
              <a href="/coolroom-repairs-sydney/">coolroom repairs</a>,{" "}
              <a href="/display-fridge-repairs-sydney/">display, bar and mini fridge repairs</a>{" "}
              or <a href="/ice-maker-repairs-sydney/">ice maker repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="breakdown">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Breakdown</p>
            <h2>Commercial Fridge Not Cooling? Do This First</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {firstSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p style={{ marginTop: 14 }}>
              Not an emergency? See our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair</a> page for how
              we handle urgent jobs.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Faults</p>
            <h2>Common Commercial Refrigeration Faults and Their Usual Causes</h2>
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
            Gas leak? See our <a href="/fridge-regas-sydney/">fridge regas</a> information.
          </p>
        </div>
      </section>

      <section className="section" id="sectors">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Who We Work For</p>
            <h2>Refrigeration Repairs for Sydney Food and Hospitality Businesses</h2>
          </div>

          <div className="grid grid-3">
            {sectorCards.map(({ icon: Icon, title, text }) => (
              <div className="card domestic__card" key={title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="service-checks">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Maintenance</p>
            <h2>Servicing and Maintenance Checks</h2>
            <p>
              Most commercial breakdowns start small. A dirty condenser, a tired gasket or a
              blocked drain can be caught before service stops. A service visit can be quoted on
              request.
            </p>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              <li>Clean and inspect the condenser coil and fan.</li>
              <li>Check door gaskets, hinges and drains.</li>
              <li>Test the thermostat, defrost cycle and fan motors.</li>
              <li>Record operating temperatures so you can show your records if asked.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cost" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What Decides the Price of a Commercial Fridge Repair</h2>
            <p>
              Our call-out is {callOutFee} incl. GST. You get a fixed quote after diagnosis, and
              we only go ahead if you agree.
            </p>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {priceFactors.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p style={{ marginTop: 14 }}>
              For a general Sydney market guide (not our prices), see the{" "}
              <a href="/#cost">fridge repair cost guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Commercial Refrigeration Repairs Across Sydney</h2>
            <p>
              Inner West · <a href="/fridge-repairs/western-sydney/">Western Sydney</a> ·{" "}
              <a href="/fridge-repairs/north-shore/">North Shore</a> ·{" "}
              <a href="/fridge-repairs/northern-beaches/">Northern Beaches</a> ·{" "}
              <a href="/fridge-repairs/eastern-suburbs/">Eastern Suburbs</a> ·{" "}
              <a href="/fridge-repairs/sydney-cbd/">Sydney CBD</a> ·{" "}
              <a href="/fridge-repairs/st-george/">St George</a> ·{" "}
              <a href="/fridge-repairs/sutherland-shire/">Sutherland Shire</a>
            </p>
            <p>
              <a href="/fridge-repairs/">See all service areas →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="commercial-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Commercial Refrigeration Repairs Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="commercial-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Commercial Refrigeration Repair</h2>
            <p>
              Tell us the equipment type, brand and model, what it is doing and whether stock is
              at risk. We will find the fault and quote before we start.
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
