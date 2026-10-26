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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/brands/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const brandGroups = [
  {
    group: "Everyday household brands",
    brands: ["Samsung", "LG", "Fisher & Paykel", "Westinghouse", "Electrolux", "Kelvinator", "Hisense", "Haier", "Beko", "Whirlpool"],
    note: "The makes found in most Sydney homes, from top-mount fridges to French door and side-by-side models.",
  },
  {
    group: "Premium and European brands",
    brands: ["Bosch", "Miele", "Smeg", "Liebherr", "Mitsubishi Electric"],
    note: "Built-in and integrated fridges, where replacement can mean cabinetry work and repair is often the better choice.",
  },
  {
    group: "Wine fridge brands",
    brands: ["Vintec", "Liebherr"],
    note: "Wine cabinets and coolers. See our wine fridge repairs page for the common faults.",
  },
  {
    group: "Commercial brands",
    brands: ["Bromic", "Skope", "Williams", "True"],
    note: "Display fridges, prep benches, upright freezers and cool room equipment in cafes, restaurants and shops.",
  },
];

const modelTips = [
  "Look for the rating label inside the fridge section, often on the left or right wall or behind the crisper drawer.",
  "On many fridges the label is also on the back or the side of the cabinet.",
  "Take a photo of the label. The model number and serial number help us check parts before we visit.",
  "Tell us the error code if the display shows one, and how long the fault has been going on.",
];

const faqs = [
  {
    q: "Which fridge brands do you repair in Sydney?",
    a: "Samsung, LG, Fisher & Paykel, Westinghouse, Electrolux, Kelvinator, Hisense, Haier, Bosch, Miele, Smeg, Whirlpool, Beko, Liebherr and Mitsubishi Electric, plus commercial brands such as Bromic, Skope, Williams and True, and Vintec wine fridges. Repair availability can vary by brand, model and fault.",
  },
  {
    q: "What if my brand is not on the list?",
    a: "Send us the make and model when you enquire. We can often help with brands that are not listed, and we will tell you before booking if we cannot.",
  },
  {
    q: "Are you the manufacturer's authorised service agent?",
    a: "No. We are an independent repair service. If your fridge is still under a manufacturer's warranty, check with the manufacturer first, as an independent repair may affect that cover.",
  },
  {
    q: "Do you have parts for my brand?",
    a: "Common parts such as fans, thermostats, sensors and door seals are often on the van. Brand-specific parts like control boards can need ordering, and we tell you early if that is the case.",
  },
  {
    q: "Does the brand change the repair cost?",
    a: `It can. Parts for premium and imported models usually cost more. As a general Sydney market guide (not our prices), most repairs cost between $150 and $650. Our call-out is ${callOutFee} and you get a fixed quote after diagnosis.`,
  },
  {
    q: "Do you repair built-in and integrated fridges?",
    a: "Yes. For built-in models, repair is often better than replacement, as replacing can involve cabinetry. We check the clearance around the fridge as well as the fridge.",
  },
  {
    q: "How do I find my fridge's model number?",
    a: "Check the rating label inside the fridge section or on the back of the cabinet, and send us a photo of it when you book.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge repair",
    name: "Fridge Brands We Repair in Sydney",
    description:
      "On-site fridge, freezer and commercial refrigeration repairs across Sydney for Samsung, LG, Fisher & Paykel, Westinghouse, Electrolux and other brands, with a fixed quote before any work starts.",
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
      { "@type": "ListItem", position: 2, name: "Fridge Brands We Repair", item: CANONICAL_URL },
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

export default function BrandsHubPage() {
  usePageSeo({
    title: `Fridge Brands We Repair in Sydney | All Major Makes`,
    description: `We repair Samsung, LG, Westinghouse, Fisher & Paykel, Electrolux, Haier, Hisense, Bosch, Miele and more in Sydney. ${callOutFee} call-out, fixed quote first.`,
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
            <p className="eyebrow eyebrow--light">Brand Coverage</p>
            <h1>Fridge Brands We Repair in Sydney</h1>
            <p className="hero__lede">
              Samsung, LG, Fisher &amp; Paykel, Westinghouse, Electrolux, Bosch, Miele and more.
              We repair household, premium, wine and commercial fridges across Sydney, whatever
              the brand on the door.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you plainly if a repair is
              not worth it.
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
            <h2>Which Fridge Brands Do We Repair?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair most makes found in Sydney homes and businesses. The call-out is{" "}
              {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. We are an independent repair service,
              not a manufacturer's agent. Repair availability can vary by brand, model and fault,
              so send the make and model when you enquire. For the faults we see most, see{" "}
              <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brands</p>
            <h2>Fridge Brands by Type</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Brands</th>
                  <th>What we usually see</th>
                </tr>
              </thead>
              <tbody>
                {brandGroups.map((g) => (
                  <tr key={g.group}>
                    <td>{g.group}</td>
                    <td>{g.brands.join(", ")}</td>
                    <td>{g.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hub-suburbs__note">
            Not listed? Send the make and model and we will check before booking. Related:{" "}
            <a href="/wine-fridge-repairs-sydney/">wine fridge repairs</a> and{" "}
            <a href="/commercial-fridge-repairs-sydney/">commercial refrigeration repairs</a>.
          </p>
        </div>
      </section>

      <section className="section" id="model-number">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Before You Book</p>
            <h2>How to Find Your Fridge's Model Number</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {modelTips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Brand Repairs Across Sydney</h2>
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
              <a href="/fridge-repair-cost-sydney/">Fridge repair cost guide</a> ·{" "}
              <a href="/fridge-repairs/">See all service areas →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="brands-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Brands We Repair: Your Questions</h2>
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

      <section className="section--dark section" id="brands-cta">
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
