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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repair-cost-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const priceRows = [
  { job: "Call-out and diagnosis", range: "$150 – $250", detail: "Finding the actual fault: testing fans, sensors, defrost, seals and the compressor's start parts." },
  { job: "Door seal replacement", range: "$200 – $400", detail: "A new gasket fitted and the door checked for alignment. Common on fridges 8 years and older." },
  { job: "Fan, thermostat or sensor", range: "$250 – $500", detail: "Evaporator and condenser fans, temperature sensors and thermostats. Often fixed on the first visit when the part is on the van." },
  { job: "Defrost heater or control board", range: "$300 – $650", detail: "Defrost parts and electronic boards. Board prices vary a lot by brand and model." },
  { job: "Compressor or gas leak repair with regas", range: "$700 – $1,500+", detail: "The sealed system. Most of the cost is finding and fixing the leak or replacing the compressor." },
];

const decisionRows = [
  { situation: "Under about 8 years old, fault is a fan, sensor, seal or board", advice: "Repair is usually worthwhile." },
  { situation: "Built-in or integrated fridge", advice: "Repair is usually better, as replacement can involve cabinetry." },
  { situation: "8 to 10 years old, repair cost is under about half the price of a comparable new fridge", advice: "Repair can still make sense. Compare the quote with a new fridge of similar size and features." },
  { situation: "Over 10 years old and needs a compressor or sealed system repair", advice: "Replacement is often cheaper." },
  { situation: "A repair that fixes one fault but the fridge has several others coming", advice: "Ask us for a plain opinion after diagnosis." },
];

const quoteInfo = [
  "The brand and model number, from the label inside the door or on the back.",
  "What the fridge is doing: not cooling, leaking, iced up, noisy or an error code.",
  "How old it is and whether it is built in.",
  "Your suburb or postcode, and any building access rules.",
];

const faqs = [
  {
    q: "How much does fridge repair cost in Sydney?",
    a: `As a general Sydney market guide (not our prices), most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Our call-out is ${callOutFee} and you get a fixed quote after diagnosis, before any work starts.`,
  },
  {
    q: "What is the cheapest fridge repair?",
    a: "A door seal, a fan or a sensor are usually among the less expensive jobs. A blocked defrost drain or a loose connection can also be quick. Compressor and gas leak work costs the most.",
  },
  {
    q: "Why can't you give me an exact price over the phone?",
    a: "Two fridges with the same symptom can have different faults. We can talk through the likely causes from the make, model and symptoms, but we need to diagnose on site to give a fixed price.",
  },
  {
    q: "Is it worth repairing a fridge that is 10 years old?",
    a: "It depends on the fault. A seal, fan or sensor can still be worth fixing. A compressor or sealed system repair on a fridge over 10 years old is often better replaced, and we will tell you plainly after diagnosis.",
  },
  {
    q: "Do you charge if I decide not to go ahead with the repair?",
    a: `The call-out is ${callOutFee} incl. GST and covers the visit and diagnosis. You get a fixed quote and we only go ahead if you agree.`,
  },
  {
    q: "Are commercial fridge repairs priced differently?",
    a: "Yes. Commercial equipment, coolrooms and freezer rooms vary by size and parts. See commercial refrigeration repairs and coolroom repairs, then send us the model and symptoms for a fixed quote.",
  },
  {
    q: "Does the repair come with a warranty?",
    a: `Yes. Every completed repair carries a ${warrantyPeriod} warranty on parts and labour.`,
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge repair",
    name: "Fridge Repair Cost Guide Sydney",
    description:
      "A general guide to what fridge repairs cost in Sydney, with typical price ranges by fault, repair-or-replace advice and how to get a fixed quote.",
    url: CANONICAL_URL,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Fridge Repairs Near Me",
      url: "https://fridgerepairsnearme.com.au/",
      email: enquiryEmail,
    },
    areaServed: { "@type": "City", name: "Sydney" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Fridge Repair Cost", item: CANONICAL_URL },
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

export default function FridgeRepairCostPage() {
  usePageSeo({
    title: `Fridge Repair Cost Sydney | 2026 Price Guide`,
    description: `How much does fridge repair cost in Sydney? Typical prices by fault, when to repair or replace, and how to get a fixed quote. ${callOutFee} call-out incl. GST.`,
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
            <p className="eyebrow eyebrow--light">Price Guide</p>
            <h1>How Much Does Fridge Repair Cost in Sydney?</h1>
            <p className="hero__lede">
              Most fridge repairs in Sydney fall between $150 and $650, and sealed system work
              can reach $700 to $1,500 or more. Those figures are a general market guide, not our
              prices. Here is what drives the price, and how to tell whether a repair is worth it.
            </p>
            <p className="hero__sub">
              Our call-out is {callOutFee}, and you get a fixed quote before any work starts.
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
            <h2>Fridge Repair Prices in Sydney at a Glance</h2>
          </div>

          <div className="card highlight-card">
            <p>
              A typical fridge repair in Sydney costs $150 to $650, depending on the fault. A
              door seal, fan, thermostat or sensor sits at the lower end. A control board costs
              more, and a compressor or gas leak repair with regas usually costs $700 to $1,500 or
              more. These are general market ranges, not our prices, and prices change. We charge
              a {callOutFee} call-out (incl. GST) and give you a fixed quote after diagnosis, so
              you know the price before any work starts.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt cost" id="prices">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Typical Prices</p>
            <h2>Fridge Repair Cost by Type of Fault</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Typical price range</th>
                  <th>What is involved</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r) => (
                  <tr key={r.job}>
                    <td>{r.job}</td>
                    <td>{r.range}</td>
                    <td>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            General Sydney market guide, not our prices. Prices change over time. Our call-out is{" "}
            {callOutFee} incl. GST and your exact price is quoted after diagnosis. For gas
            leaks, see <a href="/fridge-regas-sydney/">fridge regas</a>.
          </p>
        </div>
      </section>

      <section className="section" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>When a Repair Is Worth the Money</h2>
            <p>
              Age and the type of fault matter more than the headline price. Use this as a
              starting point, then compare our quote with a like-for-like new fridge.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Your situation</th>
                  <th>Our advice</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((r) => (
                  <tr key={r.situation}>
                    <td>{r.situation}</td>
                    <td>{r.advice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hub-suburbs__note">
            Read more in our guide to{" "}
            <a href="/blog/repair-or-replace-your-fridge">repairing or replacing your fridge</a>.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="factors">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>What Affects the Price</p>
            <h2>Why Two Fridge Repairs Can Cost Very Different Amounts</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              <li>The fault: a door seal is a different job from a compressor.</li>
              <li>The brand and model: parts for premium and imported fridges usually cost more.</li>
              <li>Parts availability: common parts are often on the van, others have to be ordered.</li>
              <li>Fridge type: French door, side-by-side and built-in models take longer to work on.</li>
              <li>Access: lifts, strata rules and tight kitchens can add time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="quote-info">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Getting a Quote</p>
            <h2>What to Send Us for a Faster, Closer Quote</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {quoteInfo.map((q) => <li key={q}>{q}</li>)}
            </ul>
            <p style={{ marginTop: 14 }}>
              Some faults can be discussed from this information. Others need a visit before we
              can give a fixed price. See our{" "}
              <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>,{" "}
              <a href="/freezer-repairs-sydney/">freezer repairs</a> and{" "}
              <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="cost-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repair Cost Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="cost-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Get a Fixed Quote for Your Fridge</h2>
            <p>
              Tell us the brand and model, what the fridge is doing and your suburb. We will find
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
