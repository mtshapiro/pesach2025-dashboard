
window.onload = function () {
  try {
    const hebcalCache = {"2025-04-09": {"hebrew": "י״א בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 113", "kriat_hatorah": null}, "2025-04-10": {"hebrew": "י״ב בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 114", "kriat_hatorah": null}, "2025-04-11": {"hebrew": "י״ג בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 115", "kriat_hatorah": null}, "2025-04-12": {"hebrew": "י״ד בניסן תשפ״ה", "parsha": "צו", "daf_yomi": "Sanhedrin 116", "kriat_hatorah": "Parshat Tzav (Shabbat, Erev Pesach)"}, "2025-04-13": {"hebrew": "ט״ו בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 117", "kriat_hatorah": "First Day Pesach: וַיֹּאמֶר מֹשֶׁה (Shemot 12:21–51)"}, "2025-04-14": {"hebrew": "ט״ז בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 118", "kriat_hatorah": "Second Day Pesach: שַׁבַּעַת יָמִים (Vayikra 22:26–23:44)"}, "2025-04-15": {"hebrew": "י״ז בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 119", "kriat_hatorah": "Chol HaMoed 1: קַח־לְךָ (Bamidbar 9:1–14)"}, "2025-04-16": {"hebrew": "י״ח בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 120", "kriat_hatorah": "Chol HaMoed 2: קַח־לְךָ (Bamidbar 9:1–14)"}, "2025-04-17": {"hebrew": "י״ט בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 121", "kriat_hatorah": "Chol HaMoed 3: קַח־לְךָ (Bamidbar 9:1–14)"}, "2025-04-18": {"hebrew": "כ׳ בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 122", "kriat_hatorah": "Chol HaMoed 4: קַח־לְךָ (Bamidbar 9:1–14)"}, "2025-04-19": {"hebrew": "כ״א בניסן תשפ״ה", "parsha": "שמיני", "daf_yomi": "Sanhedrin 123", "kriat_hatorah": "Shabbat Chol HaMoed Pesach: קַח־לְךָ (Shemot 33:12–34:26)"}, "2025-04-20": {"hebrew": "כ״ב בניסן תשפ״ה", "parsha": null, "daf_yomi": "Sanhedrin 124", "kriat_hatorah": "Seventh Day Pesach: וַיְהִי בְּשַׁלַּח (Shemot 13:17–15:26)"}};
    const zmanimCache = {"2025-04-09": {"Alot Hashachar": "04:51", "Sunrise": "06:20", "Sof Zman Shema": "09:22", "Sof Zman Tefillah": "10:29", "Chatzot": "12:47", "Mincha Gedola": "13:20", "Mincha Ketana": "16:15", "Plag Hamincha": "17:47", "Sunset": "19:15", "Tzeit": "19:43", "Chatzot Halayla": "00:47"}, "2025-04-10": {"Alot Hashachar": "04:49", "Sunrise": "06:18", "Sof Zman Shema": "09:20", "Sof Zman Tefillah": "10:27", "Chatzot": "12:46", "Mincha Gedola": "13:19", "Mincha Ketana": "16:14", "Plag Hamincha": "17:46", "Sunset": "19:16", "Tzeit": "19:44", "Chatzot Halayla": "00:46"}, "2025-04-11": {"Alot Hashachar": "04:47", "Sunrise": "06:16", "Sof Zman Shema": "09:18", "Sof Zman Tefillah": "10:25", "Chatzot": "12:46", "Mincha Gedola": "13:19", "Mincha Ketana": "16:15", "Plag Hamincha": "17:47", "Sunset": "19:17", "Tzeit": "19:45", "Chatzot Halayla": "00:46", "Candle Lighting": "19:11"}, "2025-04-12": {"Alot Hashachar": "04:45", "Sunrise": "06:14", "Sof Zman Shema": "09:17", "Sof Zman Tefillah": "10:24", "Chatzot": "12:46", "Mincha Gedola": "13:19", "Mincha Ketana": "16:15", "Plag Hamincha": "17:47", "Sunset": "19:18", "Tzeit": "19:46", "Chatzot Halayla": "00:46", "Yom Tov Ends": "20:15", "Sefirat HaOmer": "Day 1"}, "2025-04-13": {"Alot Hashachar": "04:43", "Sunrise": "06:12", "Sof Zman Shema": "09:15", "Sof Zman Tefillah": "10:23", "Chatzot": "12:46", "Mincha Gedola": "13:20", "Mincha Ketana": "16:16", "Plag Hamincha": "17:48", "Sunset": "19:19", "Tzeit": "19:47", "Chatzot Halayla": "00:46", "Sefirat HaOmer": "Day 2"}, "2025-04-14": {"Alot Hashachar": "04:41", "Sunrise": "06:10", "Sof Zman Shema": "09:13", "Sof Zman Tefillah": "10:21", "Chatzot": "12:45", "Mincha Gedola": "13:20", "Mincha Ketana": "16:17", "Plag Hamincha": "17:49", "Sunset": "19:20", "Tzeit": "19:48", "Chatzot Halayla": "00:45", "Sof Zman Achilat Chametz": "10:17", "Biur Chametz": "11:36", "Sefirat HaOmer": "Day 3"}, "2025-04-15": {"Alot Hashachar": "04:39", "Sunrise": "06:08", "Sof Zman Shema": "09:12", "Sof Zman Tefillah": "10:19", "Chatzot": "12:45", "Mincha Gedola": "13:20", "Mincha Ketana": "16:17", "Plag Hamincha": "17:50", "Sunset": "19:21", "Tzeit": "19:49", "Chatzot Halayla": "00:45", "Sefirat HaOmer": "Day 4"}, "2025-04-16": {"Alot Hashachar": "04:38", "Sunrise": "06:07", "Sof Zman Shema": "09:10", "Sof Zman Tefillah": "10:18", "Chatzot": "12:45", "Mincha Gedola": "13:21", "Mincha Ketana": "16:18", "Plag Hamincha": "17:51", "Sunset": "19:22", "Tzeit": "19:50", "Chatzot Halayla": "00:45", "Sefirat HaOmer": "Day 5"}, "2025-04-17": {"Alot Hashachar": "04:36", "Sunrise": "06:05", "Sof Zman Shema": "09:08", "Sof Zman Tefillah": "10:16", "Chatzot": "12:45", "Mincha Gedola": "13:21", "Mincha Ketana": "16:18", "Plag Hamincha": "17:51", "Sunset": "19:23", "Tzeit": "19:51", "Chatzot Halayla": "00:45", "Sefirat HaOmer": "Day 6"}, "2025-04-18": {"Alot Hashachar": "04:34", "Sunrise": "06:03", "Sof Zman Shema": "09:07", "Sof Zman Tefillah": "10:15", "Chatzot": "12:45", "Mincha Gedola": "13:21", "Mincha Ketana": "16:19", "Plag Hamincha": "17:52", "Sunset": "19:24", "Tzeit": "19:52", "Chatzot Halayla": "00:45", "Candle Lighting": "19:20", "Sefirat HaOmer": "Day 7"}, "2025-04-19": {"Alot Hashachar": "04:33", "Sunrise": "06:02", "Sof Zman Shema": "09:06", "Sof Zman Tefillah": "10:14", "Chatzot": "12:45", "Mincha Gedola": "13:21", "Mincha Ketana": "16:19", "Plag Hamincha": "17:52", "Sunset": "19:25", "Tzeit": "19:53", "Chatzot Halayla": "00:45", "Yom Tov Ends": "20:24", "Sefirat HaOmer": "Day 8"}, "2025-04-20": {"Alot Hashachar": "04:31", "Sunrise": "06:00", "Sof Zman Shema": "09:04", "Sof Zman Tefillah": "10:13", "Chatzot": "12:45", "Mincha Gedola": "13:22", "Mincha Ketana": "16:20", "Plag Hamincha": "17:53", "Sunset": "19:26", "Tzeit": "19:54", "Chatzot Halayla": "00:45", "Yom Tov Ends": "20:26", "Sefirat HaOmer": "Day 9"}};
    const kriatHatorahCache = {"2025-04-12": "Parshas Tzav (Shabbos HaGadol): Haftarah - Malachi 3:4–24", "2025-04-13": "1st Day Pesach: Shemos 12:21–51; Bamidbar 28:16–25 | Haftarah - Yehoshua 3:5–7, 5:2–6:1, 6:27", "2025-04-14": "Chol HaMoed Pesach: Vayikra 22:26–23:44; Bamidbar 28:19–25", "2025-04-15": "Chol HaMoed Pesach: Shemos 13:1–16; Bamidbar 28:19–25", "2025-04-16": "Chol HaMoed Pesach: Shemos 22:24–23:19; Bamidbar 28:19–25", "2025-04-17": "Chol HaMoed Pesach: Shemos 34:1–26; Bamidbar 28:19–25", "2025-04-18": "Chol HaMoed Pesach: Bamidbar 9:1–14; Bamidbar 28:19–25", "2025-04-19": "7th Day Pesach (Shabbos): Shemos 13:17–15:26; Bamidbar 28:19–25; Shir HaShirim | Haftarah - II Shmuel 22:1–51"};

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
    const iso = today.toISOString().split("T")[0];

    const heb = hebcalCache[iso];
    if (heb) {
      if (document.getElementById("hebrew-date")) document.getElementById("hebrew-date").innerText = heb.hebrew || "—";
      if (document.getElementById("parsha")) document.getElementById("parsha").innerText = "Parsha: " + (heb.parsha || "—");
      if (document.getElementById("daf-yomi")) document.getElementById("daf-yomi").innerText = "Daf Yomi: " + (heb.daf_yomi || "—");
    }

    const torahReading = kriatHatorahCache[iso];
    if (torahReading) {
      const el = document.createElement("div");
      el.className = "text";
      el.style.marginTop = "10px";
      el.style.fontSize = "1.2em";
      el.style.fontStyle = "italic";
      el.innerText = "Kriat HaTorah: " + torahReading;
      document.querySelector(".top-bar")?.appendChild(el);
    }

    // Zmanim
    const zmanimList = document.getElementById("zmanim-list");
    if (zmanimList && zmanimCache[iso]) {
      const zmanim = zmanimCache[iso];
      zmanimList.innerHTML = '';
      Object.entries(zmanim).forEach(([label, time]) => {
        const li = document.createElement("li");
        li.textContent = `${label}: ${time}`;
        if (label.includes("Sefirat") || label.includes("Candle") || label.includes("Yom Tov") || label.includes("Chametz"))
          li.style.color = "#FFD700";
        zmanimList.appendChild(li);
      });
    }

    // Schedule
    fetch("pesach2025_schedule.json")
      .then(res => res.json())
      .then(data => {
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
      });
  } catch (err) {
    console.error("Dashboard error:", err);
  }
};


