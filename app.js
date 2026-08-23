const leads = [
  { company:'Northstar Labs', name:'Maya Chen', title:'VP, Revenue', employees:'820', region:'Northeast', source:'Demo request', owner:'Jamie R.', ownerFirst:'Jamie', team:'Enterprise East', pool:'Enterprise', territory:'East territory', reps:'4 reps', calendar:'Today · 3:30 PM', open:'3:30 PM open' },
  { company:'Fieldwork', name:'Andre Mills', title:'Director, Ops', employees:'240', region:'Central', source:'Pricing page', owner:'Morgan T.', ownerFirst:'Morgan', team:'Mid-Market Central', pool:'Mid-market', territory:'Central territory', reps:'6 reps', calendar:'Tomorrow · 10:00 AM', open:'10:00 AM open' },
  { company:'Tandem Health', name:'Priya Rao', title:'Head of Growth', employees:'1,460', region:'West', source:'Contact sales', owner:'Alex K.', ownerFirst:'Alex', team:'Enterprise West', pool:'Enterprise', territory:'West territory', reps:'3 reps', calendar:'Today · 4:15 PM', open:'4:15 PM open' }
];
let leadIndex = 0;
let running = false;
const $ = (id) => document.getElementById(id);

function renderLead() {
  const lead = leads[leadIndex];
  $('lead-avatar').textContent = lead.name.split(' ').map(n => n[0]).join('');
  $('lead-name').textContent = lead.name;
  $('lead-role').textContent = `${lead.title} · ${lead.company}`;
  $('lead-employees').textContent = lead.employees;
  $('lead-region').textContent = lead.region;
  $('lead-source').textContent = lead.source;
  $('rule-size').textContent = `Company size ${Number(lead.employees.replace(',', '')) >= 500 ? '≥' : '<'} 500`;
  $('rule-pool').textContent = `${lead.pool} pool`;
  $('rule-region').textContent = `Region = ${lead.region}`;
  $('rule-territory').textContent = lead.territory;
  $('rule-owner').textContent = lead.owner;
  $('rule-calendar').textContent = lead.open;
  $('result-owner').textContent = lead.owner;
  $('result-team').textContent = lead.team;
  $('result-calendar').textContent = lead.calendar;
  $('explain-title').textContent = `Why did ${lead.name.split(' ')[0]} go to ${lead.ownerFirst}?`;
  $('explain-company').textContent = lead.company;
  $('explain-pool').textContent = lead.pool;
  $('explain-region').textContent = lead.region;
  $('explain-reps').textContent = lead.reps;
  $('explain-owner-priority').textContent = lead.ownerFirst;
  $('explain-owner-calendar').textContent = lead.ownerFirst;
}

$('next-lead').addEventListener('click', () => {
  if (running) return;
  leadIndex = (leadIndex + 1) % leads.length;
  renderLead();
});

$('run-route').addEventListener('click', () => {
  if (running) return;
  running = true;
  const btn = $('run-route');
  const steps = [...document.querySelectorAll('.rule-step')];
  const result = $('route-result');
  const meeting = $('meeting-card');
  btn.disabled = true;
  btn.setAttribute('aria-busy', 'true');
  steps.forEach((step, i) => { step.classList.remove('active'); step.querySelector('.step-check').textContent = i + 1; });
  result.classList.remove('shown'); meeting.classList.remove('shown');
  $('route-time').textContent = 'RUNNING…'; btn.textContent = 'Routing…';
  let i = 0;
  const stepDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 80 : 360;
  const timer = setInterval(() => {
    const step = steps[i];
    step.classList.add('active'); step.querySelector('.step-check').textContent = '✓';
    if (i === 3) result.classList.add('shown');
    if (i === 4) meeting.classList.add('shown');
    i += 1;
    if (i >= steps.length) {
      clearInterval(timer);
      setTimeout(() => {
        $('route-time').textContent = 'DEMO COMPLETE';
        btn.textContent = 'Run route again ⚡';
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
        running = false;
      }, stepDelay);
    }
  }, stepDelay);
});

const menuButton = $('menu-button');
const navLinks = $('nav-links');
const closeMenu = () => {
  navLinks.classList.remove('open');
  menuButton.textContent = '☰';
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
};

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  menuButton.textContent = isOpen ? '×' : '☰';
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

const copyButton = $('copy-command');
copyButton.addEventListener('click', async () => {
  const command = $('clone-command').textContent;
  try {
    await navigator.clipboard.writeText(command);
    copyButton.textContent = '✓';
    copyButton.setAttribute('aria-label', 'Clone command copied');
  } catch {
    copyButton.textContent = '!';
    copyButton.setAttribute('aria-label', 'Copy failed; select the command manually');
  }
  setTimeout(() => {
    copyButton.textContent = '⌘';
    copyButton.setAttribute('aria-label', 'Copy clone command');
  }, 1600);
});

window.addEventListener('scroll', () => document.body.classList.toggle('scrolled', window.scrollY > 10));
