(function () {
  'use strict';
  var MENUS = {"work": {"label": "Workspace", "items": [{"label": "To-do Tasks", "icon": "todo", "url": "work_w1.html"}, {"label": "Completed Tasks", "icon": "done", "url": "work_w2.html"}, {"label": "My Approvals", "icon": "approval", "url": "work_w3.html"}, {"label": "Schedule", "icon": "calendar", "url": "work_w4.html"}, {"label": "Work Statistics", "icon": "chart", "url": "work_w5.html"}, {"label": "Notifications", "icon": "notification", "url": "work_w6.html"}, {"label": "Favorite Workflows", "icon": "flow", "url": "work_w7.html"}, {"label": "My Drafts", "icon": "draft", "url": "work_w8.html"}, {"label": "Starred Items", "icon": "star", "url": "work_w9.html"}, {"label": "Operation Logs", "icon": "log", "url": "work_w10.html"}, {"label": "Work Reports", "icon": "report", "url": "work_w11.html"}, {"label": "Check-in", "icon": "checkin", "url": "work_w12.html"}, {"label": "Expense Reimburse", "icon": "money", "url": "work_w13.html"}, {"label": "Business Trip", "icon": "travel", "url": "work_w14.html"}, {"label": "Meeting Rooms", "icon": "room", "url": "work_w15.html"}, {"label": "Contacts", "icon": "contact", "url": "work_w16.html"}, {"label": "Announcements", "icon": "announce", "url": "work_w17.html"}, {"label": "Poll &amp; Survey", "icon": "poll", "url": "work_w18.html"}, {"label": "Task Templates", "icon": "template", "url": "work_w19.html"}, {"label": "Guides", "icon": "help", "url": "work_w20.html"}]}, "data": {"label": "Data", "items": [{"label": "Form Collection", "icon": "form", "url": "data_d1.html"}, {"label": "Export CSV", "icon": "export", "url": "data_d2.html"}, {"label": "Live Dashboard", "icon": "dashboard", "url": "data_d3.html"}, {"label": "User Analytics", "icon": "analytics", "url": "data_d4.html"}, {"label": "Audit Logs", "icon": "audit", "url": "data_d5.html"}, {"label": "Data Overview", "icon": "chart", "url": "data_d6.html"}, {"label": "Form Designer", "icon": "form", "url": "data_d7.html"}, {"label": "Recycle Bin", "icon": "trash", "url": "data_d8.html"}, {"label": "Data Validation", "icon": "analytics", "url": "data_d9.html"}, {"label": "Permission Audit", "icon": "shield", "url": "data_d10.html"}, {"label": "Data Backup", "icon": "database", "url": "data_d11.html"}, {"label": "Field Manager", "icon": "settings", "url": "data_d12.html"}, {"label": "Linked Forms", "icon": "link", "url": "data_d13.html"}, {"label": "Calculation Rules", "icon": "calculator", "url": "data_d14.html"}, {"label": "Data Filter", "icon": "search", "url": "data_d15.html"}, {"label": "Scheduled Jobs", "icon": "clock", "url": "data_d16.html"}, {"label": "Data Import", "icon": "upload", "url": "data_d17.html"}, {"label": "Permission Inheritance", "icon": "shield", "url": "data_d18.html"}, {"label": "Data Masking", "icon": "eye-off", "url": "data_d19.html"}, {"label": "Trend Forecast", "icon": "chart", "url": "data_d20.html"}]}, "team": {"label": "Team", "items": [{"label": "Members", "icon": "team", "url": "team_t1.html"}, {"label": "Roles &amp; Permissions", "icon": "lock", "url": "team_t2.html"}, {"label": "Departments", "icon": "team", "url": "team_t3.html"}, {"label": "Invite Members", "icon": "invite", "url": "team_t4.html"}, {"label": "Online Status", "icon": "team", "url": "team_t5.html"}, {"label": "Projects", "icon": "dashboard", "url": "team_t6.html"}, {"label": "Assign Tasks", "icon": "todo", "url": "team_t7.html"}, {"label": "Shared Files", "icon": "file", "url": "team_t8.html"}, {"label": "Discussions", "icon": "chat", "url": "team_t9.html"}, {"label": "Team Stats", "icon": "chart", "url": "team_t10.html"}, {"label": "On-call Roster", "icon": "calendar", "url": "team_t11.html"}, {"label": "Skill Tags", "icon": "team", "url": "team_t12.html"}, {"label": "Onboard / Offboard", "icon": "user", "url": "team_t13.html"}, {"label": "Cross-Team Work", "icon": "link", "url": "team_t14.html"}, {"label": "Reporting Chain", "icon": "team", "url": "team_t15.html"}, {"label": "Hall of Fame", "icon": "star", "url": "team_t16.html"}, {"label": "Team Attendance", "icon": "checkin", "url": "team_t17.html"}, {"label": "Recruitment", "icon": "user", "url": "team_t18.html"}, {"label": "Meeting Minutes", "icon": "file", "url": "team_t19.html"}, {"label": "Team Gallery", "icon": "image", "url": "team_t20.html"}]}, "me": {"label": "Profile", "items": [{"label": "Profile", "icon": "profile", "url": "me_m1.html"}, {"label": "Security", "icon": "lock", "url": "me_m2.html"}, {"label": "Notifications", "icon": "notification", "url": "me_m3.html"}, {"label": "Theme", "icon": "palette", "url": "me_m4.html"}, {"label": "About", "icon": "info", "url": "me_m5.html"}, {"label": "Account Bindings", "icon": "link", "url": "me_m6.html"}, {"label": "Privacy", "icon": "eye-off", "url": "me_m7.html"}, {"label": "Storage", "icon": "database", "url": "me_m8.html"}, {"label": "Language &amp; Region", "icon": "globe", "url": "me_m9.html"}, {"label": "Help", "icon": "question", "url": "me_m10.html"}, {"label": "Devices", "icon": "phone", "url": "me_m11.html"}, {"label": "Login History", "icon": "history", "url": "me_m12.html"}, {"label": "Real-name Verify", "icon": "id-card", "url": "me_m13.html"}, {"label": "Bookmarks", "icon": "bookmark", "url": "me_m14.html"}, {"label": "Quick Phrases", "icon": "message", "url": "me_m15.html"}, {"label": "Blocklist", "icon": "ban", "url": "me_m16.html"}, {"label": "Data Migration", "icon": "upload", "url": "me_m17.html"}, {"label": "Lab", "icon": "flask", "url": "me_m18.html"}, {"label": "Developer Options", "icon": "code", "url": "me_m19.html"}, {"label": "Sign Out", "icon": "logout", "url": "me_m20.html"}]}};
  var CANCEL_LABEL = "Cancel";

  function getCurrentTab() {
    var path = location.pathname;
    if (path === '/' || path === '/index.html' || path.endsWith('/index.html')) return 'work';
    if (path.indexOf('work_') !== -1) return 'work';
    if (path.indexOf('data_') !== -1) return 'data';
    if (path.indexOf('team_') !== -1) return 'team';
    if (path.indexOf('me_') !== -1) return 'me';
    return 'work';
  }

  var css = [
    '.app-tabbar{position:fixed;bottom:0;left:0;right:0;z-index:100;max-width:420px;margin:0 auto;',
    'display:flex;justify-content:space-around;align-items:center;height:var(--tabbar-h);',
    'padding-bottom:env(safe-area-inset-bottom);background:rgba(15,20,27,.92);backdrop-filter:blur(12px);',
    'border-top:1px solid var(--color-border)}',
    '.app-tabbar .tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;',
    'background:none;border:none;color:rgba(255,255,255,.55);cursor:pointer;font-size:11px;',
    'padding:8px 4px;border-radius:var(--radius-sm);transition:color var(--transition-normal);min-height:48px;}',
    '.app-tabbar .tab .ico{font-size:22px;line-height:1}',
    '.app-tabbar .tab.active{color:#ffffff}',
    '.app-tabbar .tab:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}',
    '.sheet-mask{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.40);backdrop-filter:blur(2px);',
    'opacity:0;pointer-events:none;transition:opacity var(--transition-normal)}',
    '.sheet-mask.show{opacity:1;pointer-events:auto}',
    '.sheet{position:fixed;left:0;right:0;bottom:0;z-index:201;max-width:420px;margin:0 auto;',
    'background:var(--color-bg-secondary);border-top-left-radius:var(--radius-md);border-top-right-radius:var(--radius-md);',
    'padding:1rem 1rem calc(1rem + env(safe-area-inset-bottom));transform:translateY(102%);',
    'transition:transform 240ms ease}',
    '.sheet.show{transform:translateY(0)}',
    '.sheet-handle{width:40px;height:4px;border-radius:99px;background:var(--color-border);margin:0 auto .8rem}',
    '.sheet-title{font-size:15px;font-weight:600;color:var(--color-text-primary);margin:0 0 .75rem .2rem}',
    '.sheet-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:.75rem}',
    '.sheet-item{display:flex;flex-direction:column;align-items:center;gap:4px;padding:4px;',
    'border-radius:var(--radius-md);cursor:pointer;color:var(--color-text-primary);text-decoration:none;font-size:11px;transition:background-color var(--transition-fast)}',
    '.sheet-item:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}',
    '.sheet-item:hover{background-color:var(--color-bg-tertiary);opacity:1}',
    '.sheet-item .sheet-ic{width:56px;height:56px;border-radius:var(--radius-md);display:grid;place-items:center;font-size:24px;',
    'background:var(--color-bg-tertiary);}',
    '.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;',
    'clip:rect(0,0,0,0);white-space:nowrap;border:0}',
    '.sheet-item.cancel{grid-column:1/-1;text-align:center;padding:.8rem;color:var(--color-text-secondary);font-size:15px;',
    'border-top:1px solid var(--color-border);margin-top:.4rem;border-radius:0}'
  ].join('');

  if (!document.getElementById('app-nav-style')) {
    var style = document.createElement('style');
    style.id = 'app-nav-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  if (!document.querySelector('.app-tabbar')) {
    var tabbar = document.createElement('nav');
    tabbar.className = 'app-tabbar';
    tabbar.innerHTML =
      '<button class="tab" data-key="work"><span class="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18M7 7v10M17 7v10M3 17h18" /></svg></span><span>Workspace</span></button>' +
      '<button class="tab" data-key="data"><span class="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13h8l4-8 6 12" /></svg></span><span>Data</span></button>' +
      '<button class="tab" data-key="team"><span class="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="17" r="4" /><circle cx="17" cy="17" r="4" /><circle cx="12" cy="7" r="4" /></svg></span><span>Team</span></button>' +
      '<button class="tab" data-key="me"><span class="ico"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg></span><span>Profile</span></button>';
    document.body.appendChild(tabbar);
    var cur = getCurrentTab();
    var activeTab = tabbar.querySelector('[data-key="' + cur + '"]');
    if (activeTab) activeTab.classList.add('active');
  }

  if (!document.querySelector('.sheet-mask')) {
    var mask = document.createElement('div');
    mask.className = 'sheet-mask';
    mask.innerHTML =
      '<div class="sheet">' +
        '<div class="sheet-handle"></div>' +
        '<div class="sheet-title" id="sheetTitle"></div>' +
        '<div class="sheet-grid" id="sheetGrid"></div>' +
        '<div class="sheet-item cancel" id="sheetCancel">' + CANCEL_LABEL + '</div>' +
      '</div>';
    document.body.appendChild(mask);
  }

  var maskEl = document.querySelector('.sheet-mask');
  var sheetEl = maskEl.querySelector('.sheet');
  var titleEl = maskEl.querySelector('#sheetTitle');
  var gridEl = maskEl.querySelector('#sheetGrid');
  var cancelEl = maskEl.querySelector('#sheetCancel');
  var activeKey = null;

  document.querySelectorAll('.app-tabbar .tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.dataset.key;
      if (activeKey === key) { hideSheet(); return; }
      showSheet(key);
    });
  });

  maskEl.addEventListener('click', function (e) {
    if (e.target === maskEl) hideSheet();
  });
  cancelEl.addEventListener('click', hideSheet);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideSheet();
  });

  function showSheet(key) {
    var menu = MENUS[key];
    if (!menu) return;
    titleEl.textContent = menu.label;
    gridEl.innerHTML = menu.items.map(function (item) {
      return '<a class="sheet-item" href="' + item.url + '" aria-label="' + item.label + '">' +
        '<div class="sheet-ic">' + item.icon + '</div>' +
        '<span class="sr-only">' + item.label + '</span></a>';
    }).join('');
    maskEl.classList.add('show');
    sheetEl.classList.add('show');
    activeKey = key;
    document.querySelectorAll('.app-tabbar .tab').forEach(function (t) { t.classList.remove('active'); });
    var tab = document.querySelector('.app-tabbar .tab[data-key="' + key + '"]');
    if (tab) tab.classList.add('active');
  }

  function hideSheet() {
    maskEl.classList.remove('show');
    sheetEl.classList.remove('show');
    activeKey = null;
  }
  window.hideSheet = hideSheet;
})();