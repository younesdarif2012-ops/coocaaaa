function demoEarn(pts, label) {
demoPoints = Math.min(demoPoints + pts, 100);
updateDemoUI(demoPoints, label);
}

function updateDemoUI(pts, label) {
const pct = (pts / 100) * 100;

// Core display
document.getElementById('demo-pts-val').textContent = pts;
document.getElementById('demo-bar').style.width = pct + '%';
const pb = document.getElementById('demo-progressbar');
pb.setAttribute('aria-valuenow', pts);

// Milestone dots in widget
['50','75','100'].forEach(function(t) {
  const el = document.getElementById('m' + t);
  if (el) el.classList.toggle('reached', pts >= parseInt(t));
});

// Reward cards (dark section)
updateRewardCards(pts);

// Milestone track (rewards section)
updateMilestoneTrack(pts);

// Leaderboard "You" row
const lbPts = document.getElementById('lb-your-pts');
const lbStatus = document.getElementById('lb-your-status');
if (lbPts) lbPts.textContent = pts;
if (lbStatus) {
  if (pts >= 100)     { lbStatus.textContent = '🏆 100pt Eligible'; lbStatus.className = 'lb-status-badge badge badge-red'; lbStatus.removeAttribute('style'); }
  else if (pts >= 75) { lbStatus.textContent = '✅ 75pt Eligible'; lbStatus.className = 'lb-status-badge badge'; lbStatus.style.cssText = 'background:#e3f5ea;color:#1a7a3a;'; }
  else if (pts >= 50) { lbStatus.textContent = '⏳ 50pt Eligible'; lbStatus.className = 'lb-status-badge badge'; lbStatus.style.cssText = 'background:#fff3cd;color:#7a5c00;'; }
  else                { lbStatus.textContent = 'In Progress'; lbStatus.className = 'lb-status-badge badge badge-grey'; lbStatus.removeAttribute('style'); }
}

// Notification
if (label) {
  const notif = document.getElementById('demo-notif');
  notif.textContent = '✓ ' + label;
  notif.classList.add('show');
  clearTimeout(notif._timer);
  notif._timer = setTimeout(function() { notif.classList.remove('show'); }, 2800);
}
}

function updateRewardCards(pts) {
var milestones = [
  { threshold: 50,  cardId: 'rc50',  statusId: 'rs50',  label: '50pt — Entered in Eligibility Pool' },
  { threshold: 75,  cardId: 'rc75',  statusId: 'rs75',  label: '75pt — Course Access Confirmed' },
  { threshold: 100, cardId: 'rc100', statusId: 'rs100', label: '100pt — Entered in Grand Prize Pool' }
];
milestones.forEach(function(m) {
  var card = document.getElementById(m.cardId);
  var status = document.getElementById(m.statusId);
  var reached = pts >= m.threshold;
  if (card) card.classList.toggle('unlocked', reached);
  if (status) {
    if (reached) {
      status.className = 'reward-status eligible';
      status.innerHTML = '<span class="status-dot"></span>' + m.label;
    } else {
      status.className = 'reward-status';
      status.innerHTML = '<span class="status-dot"></span>Not yet reached';
    }
  }
});
}

function updateMilestoneTrack(pts) {
var pct = (pts / 100) * 100;
var fill = document.getElementById('milestone-fill');
if (fill) fill.style.width = pct + '%';
[[50,'rm50'],[75,'rm75'],[100,'rm100']].forEach(function(item) {
  var el = document.getElementById(item[1]);
  if (el) {
    var reached = pts >= item[0];
    el.classList.toggle('active', reached);
    var dot = el.querySelector('.milestone-marker-dot');
    if (dot) dot.classList.toggle('active', reached);
  }
});
}

function demoReset() {
demoPoints = 0;
updateDemoUI(0, null);
document.getElementById('demo-notif').classList.remove('show');
}

/* ============================================================
 COUNTDOWN
 Backend: GET /api/campaign/meta → { endDate }
============================================================ */
function updateCountdown() {
var now = new Date();
var diff = CAMPAIGN_END_DATE - now;
if (diff <= 0) {
  document.getElementById('countdown').innerHTML = '<span style="opacity:.7">Campaign Ended</span>';
  return;
}
var d = Math.floor(diff / 86400000);
var h = Math.floor((diff % 86400000) / 3600000);
var m = Math.floor((diff % 3600000) / 60000);
var s = Math.floor((diff % 60000) / 1000);
document.getElementById('cd-days').textContent  = String(d).padStart(2,'0');
document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
document.getElementById('cd-mins').textContent  = String(m).padStart(2,'0');
document.getElementById('cd-secs').textContent  = String(s).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ============================================================
 SCROLL REVEAL
============================================================ */
var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(e) {
  if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

/* ============================================================
 NAV SCROLL
============================================================ */
window.addEventListener('scroll', function() {
document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 20);
});

/* ============================================================
 CATEGORY TABS
 Backend: GET /api/user/profile → { category: 'horeca' | 'takeaway' }
 Auto-select correct tab based on user profile on login.
============================================================ */
function switchCategory(cat) {
document.querySelectorAll('.cat-tab').forEach(function(t) {
  var isActive = t.id === 'tab-' + cat;
  t.classList.toggle('active', isActive);
  t.setAttribute('aria-selected', isActive ? 'true' : 'false');
});
document.querySelectorAll('.cat-content').forEach(function(c) {
  c.classList.toggle('active', c.id === 'cat-' + cat);
});
}

/* ============================================================
 KEYBOARD ACCESSIBILITY — tooltips
============================================================ */
document.querySelectorAll('.tooltip-icon').forEach(function(el) {
el.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    var box = el.nextElementSibling;
    box.style.opacity = box.style.opacity === '1' ? '0' : '1';
  }
});
});

/* ============================================================
 BACKEND INTEGRATION GUIDE
 -------------------------------------------------------
 1. AUTH:
    - GET /api/auth/session → { user: { id, name, businessName, category }, points, milestonesReached[] }
    - Replace demo widget with real user points on page load

 2. POINTS TRACKING:
    - GET  /api/user/points → { total, history: [{ task, pts, date }] }
    - POST /api/tasks/complete { taskId } → { newTotal, newMilestones[] }
    - taskIds: 'register', 'fill-form', 'subscribe', 'daily-login', 'preorder-1-bronze' etc.

 3. MILESTONES / ELIGIBILITY:
    - GET /api/user/milestones → { reached: [50, 75], eligibleFor: ['50pt-pool', '75pt-course'] }
    - Backend auto-adds user to eligibility lists when thresholds crossed

 4. LEADERBOARD:
    - GET /api/campaign/leaderboard?limit=10 → [{ rank, businessName, pts, status }]
    - WebSocket or polling for live updates: ws://api/campaign/leaderboard/live

 5. CATEGORY:
    - GET /api/user/profile → { category: 'horeca' | 'takeaway' }
    - Pass to switchCategory() on page load

 6. COUNTDOWN:
    - GET /api/campaign/meta → { endDate: ISO string, status: 'active' | 'closed' }

 7. REWARD REDEMPTION:
    - POST /api/rewards/claim { rewardId, eligibilityToken }
============================================================ */

// Initialize UI
updateDemoUI(0, null);

