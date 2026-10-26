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

  lg: {
    brand: "LG",
    path: "/brands/lg-fridge-repairs/",
    title: "LG Fridge Repairs Sydney | $69 Call-Out, Fixed Quote",
    description:
      "LG fridge and freezer repairs in Sydney. Freezer not freezing, ice maker faults or an error code? $69 call-out, fixed quote first, 1-year warranty.",
    schemaDescription:
      "On-site LG fridge and freezer repairs across Sydney, including freezer and ice maker faults, linear and inverter compressor checks and error codes, with a fixed quote before any work starts.",
    eyebrow: "LG Fridges",
    h1: "LG Fridge Repairs in Sydney",
    lede: "LG freezer not freezing, fridge warm, ice maker stopped or an error on the display? We repair LG French door, side-by-side and other LG fridges and freezers across Sydney.",
    quickTitle: "LG Fridge and Freezer Repair in Sydney in Brief",
    quickAnswer:
      "We repair LG fridges and freezers across Sydney. LG jobs we see most involve the freezer fans and defrost system, the ice maker, the door seals and the electronic controls on models with an inverter or linear compressor.",
    sections: [
      {
        id: "features",
        type: "cards",
        eyebrow: "LG Features",
        title: "LG Fridge Features That Affect Repairs",
        intro: "Newer LG fridges have features that add parts to check. Tell us which features yours has.",
        items: [
          { title: "Door-in-Door", text: "A smaller door inside the main door. It adds extra seals and a panel to check as well as the main door." },
          { title: "InstaView", text: "A glass panel you knock on to see inside. It adds a lamp and panel to the usual door checks." },
          { title: "Ice maker in the fridge door", text: "On many LG French door models the ice maker sits in the fridge compartment. Water lines and cold air ducts both matter." },
          { title: "Smart (ThinQ) models", text: "Wi-Fi connected fridges that can report a reading. Send us a screenshot of any message in the app." },
        ],
      },
      {
        id: "common-faults",
        type: "table",
        eyebrow: "Common Problems",
        title: "LG Fridge and Freezer Problems We See",
        intro: "These are the usual causes, not a diagnosis. Two fridges with the same symptom can have different faults.",
        columns: ["What you notice", "Often caused by", "What we check"],
        rows: [
          ["Freezer not freezing, fridge section still cool", "Failed evaporator fan, frozen defrost system or a sensor", "Fans, defrost heater and sensors"],
          ["Fridge warm, freezer cold", "Air damper or fan fault between the two sections", "Damper, fan and airflow"],
          ["Ice maker stopped or ice frozen into a block", "Frozen water line, failed inlet valve, filter or ice maker module", "Water supply, valve, filter and module"],
          ["Water under the crisper or on the floor", "Blocked defrost drain or a loose water line", "Drain, lines and seals"],
          ["Door will not seal, frost around the edge", "Worn or misaligned door seals, including the inner door", "Seals, hinges and alignment"],
          ["Error on the display or in the app", "A sensor, fan or control board reporting a fault", "The reading against the model's service information"],
        ],
      },
      {
        id: "smart-diagnosis",
        type: "list",
        ordered: false,
        eyebrow: "Before You Call",
        title: "What to Send Us About Your LG Fridge",
        items: [
          "The model number, from the label inside the fridge section or on the back.",
          "A photo of any error shown on the display, or a screenshot from the LG app if your model supports it.",
          "Which section is warm: the fridge, the freezer or both, and whether the fans can be heard.",
          "Whether there is frost or ice where there should be none, and when the problem started.",
        ],
        after: "That is usually enough for us to plan the visit and bring the right parts.",
      },
      {
        id: "compressor",
        type: "text",
        eyebrow: "Compressor",
        title: "LG Linear and Inverter Compressors",
        text:
          "Many LG fridges use an inverter or linear compressor controlled electronically. On these models a fridge that has stopped cooling may have a fault in the control board or a sensor rather than the compressor itself, and the board costs far less to replace. We test the electronics first and tell you plainly if the compressor is the problem. See our compressor repair page for what that decision looks like.",
      },
      {
        id: "error-codes",
        type: "text",
        eyebrow: "Error Codes",
        title: "LG Error Codes: Send Us the Reading",
        text:
          "LG fridges report faults for sensors, fans, the defrost system and the ice maker. The meaning of a code can differ by model, so we read it against your model's service information instead of guessing. A code tells us where to look, but we still test the part before we quote.",
      },
    ],
    faqs: [
      {
        q: "Do you repair LG fridges in Sydney?",
        a: "Yes. We repair LG French door, side-by-side, top-mount and bottom-mount fridges and freezers across Sydney. Send the model number when you book so we can check parts first.",
      },
      {
        q: "Why is my LG freezer not freezing?",
        a: "Common causes are a failed evaporator fan, a frozen-over defrost system or a sensor. Frost on the back wall is often the first sign. Switch the fridge off and call us rather than leaving it running.",
      },
      {
        q: "Why is my LG ice maker not working?",
        a: "Usually a frozen water line, a failed water inlet valve, an overdue filter or the ice maker module. On models with the ice maker in the fridge door, a door seal or airflow fault can also freeze it up.",
      },
      {
        q: "What does the error on my LG fridge mean?",
        a: "It depends on the model. Send us a photo of the display or a screenshot from the app, plus the model number, and we will read it against the service information before we visit.",
      },
      {
        q: "Do you repair LG linear compressors?",
        a: "We test LG compressors and their electronic controls. In many cases the board or a sensor is the fault, not the compressor. We tell you what we find and quote before replacing anything.",
      },
      {
        q: "How much does an LG fridge repair cost?",
        a: "As a general Sydney market guide (not our prices), most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Our call-out is $69 and you get a fixed quote after diagnosis, before any work starts.",
      },
      {
        q: "Are you an LG authorised service agent?",
        a: "No. We are an independent repair service. If your LG is still under the manufacturer's warranty, check with LG first, as an independent repair may affect that cover.",
      },
    ],
    related: [
      { href: "/freezer-repairs-sydney/", label: "Freezer repairs" },
      { href: "/ice-maker-repairs-sydney/", label: "Fridge ice maker repairs" },
      { href: "/fridge-door-seal-replacement-sydney/", label: "Door seal replacement" },
      { href: "/fridge-compressor-repairs-sydney/", label: "Compressor repair" },
      { href: "/brands/", label: "All brands" },
    ],
  },
};
