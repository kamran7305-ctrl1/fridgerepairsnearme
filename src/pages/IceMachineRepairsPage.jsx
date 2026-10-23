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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/ice-machine-repairs-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Urgent jobs prioritised where possible" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const machineTypes = [
  { title: "Undercounter ice makers", text: "Compact units behind bars and counters that make and store ice in one cabinet. Common in cafes, small bars and hotel minibars." },
  { title: "Modular (head and bin) machines", text: "A separate ice-making head sits on a storage bin. Used where a venue goes through a lot of ice, such as restaurants and pubs." },
  { title: "Flake and nugget machines", text: "Soft or chewable ice for drinks, food display and bubble tea. They have more moving parts, so wear and scale matter more." },
  { title: "Air- and water-cooled units", text: "Air-cooled machines need clear airflow and a clean condenser. Water-cooled units use a water supply to remove heat and have their own faults." },
];

const faultRows = [
  { fault: "No ice at all", cause: "Water inlet valve, blocked water supply, failed bin or float sensor, or a tripped safety control", fix: "Check supply and valve, test the sensors, then the controls" },
  { fault: "Low ice production", cause: "Dirty condenser, scale on the evaporator, a weak water pump or low refrigerant", fix: "Clean the condenser, descale, test the pump, then check the sealed system" },
  { fault: "Small, cloudy or hollow ice", cause: "Scale, poor water quality or a water filter that has not been changed", fix: "Clean and descale, replace the filter and check the water supply" },
  { fault: "Ice sticks together or will not drop", cause: "Harvest cycle fault, temperature sensor problem or dirty evaporator", fix: "Test the harvest and sensor, then clean" },
  { fault: "Water leak around the machine", cause: "Blocked drain, split hose, failed float valve or loose fitting", fix: "Trace the leak, clear the drain and replace the part" },
  { fault: "Ice tastes or smells off", cause: "A dirty bin or water line, slime or scale", fix: "Clean and sanitise the machine and replace the filter" },
  { fault: "Loud noise or constant running", cause: "Worn fan motor, pump or compressor", fix: "Locate the noise and replace the worn part" },
];

const sectorCards = [
  { icon: BuildingIcon, title: "Cafes and Restaurants", text: "Ice for drinks, display and food prep. A machine that stops on a hot weekend costs trade, so call early." },
  { icon: DropletIcon, title: "Bars, Pubs and Venues", text: "Heavy ice demand through busy nights. We check airflow and scale, which cause most production problems." },
  { icon: ShieldIcon, title: "Hotels and Function Venues", text: "Ice machines for rooms, bars and catering. Clean ice matters, so cleaning is part of the visit." },
  { icon: AlertIcon, title: "Bubble Tea Shops and Takeaways", text: "Nugget and flake machines that run all day. More moving parts mean more wear, so early repairs help." },
];

