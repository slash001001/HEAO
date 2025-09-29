
// HEAO Website - main.js

const i18n = {
  en: {
    nav: {home:"Home", services:"Services", process:"How it Works", research:"Research", pricing:"Packages", faq:"FAQ", contact:"Contact"},
    cta_book:"Book an Audit",
    cta_phrase:"All good at home?",
    cta_button:"Contact Us Now",
    cta_check:"Check if I’m good",
    cta_main:"You’re Good — Contact Us Now",
    cta_secondary:"Try the estimator",
    hero_title:"Cut your electricity bill. Keep your comfort.",
    hero_sub:"Technician-led home energy audits in simple Arabic & English with a clear, one-page report and ROI insights.",
    kpi1:"Households prefer a technician visit",
    kpi2:"Don't know which devices drive the bill",
    kpi3:"Start paying attention when bill reaches",
    why_title:"Why HEAO",
    why_cards:[
      ["Clarity, not gadgets","We identify your Top‑3 energy drivers and provide a simple plan first—no pushy device sales."],
      ["Arabic, simple ROI","You get a one‑page Arabic report in 48h with payback estimates and quick wins."],
      ["Trusted technicians","In‑home assessment by trained technicians who explain everything in plain language."]
    ],
    process_title:"How it Works",
    steps:[
      ["Book", "Pick a time and share a recent bill and basic details."],
      ["In‑home audit", "Our technician inspects ACs, heaters, insulation and habits. Meter readings where applicable."],
      ["One‑page plan", "Within 48h you get a concise plan: Top‑3 drivers, savings actions, and ROI."]
    ],
    research_title:"Research‑backed Approach",
    research_lead:"Our method is informed by 20 in‑depth interviews and a survey of 207 Saudi households.",
    research_points:[
      "38% want a technician audit over apps or alerts.",
      "41% don't know which devices consume most; ACs and heaters top the list.",
      "Households worry most when monthly bills reach SAR 700-1000+."
    ],
    pricing_title:"Packages",
    pkg:[
      ["Starter Audit","Best for apartments","In‑home inspection • 1‑page report (48h) • Quick wins checklist • WhatsApp tips (30 days)","Contact Us"],
      ["Comfort+","For larger homes","Everything in Starter • Room‑by‑room AC review • Heater timer plan • Family habit briefing","Contact Us"],
      ["Solar‑Ready","Plan long‑term","Everything in Comfort+ • Load profile snapshot • Efficiency road‑map • Solar/Smart add‑on ROI","Contact Us"]
    ],
    est_title:"Estimate Your Potential Savings",
    est_label_bill:"Average monthly bill (SAR)",
    est_label_acs:"Number of AC units",
    est_label_timer:"Water‑heater timers?",
    est_timer_opts:["Always","Sometimes","Never"],
    est_btn:"Estimate",
    est_note:"This is a directional estimate based on your inputs. Your actual savings depend on your home's specifics after an audit.",
    faq_title:"FAQ",
    faq:[
      ["Do you sell devices?","We start with behavior and low‑risk fixes. We only recommend devices if the ROI is clear."],
      ["How long is the visit?","Typically 60–90 minutes depending on the home size and number of AC units."],
      ["Do you need to access all rooms?","Yes, to assess AC usage, insulation, and idle loads we will need access to main areas."],
      ["How do I book?","Use the form below or email hello@heao.sa. We’ll confirm your appointment and share a short prep list."]
    ],
    contact_title:"Book an Audit",
    form: {
      name:"Full name",
      city:"City",
      email:"Email",
      phone:"Mobile",
      bill:"Average bill (SAR)",
      acs:"# of AC units",
      msg:"Anything else we should know?",
      submit:"Send request",
      help:"We will reply within one business day."
    },
    footer:"© " + new Date().getFullYear() + " Home Energy Advisory Office — HEAO"
  },
  ar: {
    nav: {home:"الرئيسية", services:"الخدمات", process:"آلية العمل", research:"الأبحاث", pricing:"الباقات", faq:"الأسئلة الشائعة", contact:"الحجز"},
    cta_book:"احجز زيارة",
    cta_phrase:"أمورك طيبة؟",
    cta_button:"كلمنا الآن",
    cta_check:"أتحقق إذا أموري طيبة",
    cta_main:"أمورك طيبة — كلمنا الآن",
    cta_secondary:"جرّب الحاسبة",
    hero_title:"خفّض فاتورتك… بدون التضحية بالراحة",
    hero_sub:"زيارات ميدانية يقودها فنيون وتقارير مختصرة باللغة العربية مع عائد الاستثمار بطريقة واضحة.",
    kpi1:"٪38 يفضّلون زيارة فني",
    kpi2:"٪41 لا يعرفون أكثر الأجهزة استهلاكاً",
    kpi3:"الاهتمام يبدأ عند فاتورة ~ ٧٠٠–١٠٠٠+ ريال",
    why_title:"لماذا مكتب ترشيد الطاقة المنزلية؟",
    why_cards:[
      ["وضوح بلا تعقيد","نحدّد أهم ٣ مسببات للاستهلاك ونبدأ بخطوات فورية — دون فرض شراء أجهزة."],
      ["عائد واضح وبالعربي","تستلم ملخص صفحة واحدة خلال ٤٨ ساعة مع تقدير التوفير وفترات الاسترداد."],
      ["فنيون موثوقون","زيارة منزلية من فنيين مدرَّبين يشرحون كل شيء بلغة بسيطة."]
    ],
    process_title:"آلية العمل",
    steps:[
      ["الحجز", "حدّد الموعد وشارك آخر فاتورة وبعض المعلومات."],
      ["الزيارة الميدانية", "نفحص المكيفات والسخانات والعزل والعادات. مع قراءات عداد عند الإمكان."],
      ["الخطة المختصرة", "تقرير صفحة واحدة خلال ٤٨ ساعة: أهم ٣ مسببات وحلول موصى بها وعائد الاستثمار."]
    ],
    research_title:"نهج مبني على بحث ميداني",
    research_lead:"اعتمدنا على ٢٠ مقابلة متعمقة واستبيان شمل ٢٠٧ أسرة سعودية.",
    research_points:[
      "٪38 يفضّلون زيارة فني على التطبيقات والتنبيهات.",
      "٪41 لا يعرفون الأجهزة الأكثر استهلاكاً؛ المكيفات والسخانات في القمة.",
      "القلق الأكبر يظهر عندما تصل الفاتورة إلى ٧٠٠–١٠٠٠+ ريال شهرياً."
    ],
    pricing_title:"الباقات",
    pkg:[
      ["الباقة المبدئية","مناسبة للشقق","زيارة ميدانية • تقرير صفحة واحدة (٤٨ ساعة) • قائمة خطوات سريعة • تنبيهات واتساب ٣٠ يوماً","كلمنا الآن"],
      ["راحة بلس","للمنازل الكبيرة","كل مزايا المبدئية • مراجعة غرفة‑غرفة للمكيفات • خطة مؤقّتات السخانات • توعية للأسرة","كلمنا الآن"],
      ["جاهزية للطاقة الشمسية","لخطة طويلة الأجل","كل مزايا راحة بلس • لمحة ملف حمل المنزل • خارطة طريق للكفاءة • دراسة جدوى للأجهزة/الطاقة الشمسية","كلمنا الآن"]
    ],
    est_title:"احسب التوفير المتوقع",
    est_label_bill:"متوسط الفاتورة الشهرية (ريال)",
    est_label_acs:"عدد أجهزة التكييف",
    est_label_timer:"هل تستخدم مؤقّتات للسخانات؟",
    est_timer_opts:["دائماً","أحياناً","أبداً"],
    est_btn:"احسب",
    est_note:"هذه نتيجة تقديرية تعتمد على مدخلاتك. التوفير الحقيقي يتحدد بعد الزيارة وتفاصيل المنزل.",
    faq_title:"الأسئلة الشائعة",
    faq:[
      ["هل تبيعون أجهزة؟","نبدأ بالسلوك والحلول منخفضة التكلفة فقط. نوصي بالأجهزة عند وضوح العائد."],
      ["كم تستغرق الزيارة؟","عادة ٦٠–٩٠ دقيقة حسب حجم المنزل وعدد المكيفات."],
      ["هل تحتاجون دخول جميع الغرف؟","نعم، لتقييم المكيفات والعزل والأحمال الخاملة."],
      ["كيف أحجز؟","املأ النموذج أدناه أو راسلنا على hello@heao.sa وسنؤكد الموعد ونرسل قائمة التحضير."]
    ],
    contact_title:"حجز زيارة",
    form: {
      name:"الاسم الكامل",
      city:"المدينة",
      email:"البريد الإلكتروني",
      phone:"الجوال",
      bill:"متوسط الفاتورة (ريال)",
      acs:"عدد المكيفات",
      msg:"ملاحظات إضافية",
      submit:"إرسال الطلب",
      help:"سنعاود الاتصال خلال يوم عمل واحد."
    },
    footer:"© " + new Date().getFullYear() + " مكتب ترشيد الطاقة المنزلية"
  }
};

