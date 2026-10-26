import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  callOutFee,
  warrantyPeriod,
} from "../data/content";
import { MailIcon, WrenchIcon, ShieldIcon, CheckIcon, ClockIcon } from "./Icons";
import AccordionItem from "./Accordion";

const SITE = "https://fridgerepairsnearme.com.au";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const regionLinks = [
  ["Western Sydney", "western-sydney"],
  ["North Shore", "north-shore"],
  ["Northern Beaches", "northern-beaches"],
  ["Eastern Suburbs", "eastern-suburbs"],
  ["Sydney CBD", "sydney-cbd"],
  ["St George", "st-george"],
  ["Sutherland Shire", "sutherland-shire"],
];

// One component renders every brand page, but each brand supplies its own
// data: its own sections (cards, tables or lists, in its own order), its
// own checks, and its own FAQs, so the pages are not a template with the
// name swapped.
function Section({ section, alt }) {
  const cls = `section${alt ? " section--alt" : ""}`;
  return (
    <section className={cls} id={section.id}>
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          {section.intro && <p>{section.intro}</p>}
        </div>

        {section.type === "cards" && (
          <div className={`grid grid-${section.items.length === 4 ? 4 : 3}`}>
            {section.items.map((item) => (
              <div className="card domestic__card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {section.type === "table" && (
          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>{section.columns.map((c) => <th key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section.type === "list" && (
          <div className="card highlight-card">
            {section.ordered ? (
              <ol className="regas__steps">{section.items.map((s) => <li key={s}>{s}</li>)}</ol>
            ) : (
              <ul className="regas__steps">{section.items.map((s) => <li key={s}>{s}</li>)}</ul>
            )}
            {section.after && <p style={{ marginTop: 14 }}>{section.after}</p>}
          </div>
        )}

        {section.type === "text" && (
          <div className="card highlight-card">
            <p>{section.text}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function BrandPageTemplate({ data }) {
  const canonical = `${SITE}${data.path}`;
  const faqs = data.faqs;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonical}#service`,
      serviceType: `${data.brand} fridge repair`,
      name: `${data.brand} Fridge Repairs Sydney`,
      description: data.schemaDescription,
      url: canonical,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Fridge Repairs Near Me",
        url: `${SITE}/`,
        email: enquiryEmail,
      },
      areaServed: { "@type": "City", name: "Sydney" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Fridge Brands We Repair", item: `${SITE}/brands/` },
        { "@type": "ListItem", position: 3, name: `${data.brand} Fridge Repairs`, item: canonical },
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

  usePageSeo({
    title: data.title,
    description: data.description,
    canonical,
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
            <p className="eyebrow eyebrow--light">{data.eyebrow}</p>
            <h1>{data.h1}</h1>
            <p className="hero__lede">{data.lede}</p>
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
            <h2>{data.quickTitle}</h2>
          </div>
          <div className="card highlight-card">
            <p>
              {data.quickAnswer} The call-out is {callOutFee}, the quote is fixed after diagnosis,
              and repairs carry a {warrantyPeriod} warranty on parts and labour. We are an
              independent repair service, not {data.brand}'s service agent. See all{" "}
              <a href="/brands/">brands we repair</a>.
            </p>
          </div>
        </div>
      </section>

      {data.sections.map((section, i) => (
        <Section key={section.id} section={section} alt={i % 2 === 0} />
      ))}

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>{data.brand} Repairs Across Sydney</h2>
            <p>
              Inner West ·{" "}
              {regionLinks.map(([label, slug], i) => (
                <span key={slug}>
                  <a href={`/fridge-repairs/${slug}/`}>{label}</a>
                  {i < regionLinks.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
            <p>
              {data.related.map((r, i) => (
                <span key={r.href}>
                  <a href={r.href}>{r.label}</a>
                  {i < data.related.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="brand-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>{data.brand} Fridge Repairs Sydney: Your Questions</h2>
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

      <section className="section--dark section" id="brand-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a {data.brand} Fridge Repair</h2>
            <p>
              Tell us the model number, what the fridge is doing, any error code and your suburb.
              We will find the fault and quote before we start.
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
