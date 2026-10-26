// Per-brand content for the brand pages. Each brand has its own sections,
// checks and FAQs. Keep claims general and only state what the site can
// stand behind: $69 call-out, 1-year warranty, ARCtick licensed; prices
// are a general Sydney market guide, not our prices.

export const brandPages = {
  samsung: {
    brand: "Samsung",
    path: "/brands/samsung-fridge-repairs/",
    title: "Samsung Fridge Repairs Sydney | $69 Call-Out, Fixed Quote",
    description:
      "Samsung fridge and freezer repairs in Sydney. Not cooling, ice maker faults or an error code? $69 call-out, fixed quote first, 1-year warranty.",
    schemaDescription:
      "On-site Samsung fridge and freezer repairs across Sydney, including ice maker faults, cooling problems and error codes, with a fixed quote before any work starts.",
    eyebrow: "Samsung Fridges",
    h1: "Samsung Fridge Repairs in Sydney",
    lede: "Samsung fridge not cooling, ice maker frozen up, water leaking or an error code on the display? We repair Samsung French door, side-by-side and other Samsung fridges and freezers across Sydney.",
    quickTitle: "Samsung Fridge Repair in Sydney in Brief",
    quickAnswer:
      "We repair Samsung fridges and freezers across Sydney. Most Samsung jobs come down to the ice maker and water system, the fans and defrost system, or a control board that has stopped sending the right signals.",
    sections: [
      {
        id: "models",
        type: "cards",
        eyebrow: "Samsung Models",
        title: "Samsung Fridges We Repair",
        items: [
          { title: "French door fridges", text: "Large three- and four-door models with ice and water in the door or inside, and a lower freezer drawer." },
          { title: "Side-by-side fridges", text: "Two tall doors with an ice and water dispenser in the door, common in larger Sydney homes." },
          { title: "Top and bottom mount", text: "Standard household fridge-freezers, usually without a dispenser, so fewer water faults." },
          { title: "Smart and display models", text: "Samsung fridges with a touchscreen or digital panel. Send us the model number and any message on the screen." },
        ],
      },
      {
        id: "problems",
        type: "table",
        eyebrow: "Common Problems",
        title: "Samsung Fridge Problems We See Most",
        intro: "These are the usual causes, not a diagnosis. Two fridges with the same symptom can have different faults.",
        columns: ["What you notice", "Often caused by", "What we check"],
        rows: [
          ["Ice maker not making ice, or ice frozen into a block", "Frozen water line or ice maker, a failed water inlet valve or filter", "Water supply, valve, filter and the ice maker itself"],
          ["Water leaking from the dispenser or onto the floor", "Blocked defrost drain, loose water fitting or a worn door seal", "Drain, water lines and seals"],
          ["Fridge warm but freezer cold", "Failed evaporator fan or a frozen-over defrost system", "Fans, defrost heater and sensors"],
          ["Frost building on the freezer back wall", "Defrost heater, sensor or board fault", "Defrost circuit and board"],
          ["Error code or flashing display", "A sensor, fan or board reporting a fault", "The code against the model's service information"],
          ["Display is on but the fridge is not cooling", "Demo (showroom) mode on some models, or a board or compressor fault", "Settings first, then board and compressor"],
        ],
      },
      {
        id: "check-first",
        type: "list",
        ordered: true,
        eyebrow: "Before You Call",
        title: "Quick Checks on a Samsung Fridge",
        items: [
          "Check the display for a code, and write it down or take a photo. It speeds up the visit.",
          "Check the temperature settings and look in the manual for a demo (showroom) mode on your model, which can leave the display on with cooling off.",
          "If the ice maker has stopped, check the ice maker is switched on and the filter is not overdue.",
          "Make sure the fridge has clear space at the back and sides, and the vents inside are not blocked by food.",
        ],
        after: "Still not right? Send us the model number from the label inside the fridge and the code on the display.",
      },
      {
        id: "error-codes",
        type: "text",
        eyebrow: "Error Codes",
        title: "Samsung Error Codes: Send Us the Code",
        text:
          "Samsung fridges show codes for faults in sensors, fans, the defrost system and the ice maker. The meaning of a code can differ by model, so we read it against your model's service information instead of guessing. A code tells us where to look; it does not always tell us which part has failed, so we test before we quote.",
      },
      {
        id: "inverter",
        type: "text",
        eyebrow: "Compressor or Board?",
        title: "Samsung Inverter Compressor Faults",
        text:
          "Many newer Samsung fridges use an inverter compressor controlled by a board. When one of these fridges stops cooling, the board or a sensor is often checked before the compressor, because it costs far less to replace. We test both before quoting. For the full picture, see our compressor repair page.",
      },
    ],
    faqs: [
      {
        q: "Do you repair Samsung fridges in Sydney?",
        a: "Yes. We repair Samsung French door, side-by-side, top-mount and bottom-mount fridges and freezers across Sydney. Send the model number when you book so we can check parts first.",
      },
      {
        q: "Why is my Samsung fridge not cooling but the lights work?",
        a: "Common causes are a failed evaporator fan, a frozen defrost system, a sensor or board fault, or demo (showroom) mode on some models. Check the settings first, then call us with the model number and any code.",
      },
      {
        q: "Why is my Samsung ice maker not making ice?",
        a: "Usually a frozen water line, a failed water inlet valve, a filter that needs changing, or the ice maker itself. We check the water supply and valve first, then the ice maker.",
      },
      {
        q: "What does an error code on my Samsung fridge mean?",
        a: "It depends on the model. Send us a photo of the display and the model number, and we will read the code against the service information before we visit.",
      },
      {
        q: "How much does a Samsung fridge repair cost?",
        a: "As a general Sydney market guide (not our prices), most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Our call-out is $69 and you get a fixed quote after diagnosis, before any work starts.",
      },
      {
        q: "Are you a Samsung authorised service agent?",
        a: "No. We are an independent repair service. If your Samsung is still under the manufacturer's warranty, check with Samsung first, as an independent repair may affect that cover.",
      },
      {
        q: "Is it worth repairing an older Samsung fridge?",
        a: "Often, if it is under about 8 years old and the fault is a fan, sensor, seal or board. If it is over 10 years old and needs a compressor, replacement can cost less. We tell you plainly after diagnosis.",
      },
    ],
    related: [
      { href: "/ice-maker-repairs-sydney/", label: "Fridge ice maker repairs" },
      { href: "/domestic-fridge-repairs-sydney/", label: "Domestic fridge repairs" },
      { href: "/fridge-compressor-repairs-sydney/", label: "Compressor repair" },
      { href: "/fridge-repair-cost-sydney/", label: "Repair cost guide" },
      { href: "/brands/", label: "All brands" },
    ],
  },
};