// DEBUG OVERLAY
const debugBox = document.createElement("div");
debugBox.style.position = "fixed";
debugBox.style.bottom = "0";
debugBox.style.left = "0";
debugBox.style.backgroundColor = "rgba(0,0,0,0.7)";
debugBox.style.color = "#0f0";
debugBox.style.fontSize = "12px";
debugBox.style.padding = "10px";
debugBox.style.zIndex = "9999";
debugBox.style.maxWidth = "100%";
debugBox.style.maxHeight = "30%";
debugBox.style.overflowY = "auto";
debugBox.style.fontFamily = "monospace";
debugBox.innerText = "[Debug Log]\n";
document.body.appendChild(debugBox);

function logDebug(msg) {
  console.log(msg);
  debugBox.innerText += msg + "\n";
}

// Hook into key points
logDebug("JS loaded.");
logDebug("Today ISO: " + new Date().toISOString().split("T")[0]);
logDebug("Hebcal cache keys: " + Object.keys(hebcalCache).join(", "));
logDebug("Zmanim cache keys: " + Object.keys(zmanimCache).join(", "));
logDebug("Kriat HaTorah cache keys: " + Object.keys(kriatHatorahCache).join(", "));

// Show which data was actually found
const isoCheck = new Date().toISOString().split("T")[0];
logDebug("Found in hebcalCache? " + (isoCheck in hebcalCache));
logDebug("Found in zmanimCache? " + (isoCheck in zmanimCache));
logDebug("Found in kriatHatorahCache? " + (isoCheck in kriatHatorahCache));
