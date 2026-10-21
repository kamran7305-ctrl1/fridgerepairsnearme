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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/coolroom-repairs-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Urgent jobs prioritised where possible" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const systemParts = [
  { title: "Condensing unit", text: "The outdoor or rooftop unit with the compressor and condenser. Dirty coils, failed fans and compressor start parts are the usual faults." },
  { title: "Evaporator", text: "The cooling coil and fans inside the room. Icing, failed fan motors and blocked drains show up here." },
  { title: "Defrost system", text: "Heaters, timers and sensors that melt frost off the evaporator. A failed defrost part can ice the room over." },
  { title: "Controller and sensors", text: "The thermostat or digital controller reads the room temperature. A faulty probe or controller can make a healthy system run wrong." },
  { title: "Door, gaskets and strip curtains", text: "A worn seal or a door left ajar makes the system work harder and can ice the evaporator." },
];

const warningSigns = [
  "The room takes longer than before to reach temperature.",
  "Ice on the evaporator, the floor or around the door.",
  "The compressor or condensing unit runs constantly or cycles on and off.",
  "Water pooling inside the room or under the evaporator.",
  "The temperature display swings or does not match a probe thermometer.",
  "A new noise from the fans or the condensing unit.",
];

const faultRows = [
  { fault: "Room is warm and the condensing unit runs", cause: "Dirty condenser, failed condenser fan or a refrigerant leak", fix: "Clean and test the condenser, check fans, leak test before any regas" },
  { fault: "Evaporator iced over", cause: "Failed defrost heater, timer or sensor, or a door not sealing", fix: "Test the defrost circuit and replace the failed part; check the gaskets and strip curtain" },
  { fault: "Water pooling inside the room", cause: "Blocked drain line or a failed drain heater", fix: "Clear the drain and test the drain heater" },
  { fault: "Condensing unit will not start", cause: "Start relay, contactor, overload or a tripped protection", fix: "Test the electrical components before suggesting a compressor" },
  { fault: "Room never reaches set temperature", cause: "Low refrigerant, a weak compressor or an undersized or overloaded system", fix: "Check pressures and loading, then tell you what is wrong" },
  { fault: "Temperature reading looks wrong", cause: "Faulty probe or controller", fix: "Check the reading against a calibrated thermometer and replace the probe or controller" },
];

const sectorCards = [
  {
    icon: BuildingIcon,
    title: "Restaurants and Caterers",
    text: "Walk-in cool rooms that hold the day's prep and event stock. A failure the day before a function is a serious problem, so call early.",
  },
  {
    icon: DropletIcon,
    title: "Butchers, Fishmongers and Greengrocers",
    text: "Cold rooms and freezer rooms where product value and freshness depend on a steady temperature.",
  },
  {
    icon: AlertIcon,
    title: "Pubs, Bars and Breweries",
    text: "Keg rooms and drinks cool rooms that work hard through summer and busy weekends.",
  },
  {
    icon: ShieldIcon,
    title: "Food Makers, Suppliers and Retailers",
    text: "Production and storage cool rooms in warehouses and shops, where downtime holds up orders.",
  },
];