let currentLang = 'ar'; // Arabic-first as requested

function applyI18n(){
  const d = i18n[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  // Helper to set textContent if element(s) exist
  const setOne = (sel, val) => { const el = document.querySelector(sel); if(el) el.textContent = val; };
  const setAll = (sel, list) => { const els = document.querySelectorAll(sel); if(!els||!els.length) return; els.forEach((el,i)=>{ if(list[i]!==undefined) el.textContent = list[i]; }); };
  // nav
  document.querySelectorAll('[data-i="nav-home"]').forEach(n=>n.textContent = d.nav.home);
  document.querySelectorAll('[data-i="nav-services"]').forEach(n=>n.textContent = d.nav.services);
  document.querySelectorAll('[data-i="nav-process"]').forEach(n=>n.textContent = d.nav.process);
  document.querySelectorAll('[data-i="nav-research"]').forEach(n=>n.textContent = d.nav.research);
  document.querySelectorAll('[data-i="nav-pricing"]').forEach(n=>n.textContent = d.nav.pricing);
  document.querySelectorAll('[data-i="nav-faq"]').forEach(n=>n.textContent = d.nav.faq);
  document.querySelectorAll('[data-i="nav-contact"]').forEach(n=>n.textContent = d.nav.contact);
  document.querySelectorAll('[data-i="cta-book"]').forEach(n=>n.textContent = d.cta_book);
  setOne('[data-i="hero-title"]', d.hero_title);
  setOne('[data-i="hero-sub"]', d.hero_sub);
  setOne('[data-i="kpi1"]', d.kpi1);
  setOne('[data-i="kpi2"]', d.kpi2);
  setOne('[data-i="kpi3"]', d.kpi3);
  setOne('[data-i="why-title"]', d.why_title);
  const cardsT = (d.why_cards||[]).map(x=>x[0]);
  const cardsP = (d.why_cards||[]).map(x=>x[1]);
  setAll('[data-i="why-card-title"]', cardsT);
  setAll('[data-i="why-card-text"]', cardsP);
  setOne('[data-i="process-title"]', d.process_title);
  setAll('[data-i="step-title"]', (d.steps||[]).map(x=>x[0]));
  setAll('[data-i="step-text"]', (d.steps||[]).map(x=>x[1]));
  setOne('[data-i="research-title"]', d.research_title);
  setOne('[data-i="research-lead"]', d.research_lead);
  setAll('[data-i="research-point"]', d.research_points||[]);
  setOne('[data-i="pricing-title"]', d.pricing_title);
  setAll('[data-i="pkg-title"]', (d.pkg||[]).map(x=>x[0]));
  setAll('[data-i="pkg-sub"]', (d.pkg||[]).map(x=>x[1]));
  setAll('[data-i="pkg-features"]', (d.pkg||[]).map(x=>x[2]));
  setAll('[data-i="pkg-cta"]', (d.pkg||[]).map(x=>x[3]));
  setOne('[data-i="est-title"]', d.est_title);
  setOne('[data-i="label-bill"]', d.est_label_bill);
  setOne('[data-i="label-acs"]', d.est_label_acs);
  setOne('[data-i="label-timer"]', d.est_label_timer);
  setOne('[data-i="est-btn"]', d.est_btn);
  setOne('[data-i="est-note"]', d.est_note);
  setOne('[data-i="faq-title"]', d.faq_title);
  setAll('[data-i="faq-q"]', (d.faq||[]).map(x=>x[0]));
  setAll('[data-i="faq-a"]', (d.faq||[]).map(x=>x[1]));
  setOne('[data-i="contact-title"]', d.contact_title);
  setOne('[data-i="form-name"]', d.form.name);
  setOne('[data-i="form-city"]', d.form.city);
  setOne('[data-i="form-email"]', d.form.email);
  setOne('[data-i="form-phone"]', d.form.phone);
  setOne('[data-i="form-bill"]', d.form.bill);
  setOne('[data-i="form-acs"]', d.form.acs);
  setOne('[data-i="form-msg"]', d.form.msg);
  const subEl = document.querySelector('[data-i="form-submit"]'); if(subEl) subEl.value = d.form.submit;
  setOne('[data-i="form-help"]', d.form.help);
  setOne('[data-i="footer"]', d.footer);

  // CTA bars & hero
  const setIf = (sel, text) => { const el = document.getElementById(sel); if(el) el.textContent = text; };
  setIf('topbar-text', d.cta_phrase);
  setIf('bottombar-text', d.cta_phrase);
  setIf('topbar-btn', d.cta_button);
  setIf('bottombar-btn', d.cta_button);
  setIf('topbar-ghost', d.cta_check);
  setIf('bottombar-ghost', d.cta_secondary);
  const heroMain = document.querySelector('[data-i="cta-pill-main"]'); if(heroMain) heroMain.textContent = d.cta_main;
  const heroGhost = document.querySelector('[data-i="cta-pill-ghost"]'); if(heroGhost) heroGhost.textContent = d.cta_secondary;

  // Swap charts based on language
  const charts = {
    'chart-uncertainty': ['chart_biggest_uncertainty_ar.png','chart_biggest_uncertainty_en.png'],
    'chart-solution': ['chart_solution_pref_ar.png','chart_solution_pref_en.png'],
    'chart-bills': ['chart_bill_sensitivity_ar.png','chart_bill_sensitivity_en.png'],
    'chart-heater': ['chart_heater_timers_ar.png','chart_heater_timers_en.png']
  };
  Object.entries(charts).forEach(([id,[ar,en]])=>{ const el=document.getElementById(id); if(el) el.src='assets/' + (currentLang==='ar'?ar:en); });
}

document.addEventListener('DOMContentLoaded', () => {
  const hasTopCTA = !!document.getElementById('top-cta-bar');
  const hasSiteHeader = !!document.querySelector('header.site-header');
  document.body.classList.toggle('has-cta', hasTopCTA);
  document.body.classList.toggle('site-has-header', hasSiteHeader);
  // Language toggle
  document.getElementById('lang-en').addEventListener('click', ()=>{ currentLang='en'; applyI18n(); });
  document.getElementById('lang-ar').addEventListener('click', ()=>{ currentLang='ar'; applyI18n(); });

  // Savings estimator (exists on index only)
  const estBtn = document.getElementById('estimate-btn');
  if(estBtn){ estBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const bill = parseFloat(document.getElementById('bill').value || '0');
    const acs = parseInt(document.getElementById('acs').value || '0');
    const timer = document.getElementById('timer').value; // always, sometimes, never
    
    let min=0.05, max=0.15; // baseline
    if (bill >= 1000){ min=0.18; max=0.32; }
    else if (bill >= 700){ min=0.12; max=0.25; }
    else if (bill >= 400){ min=0.08; max=0.18; }

    if (acs >= 5){ min += 0.02; max += 0.03; }
    if (timer === 'never'){ min += 0.03; max += 0.05; }
    if (timer === 'sometimes'){ min += 0.01; max += 0.02; }

    min = Math.min(min, 0.5);
    max = Math.min(max, 0.55);

    const sMin = Math.round(bill * min);
    const sMax = Math.round(bill * max);
    const msg = currentLang==='ar' ? 
      `تقدير مبدئي للتوفير: ${sMin} – ${sMax} ريال/شهر` :
      `Estimated monthly savings: SAR ${sMin} – ${sMax}`;
    document.getElementById('estimate-result').textContent = msg;
  }); }

  // Only apply full i18n when index elements are present
  const indexSentinel = document.querySelector('[data-i="hero-title"]');
  if(indexSentinel) applyI18n(); else {
    // Minimal i18n for CTA/nav if on a sub‑page without index sections
    const d = i18n[currentLang];
    const setIf = (sel, text) => { const el = document.getElementById(sel); if(el) el.textContent = text; };
    document.querySelectorAll('[data-i="nav-home"]').forEach(n=>n.textContent = d.nav.home);
    document.querySelectorAll('[data-i="nav-services"]').forEach(n=>n.textContent = d.nav.services);
    document.querySelectorAll('[data-i="nav-process"]').forEach(n=>n.textContent = d.nav.process);
    document.querySelectorAll('[data-i="nav-research"]').forEach(n=>n.textContent = d.nav.research);
    document.querySelectorAll('[data-i="nav-pricing"]').forEach(n=>n.textContent = d.nav.pricing);
    document.querySelectorAll('[data-i="nav-faq"]').forEach(n=>n.textContent = d.nav.faq);
    document.querySelectorAll('[data-i="nav-contact"]').forEach(n=>n.textContent = d.nav.contact);
    setIf('topbar-text', d.cta_phrase);
    setIf('bottombar-text', d.cta_phrase);
    setIf('topbar-btn', d.cta_button);
    setIf('bottombar-btn', d.cta_button);
    setIf('topbar-ghost', d.cta_check);
    setIf('bottombar-ghost', d.cta_secondary);
  }
});
