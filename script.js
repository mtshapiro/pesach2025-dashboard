
const hebcalEventsApi = "https://www.hebcal.com/shabbat?cfg=json&geonameid=3201224&m=50";
const hebrewDateApi = "https://www.hebcal.com/converter?cfg=json&gy={GY}&gm={GM}&gd={GD}&g2h=1";
const scheduleUrl = "pesach2025_schedule.json";

function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById("time").innerText = now.toLocaleTimeString("en-US", options);
    document.getElementById("date").innerText = now.toDateString();

    const gyear = now.getFullYear();
    const gmonth = now.getMonth() + 1;
    const gday = now.getDate();
    const url = hebrewDateApi.replace("{GY}", gyear).replace("{GM}", gmonth).replace("{GD}", gday);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("hebrew-date").innerText = data.hebrew;
        });

    updateZmanim(now);
}
setInterval(updateTime, 1000);
updateTime();

function updateZmanim(date) {
    const zmanimList = document.getElementById("zmanim-list");
    zmanimList.innerHTML = "";

    const location = new jcal.ZmanimLocation(43.3133, 17.1667, "Grubine, Croatia", 1);
    const zmanim = new jcal.Zmanim(date, location);

    const displayList = [
        { label: "Alot Hashachar", value: zmanim.getAlotHashachar() },
        { label: "Sunrise", value: zmanim.getSunrise() },
        { label: "Sof Zman Shema", value: zmanim.getSofZmanShmaMGA() },
        { label: "Sof Zman Tefillah", value: zmanim.getSofZmanTfillaMGA() },
        { label: "Chatzot", value: zmanim.getChatzot() },
        { label: "Mincha Gedola", value: zmanim.getMinchaGedola() },
        { label: "Mincha Ketana", value: zmanim.getMinchaKetana() },
        { label: "Plag Hamincha", value: zmanim.getPlagHamincha() },
        { label: "Sunset", value: zmanim.getSunset() },
        { label: "Tzeit", value: zmanim.getTzeit() }
    ];

    displayList.forEach(z => {
        const li = document.createElement("li");
        const formatted = z.value.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true });
        li.textContent = `${z.label}: ${formatted}`;
        zmanimList.appendChild(li);
    });
}

fetch(hebcalEventsApi)
  .then(res => res.json())
  .then(data => {
      const items = data.items;
      const daf = items.find(i => i.category === "daf-yomi");
      const parsha = items.find(i => i.category === "parashat");

      document.getElementById("daf-yomi").innerText = "Daf Yomi: " + (daf?.title || "N/A");
      document.getElementById("parsha").innerText = "Parsha: " + (parsha?.hebrew || "N/A");
  });

fetch(scheduleUrl)
  .then(res => res.json())
  .then(data => {
      const today = new Date().toISOString().split("T")[0];
      const todaysEvents = data[today] || [];
      const scheduleList = document.getElementById("schedule-list");
      const speakersList = document.getElementById("speakers-list");
      scheduleList.innerHTML = '';
      speakersList.innerHTML = '';

      const speakerKeywords = [
          "R’", "Rabbi", "Reb", "HaRav", "Shapiro", "Levenstien", "Speaker", "Dr.", "Professor", "Uncle", "Morah", "הרב", "רבנו"
      ];

      todaysEvents.forEach(event => {
          const li = document.createElement("li");
          li.textContent = `${event.time} — ${event.event}`;
          scheduleList.appendChild(li);

          const isSpeaker = speakerKeywords.some(keyword =>
              event.event.toLowerCase().includes(keyword.toLowerCase())
          );
          if (isSpeaker) {
              const sp = document.createElement("li");
              sp.textContent = event.event;
              speakersList.appendChild(sp);
          }
      });
  });