const faqs = [
  {
    q: "How quickly can you repair a commercial ice machine in Sydney?",
    a: "Same-day visits may be available depending on the day's bookings. Call early, say what the machine is doing and what the venue needs, and we will prioritise the job where we can.",
  },
  {
    q: "How much does a commercial ice machine repair cost?",
    a: `Our call-out is ${callOutFee}. After diagnosis you get a fixed quote before any work starts. The price depends on the fault and the part, so we do not quote a flat figure. See our general market guide on the cost page.`,
  },
  {
    q: "Why is my ice machine not making ice?",
    a: "The usual causes are a water supply problem, a failed water inlet valve, a dirty condenser, scale, or a sensor that thinks the bin is full. Check the water is on and the bin is not packed to the sensor, then call us.",
  },
  {
    q: "How often should a commercial ice machine be cleaned?",
    a: "Follow the manufacturer's instructions and your food safety plan. Ice is a food, so a dirty machine is a hygiene risk as well as a reliability one. We can clean and descale as part of a visit.",
  },
  {
    q: "Which ice machine brands do you repair?",
    a: "Commercial brands such as Ice-O-Matic, Hoshizaki and Scotsman, and most other makes found in Sydney venues. Send the model number from the data plate if you have it.",
  },
  {
    q: "Is it worth repairing an old ice machine?",
    a: "Often, if the fault is a valve, sensor, pump or fan. If the compressor or sealed system has failed on an old machine, replacement can cost less, and we will tell you plainly after diagnosis.",
  },
  {
    q: "What about the ice maker in my home fridge?",
    a: "That is a different job. See our fridge ice maker repairs page for household fridge ice makers and water dispensers.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Commercial ice machine repair",
    name: "Commercial Ice Machine Repairs Sydney",
    description:
      "On-site commercial ice machine repair and servicing across Sydney for cafes, restaurants, bars and venues, with a fixed quote before any work starts.",
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
      name: "Commercial ice machine repair services in Sydney",
      itemListElement: machineTypes.map((t) => ({
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
      { "@type": "ListItem", position: 3, name: "Commercial Ice Machine Repairs", item: CANONICAL_URL },
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

export default function IceMachineRepairsPage() {
  usePageSeo({
    title: `Commercial Ice Machine Repair Sydney | ${callOutFee} Call-Out`,
    description: `Commercial ice machine repair and servicing in Sydney: Ice-O-Matic, Hoshizaki, Scotsman and more for cafes, bars and restaurants. ${callOutFee} call-out, fixed quote first.`,
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
            <p className="eyebrow eyebrow--light">Commercial Ice Machines</p>
            <h1>Commercial Ice Machine Repairs in Sydney</h1>
            <p className="hero__lede">
              An ice machine that has stopped making ice, makes small or cloudy ice, or leaks onto
              the floor hurts a busy venue fast. We repair and service commercial ice machines for
              Sydney cafes, restaurants, bars and hotels.
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
            <h2>Commercial Ice Machine Repair in Sydney in Brief</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair undercounter, modular, flake and nugget ice machines across Sydney,
              including brands such as Ice-O-Matic, Hoshizaki and Scotsman. The call-out is{" "}
              {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Most problems come down to water
              supply, scale, a dirty condenser or a sensor. Same-day visits depend on the day's
              bookings, so call early. For a household fridge ice maker, see{" "}
              <a href="/ice-maker-repairs-sydney/">fridge ice maker repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="types">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Machine Types</p>
            <h2>Commercial Ice Machines We Repair</h2>
          </div>

          <div className="grid grid-4">
            {machineTypes.map((t) => (
              <div className="card domestic__card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Faults</p>
            <h2>Common Ice Machine Faults and Their Usual Causes</h2>
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

      <section className="section section--alt" id="sectors">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Who We Work For</p>
            <h2>Ice Machine Repairs for Venues and Food Businesses</h2>
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

      <section className="section" id="cleaning">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Cleaning and Servicing</p>
            <h2>Why Ice Machines Need Cleaning, Not Just Repair</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Ice is a food, and an ice machine sits in a warm, wet environment where scale and
              slime build up. A dirty machine makes less ice, wears its parts faster and can make
              ice taste off. A service visit can be quoted on request and usually covers cleaning
              and descaling, replacing the water filter, cleaning the condenser and checking the
              water valve, drain and sensors. Follow the manufacturer's instructions and your food
              safety plan on cleaning frequency.
            </p>
          </div>
        </div>
      </section>

      <section className="section cost section--alt" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What a Commercial Ice Machine Repair Costs</h2>
            <p>
              Our call-out is {callOutFee} incl. GST. You get a fixed quote after diagnosis and we
              only go ahead if you agree. Price depends on the fault and the part. For a general
              Sydney market guide (not our prices), see the{" "}
              <a href="/fridge-repair-cost-sydney/">fridge repair cost guide</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Ice Machine Repairs Across Sydney</h2>
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
              Also see <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a>{" "}
              and <a href="/coolroom-repairs-sydney/">coolroom repairs</a>.{" "}
              <a href="/fridge-repairs/">See all service areas →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="ice-machine-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Commercial Ice Machine Repairs Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="ice-machine-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Commercial Ice Machine Repair</h2>
            <p>
              Tell us the brand and model, what the machine is doing and your suburb. We will find
              the fault and quote before we start.
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
