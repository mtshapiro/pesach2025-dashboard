
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

    const basicZmanim = [
        { label: "Alot Hashachar", value: zmanim.getAlotHashachar() },
        { label: "Sunrise", value: zmanim.getSunrise() },
        { label: "Sof Zman Shema", value: zmanim.getSofZmanShmaMGA() },
        { label: "Sof Zman Tefillah", value: zmanim.getSofZmanTfillaMGA() },
        { label: "Chatzot", value: zmanim.getChatzot() },
        { label: "Mincha Gedola", value: zmanim.getMinchaGedola() },
        { label: "Mincha Ketana", value: zmanim.getMinchaKetana() },
        { label: "Plag Hamincha", value: zmanim.getPlagHamincha() },
        { label: "Sunset", value: zmanim.getSunset() },
        { label: "Tzeit", value: zmanim.getTzeit() },
        { label: "Chatzot Halayla", value: zmanim.getChatzotLailah() }
    ];

    basicZmanim.forEach(z => {
        const li = document.createElement("li");
        li.textContent = `${z.label}: ${z.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        zmanimList.appendChild(li);
    });

    // Add unique zmanim based on date
    const isoDate = date.toISOString().split("T")[0];

    const extras = [];

    if (isoDate === "2025-04-14") {
        extras.push(
            { label: "Sof Zman Achilat Chametz", value: zmanim.getSofZmanAchilatChametz?.() },
            { label: "Biur Chametz", value: zmanim.getSofZmanBiurChametz?.() }
        );
    }

    const candleLightingDays = {
        "2025-04-11": "19:11",
        "2025-04-18": "19:20"
    };

    if (candleLightingDays[isoDate]) {
        extras.push({ label: "Candle Lighting", value: candleLightingDays[isoDate] });
    }

    const motzeiChag = {
        "2025-04-12": "20:15",
        "2025-04-19": "20:24",
        "2025-04-20": "20:26"
    };

    if (motzeiChag[isoDate]) {
        extras.push({ label: "Yom Tov Ends", value: motzeiChag[isoDate] });
    }

    const sefiraStart = new Date("2025-04-12T00:00:00");
    if (date >= sefiraStart) {
        const omerDay = Math.floor((date - sefiraStart) / (1000 * 60 * 60 * 24)) + 1;
        extras.push({ label: "Sefirat HaOmer", value: `Day ${omerDay}` });
    }

    extras.forEach(z => {
        if (z && z.value) {
            const li = document.createElement("li");
            li.textContent = `${z.label}: ${typeof z.value === 'string' ? z.value : z.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
            li.style.fontWeight = "bold";
            li.style.color = "#FFD700";
            zmanimList.appendChild(li);
        }
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
      "R’", "Rabbi", "Reb", "HaRav", "Shapiro", "Levenstien", "Speaker",
      "Dr.", "Professor", "Uncle", "Morah", "הרב", "רבנו"
    ];
    const detectedSpeakers = new Set();

    if (todaysEvents.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No events scheduled for today.";
      li.style.fontStyle = "italic";
      scheduleList.appendChild(li);
    }

    todaysEvents.forEach(event => {
      // Add to schedule
      const li = document.createElement("li");
      li.textContent = `${event.time} — ${event.event}`;
      scheduleList.appendChild(li);

      // Speaker detection
      const text = event.event.toLowerCase();
      const isSpeaker = event.isSpeaker === true || speakerKeywords.some(keyword =>
        text.includes(keyword.toLowerCase())
      );

      if (isSpeaker) {
        // Extract names after colons (if present), else use whole string
        const nameMatch = event.event.split(":")[1] || event.event;
        const possibleNames = nameMatch.split(",").map(n => n.trim());
        possibleNames.forEach(name => {
          if (!detectedSpeakers.has(name)) {
            detectedSpeakers.add(name);
          }
        });
      }
    });

    // Render unique speaker names
    detectedSpeakers.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      speakersList.appendChild(li);
    });
  });
              sp.textContent = event.event;
              speakersList.appendChild(sp);
          }
      });
  });