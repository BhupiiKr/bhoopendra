@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Merriweather:wght@400;700;900&family=Source+Sans+3:wght@400;500;600;700&display=swap');

:root {
  --navy-950: #031126;
  --navy-900: #061a35;
  --navy-850: #082344;
  --navy-800: #0b2c52;
  --blue: #269df4;
  --blue-bright: #37b9f5;
  --blue-line: rgba(36, 153, 238, .62);
  --gold: #f4bd45;
  --white: #f5f7fc;
  --muted: #b8c8dc;
  --panel: rgba(5, 34, 68, .78);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--white);
  background: var(--navy-950);
  font-family: "Source Sans 3", Arial, sans-serif;
}
a { color: inherit; text-decoration: none; }
button { font: inherit; }

.portfolio-shell {
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 228px minmax(0, 1fr);
  background:
    radial-gradient(ellipse at 78% 30%, rgba(20, 112, 196, .25), transparent 42%),
    linear-gradient(135deg, #071a34 0%, #031126 100%);
  transition: grid-template-columns .25s ease;
}
.portfolio-shell.sidebar-collapsed { grid-template-columns: 76px minmax(0, 1fr); }

.sidebar {
  min-width: 0;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 25px 15px 18px;
  border-right: 1px solid rgba(48, 157, 240, .38);
  background: linear-gradient(180deg, rgba(3, 22, 45, .98), rgba(3, 27, 54, .96));
}
.identity { display: flex; align-items: center; gap: 12px; padding: 5px 5px 31px; min-width: 0; }
.monogram {
  width: 55px; height: 55px; flex: 0 0 55px;
  display: grid; place-items: center;
  border: 1px solid #188de7; border-radius: 15px;
  background: linear-gradient(145deg, #0b4b91, #082c5d);
  color: white; font: 900 23px "Merriweather", serif;
  box-shadow: 0 8px 24px rgba(0, 128, 255, .16);
}
.identity-copy { min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.identity-copy strong { font: 700 16px "Merriweather", serif; line-height: 1.35; }
.identity-copy small { color: #c2d0e0; font-size: 13px; white-space: nowrap; }

.side-nav { display: grid; gap: 9px; }
.side-nav a {
  min-height: 46px; padding: 0 13px;
  display: flex; align-items: center; gap: 14px;
  border-radius: 11px; color: #e4edf8;
  font-size: 16px; font-weight: 600;
  transition: background .2s ease, transform .2s ease;
}
.side-nav a:hover { background: rgba(36, 153, 238, .15); transform: translateX(2px); }
.side-nav a.active { color: white; background: linear-gradient(100deg, #1688ec, #299ff5); box-shadow: 0 8px 20px rgba(0, 119, 255, .2); }
.nav-icon { width: 23px; text-align: center; font-size: 21px; }
.sidebar-motto {
  margin: auto 0 22px; padding: 0 4px;
  display: flex; flex-direction: column; align-items: center;
  color: var(--gold); font: 600 31px/1.25 "Dancing Script", cursive;
  transform: rotate(-3deg);
}
.sidebar-motto i { width: 82px; height: 2px; margin-top: 9px; background: var(--gold); transform: rotate(-8deg); }
.sidebar-bottom { color: #7893b1; font-size: 9px; letter-spacing: 1.4px; text-align: center; white-space: nowrap; }

.workspace { min-width: 0; min-height: 0; display: flex; flex-direction: column; }
.topbar {
  height: 72px; flex: 0 0 72px; display: flex; align-items: center;
  justify-content: space-between; gap: 18px; padding: 0 30px 0 20px;
  border-bottom: 1px solid rgba(44, 147, 226, .45);
  background: rgba(3, 22, 45, .78); backdrop-filter: blur(14px);
}
.topbar-left { display: flex; align-items: center; gap: 25px; min-width: 0; }
.sidebar-toggle {
  width: 50px; height: 43px; flex: 0 0 50px;
  display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px;
  border: 1px solid rgba(34, 146, 236, .5); border-radius: 12px;
  background: rgba(4, 29, 58, .8); cursor: pointer;
}
.sidebar-toggle span { width: 22px; height: 2px; background: white; border-radius: 2px; }
.topbar-name { display: flex; flex-direction: column; gap: 2px; }
.topbar-name strong { font: 700 17px "Merriweather", serif; }
.topbar-name small { color: var(--muted); font-size: 13px; }
.topbar-links { display: flex; align-items: center; gap: clamp(12px, 2.2vw, 35px); }
.topbar-links a { display: flex; align-items: center; gap: 7px; color: #e9f1fb; font-size: 15px; white-space: nowrap; }
.topbar-links a:first-letter { color: var(--blue-bright); }
.topbar-links a:hover { color: var(--blue-bright); }

.dashboard {
  min-height: 0; flex: 1; overflow: hidden;
  padding: 28px 26px 16px;
  display: grid; grid-template-rows: minmax(270px, 1.2fr) auto minmax(210px, .9fr) 22px;
  gap: 16px;
  background-image:
    linear-gradient(90deg, rgba(3, 17, 38, .96) 0%, rgba(3, 21, 45, .85) 54%, rgba(3, 17, 38, .25) 100%),
    url("/mountain-bg.png");
  background-size: cover;
  background-position: center;
}
.hero-panel {
  min-height: 0; display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(220px, .8fr);
  align-items: center; gap: 26px; padding: 8px 28px 0;
  background: linear-gradient(90deg, rgba(2, 19, 42, .45), rgba(2, 19, 42, .08));
  border-radius: 18px;
}
.hero-copy { min-width: 0; max-width: 760px; }
.eyebrow { display: flex; align-items: center; gap: 9px; color: #d7e7f7; font-size: 12px; font-weight: 700; letter-spacing: 3px; }
.live-dot { width: 7px; height: 7px; border-radius: 50%; background: #54d6bd; box-shadow: 0 0 10px #54d6bd; }
.hero-copy h1 { margin: 14px 0 6px; color: #f8f8fb; font: 900 clamp(34px, 3.3vw, 56px)/1.12 "Merriweather", Georgia, serif; letter-spacing: -1.7px; }
.hero-copy h1 em { color: var(--gold); font-style: normal; }
.hero-copy h2 { margin: 0; color: #e6edf7; font: 700 clamp(16px, 1.45vw, 21px) "Merriweather", Georgia, serif; }
.handwritten { margin: 13px 0 14px; color: var(--gold); font: 600 clamp(21px, 2.1vw, 31px)/1.3 "Dancing Script", cursive; }
.hero-description { max-width: 650px; margin: 0; padding: 2px 0 2px 17px; border-left: 3px solid var(--gold); color: #e4edf8; font-size: 16px; line-height: 1.5; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 13px; margin-top: 19px; }
.button { min-height: 43px; padding: 0 20px; display: inline-flex; align-items: center; justify-content: center; gap: 12px; border-radius: 11px; font-size: 15px; font-weight: 700; }
.button-blue { color: #03203e; background: linear-gradient(100deg, #1c9ff1, #40c0f5); box-shadow: 0 7px 20px rgba(0, 142, 255, .18); }
.button-outline { color: white; border: 1px solid #d7e6f8; background: rgba(5, 25, 50, .6); }
.button:hover { transform: translateY(-2px); }

.portrait-wrap { position: relative; width: min(100%, 255px); justify-self: center; padding-bottom: 35px; }
.portrait-glow { position: absolute; inset: 12% -25% 20%; background: rgba(34, 151, 255, .26); filter: blur(40px); border-radius: 50%; }
.portrait-frame {
  position: relative; z-index: 1; height: clamp(245px, 34vh, 330px);
  overflow: hidden; border: 2px solid var(--gold); border-radius: 28px;
  background: linear-gradient(145deg, #263d57, #071a32);
  box-shadow: 0 12px 32px rgba(0, 0, 0, .38), 0 0 18px rgba(244, 189, 69, .13);
}
.portrait { object-fit: cover; object-position: center 22%; }
.portrait-label {
  position: absolute; z-index: 2; left: 12px; right: 12px; bottom: 0;
  display: flex; flex-direction: column; gap: 4px; padding: 11px 13px;
  border: 1px solid rgba(244, 189, 69, .25); border-radius: 10px;
  background: rgba(4, 23, 47, .94); box-shadow: 0 7px 20px rgba(0, 0, 0, .2);
}
.portrait-label strong { font: 700 13px "Merriweather", serif; }
.portrait-label span { color: var(--gold); font-size: 11px; }

.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
.stat-card {
  min-width: 0; min-height: 76px; display: flex; align-items: center; gap: 14px;
  padding: 12px 16px; border: 1px solid var(--blue-line); border-radius: 15px;
  background: linear-gradient(115deg, rgba(4, 43, 82, .9), rgba(3, 28, 58, .86));
  box-shadow: inset 0 1px rgba(255,255,255,.03);
}
.stat-icon { color: var(--gold); font-size: 29px; line-height: 1; }
.stat-card div { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.stat-card strong { font: 700 14px "Merriweather", serif; }
.stat-card small { color: #d1deed; font-size: 13px; }

.lower-grid { min-height: 0; display: grid; grid-template-columns: 1fr 1fr 1.08fr; gap: 16px; }
.info-panel {
  min-width: 0; min-height: 0; padding: 16px 18px 12px;
  border: 1px solid var(--blue-line); border-radius: 17px;
  background: linear-gradient(145deg, rgba(4, 38, 75, .94), rgba(3, 24, 51, .92));
  box-shadow: 0 10px 28px rgba(0, 0, 0, .12);
}
.info-panel h3 { display: flex; align-items: center; gap: 12px; margin: 0 0 13px; font: 700 19px "Merriweather", serif; }
.panel-icon { color: var(--blue-bright); font: 700 28px "Source Sans 3", sans-serif; }
.code-icon { font-size: 22px; }
.interest-list, .project-list, .publication-list { list-style: none; margin: 0; padding: 0; }
.interest-list { display: grid; gap: 8px; }
.interest-list li { position: relative; padding-left: 20px; color: #e7eef8; font-size: 14px; line-height: 1.35; }
.interest-list li::before { content: ""; position: absolute; left: 2px; top: 7px; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); }
.project-list { display: grid; gap: 13px; }
.project-list li { color: #e7eef8; font-size: 14px; line-height: 1.35; }
.project-list li::before { content: "✓"; margin-right: 10px; color: var(--gold); font-weight: 800; }
.project-list b { color: #fff; }
.project-list span { color: #c9d8e9; }
.publication-list { display: grid; }
.publication-list li { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; padding: 10px 0; border-bottom: 1px solid rgba(47, 151, 229, .4); color: #e6edf7; font-size: 13px; line-height: 1.35; }
.publication-list li:first-child { padding-top: 0; }
.publication-list li:last-child { border-bottom: 0; }
.publication-list li span { flex: 0 0 auto; color: var(--blue-bright); font-size: 17px; }

.dashboard-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #829bb8; font-size: 11px; }
.dashboard-footer a { color: var(--gold); }

.sidebar-collapsed .sidebar { padding-left: 10px; padding-right: 10px; }
.sidebar-collapsed .identity { justify-content: center; padding-left: 0; padding-right: 0; }
.sidebar-collapsed .identity-copy, .sidebar-collapsed .nav-label, .sidebar-collapsed .sidebar-motto, .sidebar-collapsed .sidebar-bottom { display: none; }
.sidebar-collapsed .side-nav a { justify-content: center; padding: 0; }
.sidebar-collapsed .nav-icon { font-size: 23px; }

@media (min-width: 1500px) {
  .dashboard { padding: 30px 36px 18px; gap: 18px; }
  .hero-panel { padding-left: 28px; }
  .stats-grid { gap: 18px; }
  .stat-card { min-height: 84px; }
  .info-panel { padding: 19px 21px 14px; }
  .interest-list { gap: 10px; }
  .project-list { gap: 15px; }
}
@media (max-width: 1100px) {
  .portfolio-shell { grid-template-columns: 205px minmax(0, 1fr); }
  .portfolio-shell.sidebar-collapsed { grid-template-columns: 70px minmax(0, 1fr); }
  .dashboard { padding: 20px 18px 12px; grid-template-rows: minmax(250px, 1.1fr) auto minmax(205px, .9fr) 20px; gap: 12px; }
  .hero-panel { padding: 4px 12px 0; grid-template-columns: minmax(0, 1.5fr) minmax(180px, .7fr); gap: 14px; }
  .portrait-wrap { width: min(100%, 210px); }
  .portrait-frame { height: 250px; }
  .stats-grid { gap: 10px; }
  .stat-card { padding: 10px; gap: 9px; }
  .stat-card strong { font-size: 12px; }
  .stat-card small { font-size: 11px; }
  .lower-grid { gap: 10px; }
  .info-panel { padding: 13px 12px; }
  .info-panel h3 { font-size: 16px; }
  .interest-list li, .project-list li { font-size: 12px; }
  .topbar { padding-right: 18px; }
  .topbar-links { gap: 13px; }
}
@media (max-height: 760px) and (min-width: 801px) {
  .dashboard { padding-top: 14px; padding-bottom: 9px; gap: 10px; grid-template-rows: minmax(225px, 1.1fr) auto minmax(190px, .9fr) 18px; }
  .portrait-frame { height: 225px; }
  .hero-copy h1 { font-size: clamp(32px, 3vw, 46px); margin-top: 9px; }
  .handwritten { margin: 8px 0; font-size: 23px; }
  .hero-actions { margin-top: 12px; }
  .stat-card { min-height: 65px; }
  .info-panel { padding-top: 11px; }
  .interest-list, .project-list { gap: 6px; }
  .publication-list li { padding: 7px 0; }
}
@media (max-width: 800px) {
  .portfolio-shell, .portfolio-shell.sidebar-collapsed { height: auto; min-height: 100vh; overflow: visible; display: block; }
  .sidebar { position: fixed; inset: 0 auto 0 0; width: 250px; transform: translateX(-102%); transition: transform .25s ease; box-shadow: 15px 0 35px rgba(0,0,0,.35); }
  .portfolio-shell:not(.sidebar-collapsed) .sidebar { transform: translateX(0); }
  .sidebar-collapsed .sidebar { transform: translateX(-102%); }
  .sidebar-collapsed .identity-copy, .sidebar-collapsed .nav-label, .sidebar-collapsed .sidebar-motto, .sidebar-collapsed .sidebar-bottom { display: initial; }
  .workspace { min-height: 100vh; }
  .topbar { position: sticky; top: 0; z-index: 4; height: 65px; padding: 0 14px; }
  .topbar-left { gap: 12px; }
  .topbar-links { gap: 12px; }
  .topbar-links a span { display: none; }
  .dashboard { overflow: visible; display: block; padding: 18px 14px 22px; background-position: 62% center; }
  .hero-panel { display: flex; flex-direction: column; align-items: stretch; gap: 20px; padding: 15px 5px 22px; }
  .hero-copy h1 { font-size: clamp(35px, 9vw, 52px); }
  .hero-copy h2 { font-size: 16px; }
  .handwritten { font-size: 25px; }
  .hero-description { font-size: 14px; }
  .portrait-wrap { width: min(72%, 270px); margin: 0 auto; }
  .portrait-frame { height: 320px; }
  .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 12px 0; }
  .stat-card { min-height: 72px; }
  .lower-grid { grid-template-columns: 1fr; }
  .info-panel { padding: 17px; }
  .interest-list li, .project-list li, .publication-list li { font-size: 14px; }
  .dashboard-footer { flex-wrap: wrap; margin-top: 15px; }
}
@media (max-width: 430px) {
  .topbar-name strong { font-size: 13px; }
  .topbar-name small { font-size: 11px; }
  .sidebar-toggle { width: 42px; height: 40px; flex-basis: 42px; }
  .topbar-links { gap: 9px; font-size: 13px; }
  .stats-grid { grid-template-columns: 1fr; }
  .portrait-wrap { width: 78%; }
}