const faqs = [
  {
    q: "How quickly can you repair a coolroom in Sydney?",
    a: "Same-day visits may be available depending on the day's bookings. Call early, say what the room holds and how long it has been warm, and we will prioritise the job where we can.",
  },
  {
    q: "How much does a cool room repair cost?",
    a: `Our call-out is ${callOutFee}. After diagnosis you get a fixed quote before any work starts. The price depends on the fault and the part, so we do not quote a flat figure. A gasket or fan is a different job from a compressor or condensing unit.`,
  },
  {
    q: "My cool room is not getting cold. What should I check?",
    a: "Check the power and the controller, make sure the door is closing fully, and look for ice on the evaporator. Do not chip ice with a sharp tool. If the room still will not cool, call us with the make of the condensing unit if you know it.",
  },
  {
    q: "Why is there ice building up inside my cool room?",
    a: "Usually the defrost system has failed (heater, timer or sensor), or the door is not sealing and is letting in moist air. Both are common and often fixed on the first visit.",
  },
  {
    q: "Do you repair walk-in freezer rooms as well?",
    a: "Yes. We repair walk-in freezer rooms as well as chillers, including the evaporator, defrost system, door heaters and condensing unit.",
  },
  {
    q: "Can you service a cool room as well as repair it?",
    a: "A service visit can be quoted on request. It usually covers cleaning the condenser, checking gaskets and drains, testing fans and defrost, and recording operating temperatures.",
  },
  {
    q: "Is it worth repairing an old cool room system?",
    a: "Often, if the fault is a fan, defrost part, controller or gasket. If the compressor or sealed system has failed on an old system, replacement can cost less, and we will tell you plainly after diagnosis.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Coolroom repair",
    name: "Coolroom Repairs Sydney",
    description:
      "On-site coolroom, cold room and walk-in freezer repairs across Sydney for restaurants, caterers, butchers and food businesses, with a fixed quote before any work starts.",
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
      name: "Coolroom repair services in Sydney",
      itemListElement: systemParts.map((t) => ({
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
      { "@type": "ListItem", position: 3, name: "Coolroom Repairs", item: CANONICAL_URL },
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

export default function CoolroomRepairsPage() {
  usePageSeo({
    title: `Coolroom Repairs Sydney | Walk-In Cool Room Service`,
    description: `Cool room, cold room and walk-in freezer repairs across Sydney for restaurants, butchers and suppliers. ${callOutFee} call-out, fixed quote first, ${warrantyPeriod} warranty.`,
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
            <p className="eyebrow eyebrow--light">Coolrooms and Cold Rooms</p>
            <h1>Coolroom &amp; Walk-In Freezer Repairs in Sydney</h1>
            <p className="hero__lede">
              A cool room that is slow to reach temperature, ice on the evaporator or a
              condensing unit that will not stop running? We repair coolrooms, cold rooms and
              walk-in freezers for Sydney food and hospitality businesses.
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
            <h2>Cool Room Repairs in Sydney in Brief</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair walk-in cool rooms, cold rooms and freezer rooms across Sydney, including
              the condensing unit, evaporator, defrost system, controller and door gaskets. The
              call-out is {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Same-day visits depend on the day's
              bookings, so call early. For fridges and display cabinets, see{" "}
              <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a>;
              for chest and upright freezers, see{" "}
              <a href="/commercial-freezer-repairs-sydney/">commercial freezer repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="system">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How It Works</p>
            <h2>What Is Inside a Cool Room System</h2>
            <p>
              A faulty cool room is rarely one part. Knowing the five main parts helps you
              describe the problem when you call.
            </p>
          </div>

          <div className="grid grid-3">
            {systemParts.map((t) => (
              <div className="card domestic__card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="warning-signs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Early Warning</p>
            <h2>Signs Your Cool Room Needs a Technician</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {warningSigns.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p style={{ marginTop: 14 }}>
              Safety tip: check that the inside door release works and is not blocked. If a room
              is down and stock is at risk, call us straight away; see{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Faults</p>
            <h2>Common Cool Room Faults and Their Usual Causes</h2>
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
            <h2>Cool Room Repairs for Kitchens, Butchers, Bars and Suppliers</h2>
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

      <section className="section section--alt" id="service-checks">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Maintenance</p>
            <h2>Cool Room Servicing and Maintenance</h2>
            <p>
              A service visit can be quoted on request. It catches small faults before the room
              stops holding temperature.
            </p>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              <li>Clean the condenser coil and check the condenser fan.</li>
              <li>Inspect the evaporator, fans, drain and drain heater.</li>
              <li>Test the defrost cycle, controller and probe.</li>
              <li>Check door gaskets, hinges and strip curtains.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cost" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What a Cool Room Repair Costs</h2>
            <p>
              Our call-out is {callOutFee} incl. GST. You get a fixed quote after diagnosis and we
              only go ahead if you agree. Price depends on the fault and the part. For a general
              Sydney market guide (not our prices), see the{" "}
              <a href="/fridge-repair-cost-sydney/">fridge repair cost guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Cool Room Repairs Across Sydney</h2>
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

      <section className="section" id="coolroom-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Cool Room Repairs Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="coolroom-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Cool Room Repair</h2>
            <p>
              Tell us the room size, the condensing unit make if you know it, what it is doing
              and what it holds. We will find the fault and quote before we start.
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
