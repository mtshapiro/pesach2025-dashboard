
const zmanimApi = "https://www.hebcal.com/zmanim?cfg=json&geonameid=3201224";
const hebcalEventsApi = "https://www.hebcal.com/shabbat?cfg=json&geonameid=3201224&m=50";
const scheduleUrl = "pesach2025_schedule.json";

function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    document.getElementById("time").innerText = now.toLocaleTimeString("en-US", options);
    document.getElementById("date").innerText = now.toDateString();
}
setInterval(updateTime, 1000);
updateTime();

fetch(zmanimApi)
  .then(res => res.json())
  .then(data => {
      const list = document.getElementById("zmanim-list");
      list.innerHTML = '';
      const zmanim = [
          { label: "Alot Hashachar", key: "alotHaShachar" },
          { label: "Sunrise", key: "sunrise" },
          { label: "Sof Zman Kriyat Shema", key: "sofZmanShma" },
          { label: "Sof Zman Tefillah", key: "sofZmanTfilla" },
          { label: "Chatzot", key: "chatzot" },
          { label: "Mincha Gedola", key: "minchaGedola" },
          { label: "Mincha Ketana", key: "minchaKetana" },
          { label: "Plag Hamincha", key: "plagHaMincha" },
          { label: "Sunset", key: "sunset" },
          { label: "Tzeit", key: "tzeit" }
      ];
      zmanim.forEach(z => {
          const timeStr = data.times[z.key];
          if (timeStr) {
              const time = new Date(timeStr);
              const formatted = time.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true });
              const li = document.createElement("li");
              li.textContent = `${z.label}: ${formatted}`;
              list.appendChild(li);
          }
      });
  });

fetch(hebcalEventsApi)
  .then(res => res.json())
  .then(data => {
      const items = data.items;
      const daf = items.find(i => i.category === "daf-yomi");
      const parsha = items.find(i => i.category === "parashat");
      document.getElementById("daf-yomi").innerText = "Daf Yomi: " + (daf?.title || "N/A");
      document.getElementById("parsha").innerText = "Parsha: " + (parsha?.hebrew || "N/A");
      document.getElementById("hebrew-date").innerText = "Hebrew Date: " + (data.heDate || "N/A");
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
          "R’", "Rabbi", "Reb", "HaRav", "Shapiro", "Levenstien", "Speaker", "Dr.", "Professor", "Uncle", "Morah"
      ];

      todaysEvents.forEach(event => {
          const li = document.createElement("li");
          li.textContent = `${event.time} — ${event.event}`;
          scheduleList.appendChild(li);

          const isSpeaker = speakerKeywords.some(keyword => event.event.includes(keyword));
          if (isSpeaker) {
              const sp = document.createElement("li");
              sp.textContent = event.event;
              speakersList.appendChild(sp);
          }
      });
  });
