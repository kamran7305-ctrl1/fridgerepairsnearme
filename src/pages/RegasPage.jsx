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
  DropletIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-regas-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const symptomRows = [
  { symptom: "Fridge warm, compressor runs, but the fan and seals are fine", likely: "A sealed system problem, which may include a refrigerant leak", regas: "Possible. Leak test first." },
  { symptom: "Fridge warm, no sound from the compressor", likely: "Start relay, overload or a controller fault", regas: "Unlikely" },
  { symptom: "Fridge warm, freezer cold", likely: "Failed evaporator fan or an iced-over defrost system", regas: "No" },
  { symptom: "Frost only on part of the evaporator, long run times", likely: "Low refrigerant after a leak, or a restriction in the system", regas: "Possible. Leak test first." },
  { symptom: "Fridge not cold, door seal torn or loose", likely: "Warm air getting in through the seal", regas: "No" },
  { symptom: "Hissing or an oily patch near the coil", likely: "A leak in the sealed system", regas: "Yes, after the leak is repaired" },
];

const properSteps = [
  "Confirm the symptoms and rule out the cheaper faults first: fans, seals, thermostat, defrost and the compressor's start parts.",
  "Leak test the sealed system to find where the refrigerant is escaping.",
  "Repair or replace the leaking part. Topping up without fixing the leak only delays the failure.",
  "Evacuate the system with a vacuum pump to remove air and moisture.",
  "Recharge with the correct refrigerant, by weight, as shown on the fridge's rating label.",
  "Run the fridge, check pressures and temperatures, and confirm it holds temperature before we leave.",
];

const refrigerantCards = [
  { title: "R600a (isobutane)", text: "Used in most modern household fridges and freezers. It is flammable, which is one reason a leak should be handled by a licensed technician and not by a gas kit." },
  { title: "R134a", text: "Used in many older household and commercial fridges. A different gas, a different charge and different service gear." },
  { title: "Check the label", text: "The refrigerant type and charge are printed on the rating label, usually inside the fridge or on the back. Send us a photo with your model number when you book." },
];

