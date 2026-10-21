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
  BuildingIcon,
  DropletIcon,
  AlertIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/commercial-freezer-repairs-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Urgent jobs prioritised where possible" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const freezerTypes = [
  { title: "Upright and underbench freezers", text: "Kitchen freezers that are opened all day. Door seals, door heaters and fans wear fastest." },
  { title: "Chest freezers", text: "Bulk storage at back-of-house and in shops. Lid seals, thermostats and condenser airflow are the usual checks." },
  { title: "Ice cream and display freezers", text: "Glass-top and glass-door units on shop floors. Frost on the glass, soft product and warm spots are the common complaints." },
  { title: "Walk-in freezer rooms", text: "Freezer rooms for butchers, suppliers and caterers, including evaporators, defrost heaters and condensing units." },
];

const frozenStockSteps = [
  "Keep the lid or door closed. A closed freezer holds its temperature far longer than one that is opened to check.",
  "Check the display or a probe thermometer and note the time and temperature.",
  "Look for a tripped breaker, a door not latching, or a thick wall of ice on the back panel.",
  "Move high-value or high-risk stock to another working freezer if you have one. Follow your food safety plan on what to keep.",
  "Call us with the freezer type, brand, what it is doing and how long it has been warm.",
];

const faultRows = [
  { fault: "Freezer is warm but the compressor runs", cause: "Dirty condenser, failed condenser fan, or a refrigerant leak", fix: "Clean and test the condenser, check fans, leak test before any regas" },
  { fault: "Thick frost or an ice wall inside", cause: "Failed defrost heater, defrost timer or sensor, or a door that does not seal", fix: "Test the defrost circuit and replace the failed part" },
  { fault: "Door or lid will not seal, ice around the gasket", cause: "Worn or torn gasket, warped door, or a failed door heater", fix: "Replace the gasket or heater and check the door alignment" },
  { fault: "Compressor clicks but will not start", cause: "Start relay or overload protector", fix: "Test the start components first; they cost much less than a compressor" },
  { fault: "Freezer cycles constantly and never reaches temperature", cause: "Low refrigerant, a blocked condenser or a weak compressor", fix: "Check pressures and airflow, then tell you if the compressor is the problem" },
  { fault: "Water on the floor after a defrost", cause: "Blocked drain line or a cracked drain tray", fix: "Clear the drain and repair the tray" },
];

const sectorCards = [
  {
    icon: BuildingIcon,
    title: "Butchers and Delis",
    text: "Meat and deli stock cannot sit warm. We diagnose quickly so you know whether to move product.",
  },
  {
    icon: DropletIcon,
    title: "Restaurants and Cafes",
    text: "Upright and underbench freezers that hold prepared stock, desserts and bulk ingredients through service.",
  },
  {
    icon: AlertIcon,
    title: "Ice Cream and Gelato Shops",
    text: "Display freezers where soft product, frost on the glass or warm spots hurt sales as well as stock.",
  },
  {
    icon: ShieldIcon,
    title: "Food Makers and Suppliers",
    text: "Freezer rooms and large cabinets where a failed unit can hold up production and deliveries.",
  },
];

