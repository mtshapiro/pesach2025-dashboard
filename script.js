
window.onload = function () {
  try {
    function updateClock() {
      const now = new Date();
      const clockEl = document.getElementById("clock");
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" });
      }
      const dateEl = document.getElementById("english-date");
      if (dateEl) {
        dateEl.textContent = now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
      }
    }

    setInterval(updateClock, 1000);
    updateClock();

    const today = new Date();
    updateZmanim(today);
// Load Hebrew date, parsha, and daf yomi from local file
    fetch("hebcal_cache.json")
      .then(res => res.json())
      .then(data => {
        const iso = today.toISOString().split("T")[0];
        const info = data[iso];
        if (!info) return;

        if (document.getElementById("hebrew-date")) document.getElementById("hebrew-date").innerText = info.hebrew || "—";
        if (document.getElementById("parsha")) document.getElementById("parsha").innerText = "Parsha: " + (info.parsha || "—");
        if (document.getElementById("daf-yomi")) document.getElementById("daf-yomi").innerText = "Daf Yomi: " + (info.daf_yomi || "—");
      }).catch(err => console.error("Local Hebcal cache load failed", err));

    // Fetch Hebrew date, parsha, daf yomi
    fetch(`https://www.hebcal.com/converter?cfg=json&gy=${today.getFullYear()}&gm=${today.getMonth() + 1}&gd=${today.getDate()}&g2h=1`)
      .then(res => res.json())
      .then(data => {
        if (document.getElementById("hebrew-date")) document.getElementById("hebrew-date").innerText = data.hebrew || "—";
      }).catch(err => console.error("Hebrew date fetch failed", err));

    fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=3200181&start=" + today.toISOString().split("T")[0])
      .then(res => res.json())
      .then(data => {
        const items = data.items;
        const daf = items.find(i => i.category === "daf-yomi");
        const parsha = items.find(i => i.category === "parashat");
        if (document.getElementById("daf-yomi")) document.getElementById("daf-yomi").innerText = "Daf Yomi: " + (daf?.title || "—");
        if (document.getElementById("parsha")) document.getElementById("parsha").innerText = "Parsha: " + (parsha?.hebrew || "—");
      }).catch(err => console.error("Hebcal API failed", err));

    fetch("pesach2025_schedule.json")
      .then(res => res.json())
      .then(data => {
        const iso = new Date().toISOString().split("T")[0];
        const todaysEvents = data[iso] || [];
        const scheduleList = document.getElementById("schedule-list");
        const speakersList = document.getElementById("speakers-list");
        scheduleList.innerHTML = "";
        speakersList.innerHTML = "";

        const speakerKeywords = [
          "R’", "Rabbi", "Reb", "HaRav", "Shapiro", "Levenstien", "Speaker",
          "Dr.", "Professor", "Uncle", "Morah", "הרב", "רבנו"
        ];
        const detected = new Set();

        if (todaysEvents.length === 0) {
          const li = document.createElement("li");
          li.textContent = "No events scheduled for today.";
          li.style.fontStyle = "italic";
          scheduleList.appendChild(li);
        }

        todaysEvents.forEach(event => {
          const li = document.createElement("li");
          li.textContent = `${event.time} — ${event.event}`;
          scheduleList.appendChild(li);

          const text = event.event.toLowerCase();
          const isSpeaker = event.isSpeaker === true || speakerKeywords.some(k => text.includes(k.toLowerCase()));
          if (isSpeaker) {
            const names = (event.event.split(":")[1] || event.event).split(",").map(x => x.trim());
            names.forEach(name => detected.add(name));
          }
        });

        detected.forEach(name => {
          const li = document.createElement("li");
          li.textContent = name;
          speakersList.appendChild(li);
        });
      }).catch(err => {
        console.error("Schedule fetch failed", err);
        if (document.getElementById("schedule-list")) {
          const li = document.createElement("li");
          li.textContent = "Failed to load schedule.";
          document.getElementById("schedule-list").appendChild(li);
        }
      });
  } catch (err) {
    console.error("Dashboard error:", err);
  }
};


// Load kriat hatorah
fetch("kriat_hatorah_cache.json")
  .then(res => res.json())
  .then(data => {
    const iso = new Date().toISOString().split("T")[0];
    const reading = data[iso];
    if (reading) {
      const el = document.createElement("div");
      el.className = "text";
      el.style.marginTop = "10px";
      el.style.fontSize = "1.2em";
      el.style.fontStyle = "italic";
      el.innerText = "Kriat HaTorah: " + reading;
      document.querySelector(".top-bar")?.appendChild(el);
    }
  }).catch(err => console.error("Failed to load kriat hatorah", err));