const faqs = [
  {
    q: "How much does it cost to regas a fridge in Sydney?",
    a: `As a general Sydney market guide (not our prices), a gas leak repair with regas typically falls between $700 and $1,500 or more, because the cost is mostly finding and fixing the leak. Our call-out is ${callOutFee} and you get a fixed quote after diagnosis, before any work starts.`,
  },
  {
    q: "How do you regas a fridge?",
    a: "A licensed technician finds and repairs the leak, evacuates the system with a vacuum pump and recharges it with the correct refrigerant by weight. It is not a job for a home gas kit.",
  },
  {
    q: "Does my fridge need regassing every few years?",
    a: "No. A sealed fridge system should not lose refrigerant in normal use. If the charge is low, there is a leak, and the leak is the problem to fix.",
  },
  {
    q: "Can I regas a fridge myself with a gas kit?",
    a: "We do not recommend it. Handling refrigerant requires a licence in Australia, modern fridges often use flammable gas, and a kit does not find or repair the leak.",
  },
  {
    q: "Do you regas freezers as well as fridges?",
    a: "Yes. A freezer is also a sealed system, so the process is the same: find the leak, repair it, evacuate and recharge by weight.",
  },
  {
    q: "Is it worth regassing an old fridge?",
    a: "Sometimes. If the fridge is under about 8 years old and the leak is in an accessible part, it can be worth repairing. If it is over 10 years old, replacement can cost less, and we will tell you plainly after diagnosis.",
  },
  {
    q: "Why is my fridge warm if it does not need regassing?",
    a: "Most warm fridges have a fault in a fan, a seal, the thermostat, the defrost system or the compressor's start parts. See our domestic fridge repairs page for the common causes.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge regas and gas leak repair",
    name: "Fridge Regas and Gas Leak Repair Sydney",
    description:
      "Fridge and freezer gas leak testing, repair and regas across Sydney by an ARCtick licensed technician, with a fixed quote before any work starts.",
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
      { "@type": "ListItem", position: 2, name: "Fridge Regas", item: CANONICAL_URL },
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

export default function RegasPage() {
  usePageSeo({
    title: `Fridge Regas Sydney | Gas Refill & Leak Repair`,
    description: `Fridge and freezer regas in Sydney. Leak test, repair and refill with the correct refrigerant. ${callOutFee} call-out, fixed quote first, ${warrantyPeriod} warranty.`,
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
            <h1>Fridge Regas &amp; Gas Leak Repair in Sydney</h1>
            <p className="hero__lede">
              Fridge or freezer running but not cooling, and someone has said it needs regassing?
              A sealed system does not use up its gas, so low refrigerant means a leak. We find
              the leak, fix it, then regas with the correct refrigerant.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you plainly when a repair
              is not worth it.
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
            <h2>Fridge Regas in Sydney: The Short Version</h2>
          </div>

          <div className="card highlight-card">
            <p>
              A fridge regas is a recharge of refrigerant after a leak has been found and
              repaired. It is rarely a simple top-up: a fridge's sealed system should not lose gas
              in normal use, so a low charge means a leak. We leak test, repair, evacuate and
              recharge by weight, and every completed repair carries a {warrantyPeriod} warranty on
              parts and labour. The call-out is {callOutFee} and the quote is fixed after
              diagnosis. Fridge warm for another reason? See{" "}
              <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="does-it-need-regas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Diagnosis</p>
            <h2>Does My Fridge Really Need a Regas?</h2>
            <p>
              Most warm fridges do not. This table shows which symptoms point to a leak and which
              do not.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>What you see</th>
                  <th>Likely cause</th>
                  <th>Regas needed?</th>
                </tr>
              </thead>
              <tbody>
                {symptomRows.map((r) => (
                  <tr key={r.symptom}>
                    <td>{r.symptom}</td>
                    <td>{r.likely}</td>
                    <td>{r.regas}</td>
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
            <p className="eyebrow" style={{ justifyContent: "center" }}>Our Process</p>
            <h2>How a Proper Fridge Regas Works</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {properSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="refrigerants">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Refrigerants</p>
            <h2>Which Gas Is in Your Fridge?</h2>
          </div>

          <div className="grid grid-3">
            {refrigerantCards.map((c) => (
              <div className="card domestic__card" key={c.title}>
                <span className="icon-badge"><DropletIcon /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="diy">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Before You Buy a Kit</p>
            <h2>Why Home Gas Kits Are Not a Fix</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Gas kits sold online and in stores do not find the leak, so the gas escapes again.
              In Australia, handling refrigerant requires a licence, and releasing it into the
              air is not allowed. Many modern fridges also run on flammable refrigerant, so
              guessing the gas or the amount is a safety risk as well as a waste of money. If you
              think your fridge has a leak, switch it off at the wall and call us.
            </p>
          </div>
        </div>
      </section>

      <section className="section cost section--alt" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What Does a Fridge Regas Cost in Sydney?</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Typical price range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Call-out and diagnosis</td>
                  <td>$150 – $250</td>
                </tr>
                <tr>
                  <td>Compressor or gas leak repair with regas</td>
                  <td>$700 – $1,500+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="hub-suburbs__note">
            General Sydney market guide, not our prices, and prices change. Our call-out is{" "}
            {callOutFee} incl. GST and your exact price is quoted after diagnosis.{" "}
            <a href="/fridge-repair-cost-sydney/">See our fridge repair cost guide →</a>
          </p>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Fridge Regas Across Sydney</h2>
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
              Freezer or business unit? See <a href="/freezer-repairs-sydney/">freezer repairs</a>{" "}
              and <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a>.{" "}
              <a href="/fridge-repairs/">See all service areas →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="regas-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Regas Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="regas-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Gas Leak Repair or Regas</h2>
            <p>
              Tell us the brand and model, what the fridge is doing and your suburb. A photo of the
              rating label helps. We will find the real fault and quote before we start.
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