const faqs = [
  {
    q: "How fast can you repair a commercial freezer in Sydney?",
    a: "Same-day visits may be available depending on the day's bookings. Call early, say what the freezer is holding and how long it has been warm, and we will prioritise the job where we can.",
  },
  {
    q: "How much does a commercial freezer repair cost?",
    a: `Our call-out is ${callOutFee}. After diagnosis you get a fixed quote before any work starts. The price depends on the fault and the part: a gasket or fan is a different job from a compressor.`,
  },
  {
    q: "Why does my freezer keep icing up?",
    a: "Usually the defrost heater, defrost timer or sensor has failed, or the door is not sealing and is letting in moist air. Do not chip the ice with a sharp tool, as it is easy to puncture the evaporator.",
  },
  {
    q: "My freezer is running but not freezing. What is wrong?",
    a: "Common causes are a dirty or blocked condenser, a failed condenser fan, a refrigerant leak or a weak compressor. We test each in turn and quote before replacing anything.",
  },
  {
    q: "Do you repair walk-in freezer rooms?",
    a: "Yes. We repair walk-in freezer rooms, including the evaporator, defrost system, door heaters and condensing unit. For a freezer room that is not holding temperature, call as early as you can.",
  },
  {
    q: "Is it worth repairing an old commercial freezer?",
    a: "Often, if the fault is a gasket, fan, thermostat or defrost part. If the compressor or sealed system has failed on an old unit, replacement can cost less, and we will tell you plainly after diagnosis.",
  },
  {
    q: "Do you also repair commercial fridges and coolrooms?",
    a: "Yes. See our commercial refrigeration repairs page for fridges, display cabinets and coolrooms.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Commercial freezer repair",
    name: "Commercial Freezer Repairs Sydney",
    description:
      "On-site commercial freezer and freezer room repairs across Sydney for butchers, restaurants, shops and food makers, with a fixed quote before any work starts.",
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
      name: "Commercial freezer repair services in Sydney",
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
      { "@type": "ListItem", position: 2, name: "Commercial Refrigeration Repairs", item: "https://fridgerepairsnearme.com.au/commercial-fridge-repairs-sydney/" },
      { "@type": "ListItem", position: 3, name: "Commercial Freezer Repairs", item: CANONICAL_URL },
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

export default function CommercialFreezerRepairsPage() {
  usePageSeo({
    title: `Commercial Freezer Repairs Sydney | ${callOutFee} Call-Out`,
    description: `Commercial freezer repairs across Sydney for butchers, restaurants, shops and food makers. ${callOutFee} call-out, fixed quote first, ${warrantyPeriod} warranty.`,
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
            <p className="eyebrow eyebrow--light">Commercial Freezers</p>
            <h1>Commercial Freezer Repairs in Sydney</h1>
            <p className="hero__lede">
              Frost building on the back wall, a chest freezer that will not hold temperature or
              a freezer room that has stopped cooling? We repair commercial freezers for Sydney
              butchers, restaurants, shops and food makers.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you early if a part has
              to be ordered.
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
            <h2>Commercial Freezer Repair in Sydney in Brief</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair upright, underbench and chest freezers, ice cream and display freezers
              and walk-in freezer rooms across Sydney. The call-out is {callOutFee}, the quote is
              fixed after diagnosis, and repairs carry a {warrantyPeriod} warranty on parts and
              labour. Most freezer faults come down to the defrost system, the door seal, a
              condenser fan or the compressor's start parts. Same-day visits depend on the day's
              bookings, so call early. For fridges, see{" "}
              <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a>;
              for walk-in rooms, see <a href="/coolroom-repairs-sydney/">coolroom repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="types">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Freezer Types</p>
            <h2>Commercial Freezers We Repair</h2>
          </div>

          <div className="grid grid-4">
            {freezerTypes.map((t) => (
              <div className="card domestic__card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="failure">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Freezer Down</p>
            <h2>Freezer Stopped Freezing? Protect Your Frozen Stock First</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {frozenStockSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p style={{ marginTop: 14 }}>
              Need it looked at today? See our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair</a> page.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Faults</p>
            <h2>Commercial Freezer Faults and What Usually Causes Them</h2>
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
        </div>
      </section>

      <section className="section" id="sectors">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Who We Work For</p>
            <h2>Freezer Repairs for Butchers, Kitchens and Food Makers</h2>
          </div>

          <div className="grid grid-4">
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

      <section className="section cost section--alt" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What a Commercial Freezer Repair Costs</h2>
            <p>
              Our call-out is {callOutFee} incl. GST. You get a fixed quote after diagnosis and we
              only go ahead if you agree. Price depends on the fault and the part. For a general
              Sydney market guide (not our prices), see the{" "}
              <a href="/#cost">fridge repair cost guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Commercial Freezer Repairs Across Sydney</h2>
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
            <h2>Commercial Freezer Repairs Sydney: Your Questions</h2>
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
            <h2>Book a Commercial Freezer Repair</h2>
            <p>
              Tell us the freezer type, brand and model, what it is doing and what it holds. We
              will find the fault and quote before we start.
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
