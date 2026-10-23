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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-door-seal-replacement-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const warningSigns = [
  "The paper test fails: close the door on a sheet of paper and, if it slides out easily at any point, the seal is not gripping there.",
  "Frost or condensation builds up around the door edge, especially on a freezer.",
  "The door swings open slightly or does not close on its own.",
  "The seal is torn, cracked, split at a corner, or flattened and no longer springs back.",
  "Black mould is growing in the folds and will not wash off.",
  "The fridge runs longer than it used to, and the power bill has crept up.",
];

const sealTypes = [
  { title: "Push-in (dart) gaskets", text: "The common type on household fridges and freezers. A lip on the seal pushes into a channel around the door. Fitting is simple in principle, but getting the corners to sit flat takes care." },
  { title: "Magnetic gaskets", text: "A flexible magnet inside the seal pulls the door shut. A weak or cracked magnet strip is a common reason a seal stops gripping." },
  { title: "Commercial gaskets", text: "Display fridges, prep benches and upright freezers use heavier profiles that wear faster in daily use. Many fit into a channel or are held with a retaining strip." },
  { title: "Coolroom door seals", text: "Large perimeter seals and strip curtains on walk-in rooms. See our coolroom repairs for the full system." },
];

const diyRows = [
  { question: "Can the seal just be cleaned?", answer: "If it is dirty or slightly stiff, warm soapy water often helps. If it is torn, flat or the magnet has failed, cleaning will not fix it." },
  { question: "Can it be fixed with a hair dryer?", answer: "Warming a slightly curled seal can help it sit flat. It does not repair a tear or a failed magnet, and a damaged seal needs replacing." },
  { question: "Should I buy a seal online?", answer: "Only if you have the exact model number and are happy to fit it. Seals differ by door size, profile and fitting method, and a wrong one wastes money. We supply and fit the right one." },
  { question: "Is it worth replacing the seal on an old fridge?", answer: "Often yes. A seal is a low-cost repair compared with a compressor, and a fridge over 10 years old that is otherwise sound can be worth keeping. We tell you plainly after checking." },
];

const faqs = [
  {
    q: "How much does it cost to replace a fridge door seal in Sydney?",
    a: `As a general Sydney market guide (not our prices), a door seal replacement usually falls between $200 and $400. Our call-out is ${callOutFee} and you get a fixed quote after diagnosis, before any work starts. The price depends on the fridge model and how easy the seal is to source.`,
  },
  {
    q: "Do you supply the seal as well as fit it?",
    a: "Yes. We supply and fit the seal. Send us the brand and model number from the label inside the door or on the back, and we will check which seal you need. Availability depends on the model, and some seals have to be ordered.",
  },
  {
    q: "How do I know the door seal is faulty?",
    a: "Do the paper test: close the door on a sheet of paper. If it slides out easily, the seal is not gripping. Frost around the door edge, a door that drifts open, or a torn or flattened seal are other signs.",
  },
  {
    q: "Can you replace a freezer door seal too?",
    a: "Yes. Freezer seals are replaced the same way, and a worn one is a common cause of ice build-up. See our freezer repairs for other freezer faults.",
  },
  {
    q: "Do you replace seals on commercial fridges and cool rooms?",
    a: "Yes, on display fridges, prep benches, upright freezers and walk-in rooms. A worn gasket also makes the system work harder, so it is worth checking before it causes a bigger fault.",
  },
  {
    q: "Will a new seal fix a fridge that is not cooling?",
    a: "Sometimes. If warm air is getting in through a bad seal, a new seal can bring the temperature back. If the fridge is warm for another reason, a seal will not fix it, so we test the fans, sensors and defrost system too.",
  },
  {
    q: "Is a new seal covered by a warranty?",
    a: `Yes. Every completed repair carries a ${warrantyPeriod} warranty on parts and labour.`,
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge door seal replacement",
    name: "Fridge Door Seal Replacement Sydney",
    description:
      "Fridge, freezer and commercial door seal (gasket) supply and replacement across Sydney, fitted on site with a fixed quote before any work starts.",
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
      name: "Door seal replacement services in Sydney",
      itemListElement: sealTypes.map((t) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: t.title },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Fridge Door Seal Replacement", item: CANONICAL_URL },
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

export default function DoorSealReplacementPage() {
  usePageSeo({
    title: `Fridge Door Seal Replacement Sydney | Supplied & Fitted`,
    description: `Fridge and freezer door seal (gasket) replacement in Sydney. Supplied and fitted on site for homes and businesses. ${callOutFee} call-out, fixed quote first.`,
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
            <p className="eyebrow eyebrow--light">Door Seals and Gaskets</p>
            <h1>Fridge Door Seal Replacement in Sydney</h1>
            <p className="hero__lede">
              A door seal that no longer grips lets warm air in, builds frost, and makes the
              fridge run harder. We supply and fit new door seals (gaskets) on fridges, freezers
              and commercial units across Sydney.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you plainly if the seal is
              not the real problem.
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
            <h2>Fridge Door Seal Replacement in Sydney in Brief</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We supply and fit door seals for household fridges and freezers and for commercial
              fridges, freezers and cool rooms across Sydney. As a general Sydney market guide
              (not our prices), a door seal replacement usually costs $200 to $400. Our call-out
              is {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Send the brand and model number from
              the label to get the right seal. Fridge warm for another reason? See{" "}
              <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="signs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Warning Signs</p>
            <h2>How to Tell a Fridge Door Seal Needs Replacing</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {warningSigns.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="types">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Seal Types</p>
            <h2>Door Seals We Supply and Fit</h2>
          </div>

          <div className="grid grid-4">
            {sealTypes.map((t) => (
              <div className="card domestic__card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <p className="hub-suburbs__note" style={{ textAlign: "center" }}>
            Related: <a href="/freezer-repairs-sydney/">freezer repairs</a>,{" "}
            <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a> and{" "}
            <a href="/coolroom-repairs-sydney/">coolroom repairs</a>.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="diy">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Before You Buy a Seal</p>
            <h2>Clean, Repair or Replace the Seal?</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                {diyRows.map((r) => (
                  <tr key={r.question}>
                    <td>{r.question}</td>
                    <td>{r.answer}</td>
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
            <h2>What Happens When You Book a Seal Replacement</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              <li>You send the fridge brand and model number, and a photo of the damaged seal if you can.</li>
              <li>We check the seal and the door alignment, and confirm which seal you need.</li>
              <li>You get a fixed quote before we start, and we only go ahead if you agree.</li>
              <li>We fit the new seal, set the corners and test the door seal with the paper test.</li>
              <li>We check the fridge is holding temperature, and the repair carries a {warrantyPeriod} warranty.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section cost section--alt" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What Does a Fridge Door Seal Replacement Cost?</h2>
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
                  <td>Door seal replacement</td>
                  <td>$200 – $400</td>
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
            <h2>Door Seal Replacement Across Sydney</h2>
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

      <section className="section section--alt" id="seal-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Door Seal Replacement Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="seal-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Door Seal Replacement</h2>
            <p>
              Tell us the brand and model, where the seal is failing and your suburb. We will
              check which seal you need and quote before we start.
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
