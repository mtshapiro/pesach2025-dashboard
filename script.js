
const zmanimApi = "https://www.hebcal.com/zmanim?cfg=json&geonameid=3201224"; // Grubine, Croatia
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
            document.getElementById("hebrew-date").innerText = "Hebrew Date: " + data.hebrew;
        });
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
