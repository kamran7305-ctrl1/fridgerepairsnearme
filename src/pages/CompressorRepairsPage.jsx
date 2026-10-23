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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-compressor-repairs-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const symptomRows = [
  { symptom: "Clicking every few minutes, then silence", cause: "Start relay or overload protector. Often the cheaper fault, not the compressor itself", compressor: "Unlikely at first" },
  { symptom: "Humming but not starting, then the breaker trips", cause: "A seized compressor or a failed start component", compressor: "Possible" },
  { symptom: "Runs constantly but the fridge is warm", cause: "Low refrigerant from a leak, a blocked system, or a worn compressor that cannot build pressure", compressor: "Possible. Leak test first" },
  { symptom: "Compressor is very hot, loud or rattling", cause: "Dirty condenser, failed fan, or a failing compressor", compressor: "Possible" },
  { symptom: "Fridge silent and warm, no clicking, display fine", cause: "Controller, board or wiring fault", compressor: "Unlikely" },
  { symptom: "Newer fridge with an error code and no cooling", cause: "Many newer fridges have an inverter compressor controlled by a board, and the board is often the fault", compressor: "Check the board first" },
];

const steps = [
  "Confirm the fault: we rule out the start relay, overload, fan, thermostat and defrost system first, because these cost far less than a compressor.",
  "Test the compressor: electrical checks on the windings and, where needed, pressure checks on the sealed system.",
  "Give you a fixed quote for repair or replacement, with the age of the fridge and the cost side by side.",
  "If you go ahead: recover the refrigerant, fit the new compressor and filter drier, pressure test, evacuate and recharge by weight. This work needs an ARCtick licensed technician.",
  "Run the fridge, check pressures and temperatures, and confirm it holds temperature before we leave.",
];

const decisionRows = [
  { situation: "Under about 8 years old, good condition", advice: "A compressor repair can be worth it, especially for a built-in or higher-end fridge." },
  { situation: "8 to 10 years old", advice: "Compare the quote with a comparable new fridge before deciding." },
  { situation: "Over 10 years old", advice: "Replacement is often cheaper. We tell you plainly after diagnosis." },
  { situation: "Commercial fridge, freezer or coolroom", advice: "Repair is often worth it, as the equipment costs more to replace and downtime is expensive. See commercial refrigeration repairs." },
];

const faqs = [
  {
    q: "How much does a fridge compressor repair cost in Sydney?",
    a: `As a general Sydney market guide (not our prices), a compressor or gas leak repair with regas typically falls between $700 and $1,500 or more. Our call-out is ${callOutFee} and you get a fixed quote after diagnosis, before any work starts.`,
  },
  {
    q: "How do I know the compressor has failed?",
    a: "You usually cannot tell without testing. Clicking and then silence is often a start relay. A compressor that hums but will not start, or runs but cannot cool, may have failed. We test the cheaper parts first and tell you what we find.",
  },
  {
    q: "Is it worth replacing a fridge compressor?",
    a: "It depends on the fridge. For a younger or built-in fridge, often yes. For a fridge over 10 years old, replacement is often cheaper. We give you both costs after diagnosis.",
  },
  {
    q: "Can a failing compressor be fixed without replacing it?",
    a: "Sometimes the fault is in the start relay, overload protector or controller, which are far cheaper to replace. Only if the compressor itself has failed does it need replacing.",
  },
  {
    q: "Do you repair compressors on commercial fridges and coolrooms?",
    a: "Yes. See our commercial refrigeration repairs and coolroom repairs for fridges, freezers and walk-in rooms.",
  },
  {
    q: "Does a new compressor come with a warranty?",
    a: `Yes. Every completed repair carries a ${warrantyPeriod} warranty on parts and labour.`,
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge compressor repair",
    name: "Fridge Compressor Repair Sydney",
    description:
      "Fridge, freezer and commercial compressor diagnosis, repair and replacement across Sydney by an ARCtick licensed technician, with a fixed quote before any work starts.",
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
      { "@type": "ListItem", position: 2, name: "Fridge Compressor Repair", item: CANONICAL_URL },
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

export default function CompressorRepairsPage() {
  usePageSeo({
    title: `Fridge Compressor Repair Sydney | Repair or Replace`,
    description: `Fridge compressor failure? Diagnosis, repair and replacement for home and commercial fridges in Sydney. ${callOutFee} call-out, fixed quote, ${warrantyPeriod} warranty.`,
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
            <p className="eyebrow eyebrow--light">Sealed System Repairs</p>
            <h1>Fridge Compressor Repair in Sydney</h1>
            <p className="hero__lede">
              The compressor is the most expensive part of a fridge, and also the part most often
              blamed for faults that are not the compressor. We test the cheaper causes first,
              then tell you plainly whether a compressor repair is worth the money.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, with the cost of repair and the age of
              the fridge side by side.
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
            <h2>Fridge Compressor Repair in Sydney in Brief</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We diagnose, repair and replace compressors on household and commercial fridges and
              freezers across Sydney. As a general Sydney market guide (not our prices), a
              compressor or gas leak repair with regas usually costs $700 to $1,500 or more. Our
              call-out is {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Many "dead compressor" faults turn out
              to be the start relay, a fan or a board, so we test those first. For leaks, see{" "}
              <a href="/fridge-regas-sydney/">fridge regas</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="symptoms">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Symptoms</p>
            <h2>Is It the Compressor, or Something Cheaper?</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>What you see</th>
                  <th>Likely cause</th>
                  <th>Compressor failure?</th>
                </tr>
              </thead>
              <tbody>
                {symptomRows.map((r) => (
                  <tr key={r.symptom}>
                    <td>{r.symptom}</td>
                    <td>{r.cause}</td>
                    <td>{r.compressor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How It Works</p>
            <h2>How We Diagnose and Replace a Compressor</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Is a Compressor Repair Worth It?</h2>
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
            General Sydney market guide, not our prices. Our call-out is {callOutFee} incl. GST
            and your exact price is quoted after diagnosis.{" "}
            <a href="/fridge-repair-cost-sydney/">See our fridge repair cost guide →</a> or read about{" "}
            <a href="/blog/repair-or-replace-your-fridge">repairing or replacing your fridge</a>.
          </p>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Compressor Repairs Across Sydney</h2>
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
              Also see <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>,{" "}
              <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a> and{" "}
              <a href="/coolroom-repairs-sydney/">coolroom repairs</a>.{" "}
              <a href="/fridge-repairs/">See all service areas →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="compressor-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Compressor Repair Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="compressor-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Get a Compressor Diagnosis and Fixed Quote</h2>
            <p>
              Tell us the brand and model, what the fridge is doing and your suburb. We will find
              the real fault and quote before we start.
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
