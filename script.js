
// PESACH 2025 DASHBOARD CORE DATA
const hebcalCache = {
  "2025-04-11": {
    "hebrew": "Yud-Gimel Nisan 5785",
    "parsha_krias": "Parshas Tzav",
    "daf_yomi": "Makkos 3"
  },
  "2025-04-12": {
    "hebrew": "Yud-Daled Nisan 5785",
    "parsha_krias": "Parshas Tzav (Shabbos Hagadol): Haftorah - Malachi 3:4–24",
    "daf_yomi": "Makkos 4"
  },
  "2025-04-13": {
    "hebrew": "Tes-Vov Nisan 5785",
    "parsha_krias": "1st Day Pesach: Shemos 12:21–51; Bamidbar 28:16–25 | Haftorah - Yehoshua 3:5–7, 5:2–6:1, 6:27",
    "daf_yomi": "Makkos 5"
  },
  "2025-04-14": {
    "hebrew": "Tes-Zayin Nisan 5785",
    "parsha_krias": "Chol Hamoed Pesach: Vayikra 22:26–23:44; Bamidbar 28:19–25",
    "daf_yomi": "Makkos 6"
  },
  "2025-04-15": {
    "hebrew": "Yud-Zayin Nisan 5785",
    "parsha_krias": "Chol Hamoed Pesach: Shemos 13:1–16; Bamidbar 28:19–25",
    "daf_yomi": "Makkos 7"
  },
  "2025-04-16": {
    "hebrew": "Yud-Ches Nisan 5785",
    "parsha_krias": "Chol Hamoed Pesach: Shemos 22:24–23:19; Bamidbar 28:19–25",
    "daf_yomi": "Makkos 8"
  },
  "2025-04-17": {
    "hebrew": "Yud-Tes Nisan 5785",
    "parsha_krias": "Chol Hamoed Pesach: Shemos 34:1–26; Bamidbar 28:19–25",
    "daf_yomi": "Makkos 9"
  },
  "2025-04-18": {
    "hebrew": "Chof Nisan 5785",
    "parsha_krias": "Chol Hamoed Pesach: Bamidbar 9:1–14; Bamidbar 28:19–25",
    "daf_yomi": "Makkos 10"
  },
  "2025-04-19": {
    "hebrew": "Chof-Alef Nisan 5785",
    "parsha_krias": "7th Day Pesach (Shabbos): Shemos 13:17–15:26; Bamidbar 28:19–25; Shir Hashirim | Haftorah - Shmuel Beis 22:1–51",
    "daf_yomi": "Makkos 11"
  },
  "2025-04-20": {
    "hebrew": "Chof-Beis Nisan 5785",
    "parsha_krias": null,
    "daf_yomi": "Makkos 12"
  }
};

const parshaKriasCache = {
  "2025-04-11": "Parshas Tzav",
  "2025-04-12": "Parshas Tzav (Shabbos Hagadol): Haftorah - Malachi 3:4–24",
  "2025-04-13": "1st Day Pesach: Shemos 12:21–51; Bamidbar 28:16–25 | Haftorah - Yehoshua 3:5–7, 5:2–6:1, 6:27",
  "2025-04-14": "Chol Hamoed Pesach: Vayikra 22:26–23:44; Bamidbar 28:19–25",
  "2025-04-15": "Chol Hamoed Pesach: Shemos 13:1–16; Bamidbar 28:19–25",
  "2025-04-16": "Chol Hamoed Pesach: Shemos 22:24–23:19; Bamidbar 28:19–25",
  "2025-04-17": "Chol Hamoed Pesach: Shemos 34:1–26; Bamidbar 28:19–25",
  "2025-04-18": "Chol Hamoed Pesach: Bamidbar 9:1–14; Bamidbar 28:19–25",
  "2025-04-19": "7th Day Pesach (Shabbos): Shemos 13:17–15:26; Bamidbar 28:19–25; Shir Hashirim | Haftorah - Shmuel Beis 22:1–51"
};

const zmanimCache = {
  "2025-04-11": {
    "Alot Hashachar": "04:47",
    "Sunrise": "06:16",
    "Sof Zman Shema": "09:18",
    "Sof Zman Tefillah": "10:25",
    "Chatzot": "12:46",
    "Mincha Gedola": "13:19",
    "Mincha Ketana": "16:15",
    "Plag Hamincha": "17:47",
    "Sunset": "19:17",
    "Tzeit": "19:45",
    "Chatzot Halayla": "00:46",
    "Hadlakas Neiros": "19:11"
  },
  "2025-04-12": {
    "Alot Hashachar": "04:45",
    "Sunrise": "06:14",
    "Sof Zman Shema": "09:17",
    "Sof Zman Tefillah": "10:24",
    "Chatzot": "12:46",
    "Mincha Gedola": "13:19",
    "Mincha Ketana": "16:15",
    "Plag Hamincha": "17:47",
    "Sunset": "19:18",
    "Tzeit": "19:46",
    "Chatzot Halayla": "00:46",
    "Yom Tov Ends": "20:15",
    "Sefirat HaOmer": "Day 1"
  },
  "2025-04-13": {
    "Alot Hashachar": "04:43",
    "Sunrise": "06:12",
    "Sof Zman Shema": "09:15",
    "Sof Zman Tefillah": "10:23",
    "Chatzot": "12:46",
    "Mincha Gedola": "13:20",
    "Mincha Ketana": "16:16",
    "Plag Hamincha": "17:48",
    "Sunset": "19:19",
    "Tzeit": "19:47",
    "Chatzot Halayla": "00:46",
    "Sefirat HaOmer": "Day 2"
  },
  "2025-04-14": {
    "Alot Hashachar": "04:41",
    "Sunrise": "06:10",
    "Sof Zman Shema": "09:13",
    "Sof Zman Tefillah": "10:21",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:20",
    "Mincha Ketana": "16:17",
    "Plag Hamincha": "17:49",
    "Sunset": "19:20",
    "Tzeit": "19:48",
    "Chatzot Halayla": "00:45",
    "Sof Zman Achilat Chametz": "10:17",
    "Biur Chametz": "11:36",
    "Sefirat HaOmer": "Day 3"
  },
  "2025-04-15": {
    "Alot Hashachar": "04:39",
    "Sunrise": "06:08",
    "Sof Zman Shema": "09:12",
    "Sof Zman Tefillah": "10:19",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:20",
    "Mincha Ketana": "16:17",
    "Plag Hamincha": "17:50",
    "Sunset": "19:21",
    "Tzeit": "19:49",
    "Chatzot Halayla": "00:45",
    "Sefirat HaOmer": "Day 4"
  },
  "2025-04-16": {
    "Alot Hashachar": "04:38",
    "Sunrise": "06:07",
    "Sof Zman Shema": "09:10",
    "Sof Zman Tefillah": "10:18",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:21",
    "Mincha Ketana": "16:18",
    "Plag Hamincha": "17:51",
    "Sunset": "19:22",
    "Tzeit": "19:50",
    "Chatzot Halayla": "00:45",
    "Sefirat HaOmer": "Day 5"
  },
  "2025-04-17": {
    "Alot Hashachar": "04:36",
    "Sunrise": "06:05",
    "Sof Zman Shema": "09:08",
    "Sof Zman Tefillah": "10:16",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:21",
    "Mincha Ketana": "16:18",
    "Plag Hamincha": "17:51",
    "Sunset": "19:23",
    "Tzeit": "19:51",
    "Chatzot Halayla": "00:45",
    "Sefirat HaOmer": "Day 6"
  },
  "2025-04-18": {
    "Alot Hashachar": "04:34",
    "Sunrise": "06:03",
    "Sof Zman Shema": "09:07",
    "Sof Zman Tefillah": "10:15",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:21",
    "Mincha Ketana": "16:19",
    "Plag Hamincha": "17:52",
    "Sunset": "19:24",
    "Tzeit": "19:52",
    "Chatzot Halayla": "00:45",
    "Hadlakas Neiros": "19:20",
    "Sefirat HaOmer": "Day 7"
  },
  "2025-04-19": {
    "Alot Hashachar": "04:33",
    "Sunrise": "06:02",
    "Sof Zman Shema": "09:06",
    "Sof Zman Tefillah": "10:14",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:21",
    "Mincha Ketana": "16:19",
    "Plag Hamincha": "17:52",
    "Sunset": "19:25",
    "Tzeit": "19:53",
    "Chatzot Halayla": "00:45",
    "Yom Tov Ends": "20:24",
    "Sefirat HaOmer": "Day 8"
  },
  "2025-04-20": {
    "Alot Hashachar": "04:31",
    "Sunrise": "06:00",
    "Sof Zman Shema": "09:04",
    "Sof Zman Tefillah": "10:13",
    "Chatzot": "12:45",
    "Mincha Gedola": "13:22",
    "Mincha Ketana": "16:20",
    "Plag Hamincha": "17:53",
    "Sunset": "19:26",
    "Tzeit": "19:54",
    "Chatzot Halayla": "00:45",
    "Yom Tov Ends": "20:26",
    "Sefirat HaOmer": "Day 9"
  }
};
const kriatHatorahCache = {
  "2025-04-12": "Parshas Tzav (Shabbos Hagadol): Haftorah - Malachi 3:4–24",
  "2025-04-13": "1st Day Pesach: Shemos 12:21–51; Bamidbar 28:16–25 | Haftorah - Yehoshua 3:5–7, 5:2–6:1, 6:27",
  "2025-04-14": "Chol Hamoed Pesach: Vayikra 22:26–23:44; Bamidbar 28:19–25",
  "2025-04-15": "Chol Hamoed Pesach: Shemos 13:1–16; Bamidbar 28:19–25",
  "2025-04-16": "Chol Hamoed Pesach: Shemos 22:24–23:19; Bamidbar 28:19–25",
  "2025-04-17": "Chol Hamoed Pesach: Shemos 34:1–26; Bamidbar 28:19–25",
  "2025-04-18": "Chol Hamoed Pesach: Bamidbar 9:1–14; Bamidbar 28:19–25",
  "2025-04-19": "7th Day Pesach (Shabbos): Shemos 13:17–15:26; Bamidbar 28:19–25; Shir Hashirim | Haftorah - Shmuel Beis 22:1–51"
};
const pesachSchedule = {
  "2025-04-11": [
    {
      "time": "08:30",
      "event": "Shacharis"
    },
    {
      "time": "10:30",
      "event": "Bus to Imotski & Lakes"
    },
    {
      "time": "13:30",
      "event": "Lunch at the House"
    },
    {
      "time": "19:10",
      "event": "Mincha/Kabbalas Shabbos/Ma'ariv"
    },
    {
      "time": "19:11",
      "event": "Hadlakas Neiros"
    },
    {
      "time": "After Ma'ariv",
      "event": "Dinner: Reb Zev Levenstein, Rabbanit Dr. Adina Shapiro"
    },
    {
      "time": "21:00",
      "event": "Games / Tisch"
    }
  ],
  "2025-04-12": [
    {
      "time": "07:00",
      "event": "Shacharis"
    },
    {
      "time": "09:00",
      "event": "Kiddush (Speaker: HaRav YA Moshel)"
    },
    {
      "time": "13:00",
      "event": "Lunch / Shalosh Seudos: Sir Uncle Howard Levenstein, HaRav Rafi Shapiro"
    },
    {
      "time": "Following Lunch",
      "event": "Mincha"
    },
    {
      "time": "20:15",
      "event": "Ma'ariv"
    },
    {
      "time": "20:45",
      "event": "Seder Begins"
    },
    {
      "time": "00:51",
      "event": "Latest Time to Eat Afikoymen"
    }
  ],
  "2025-04-13": [
    {
      "time": "08:30",
      "event": "Shacharis"
    },
    {
      "time": "13:00",
      "event": "Lunch: Professor Ariella Levenstein, R’ Moshe Tzvi Shapiro"
    },
    {
      "time": "Following Lunch",
      "event": "Mincha"
    },
    {
      "time": "20:15",
      "event": "Ma'ariv"
    },
    {
      "time": "After Ma'ariv",
      "event": "Dinner: Matzah Pizza Party"
    }
  ],
  "2025-04-14": [
    {
      "time": "08:30",
      "event": "Shacharis"
    },
    {
      "time": "13:00",
      "event": "Lunch"
    },
    {
      "time": "14:30",
      "event": "Optional Hike"
    },
    {
      "time": "18:00",
      "event": "Dinner"
    },
    {
      "time": "20:15",
      "event": "Ma'ariv"
    }
  ],
  "2025-04-15": [
    {
      "time": "07:30",
      "event": "Shacharis"
    },
    {
      "time": "08:30",
      "event": "Bus Trip to National Park (TBD)"
    },
    {
      "time": "18:30",
      "event": "Mincha & Dinner"
    },
    {
      "time": "After Dinner",
      "event": "Ma'ariv"
    }
  ],
  "2025-04-16": [
    {
      "time": "07:30",
      "event": "Shacharis"
    },
    {
      "time": "08:30",
      "event": "Bus Trip to Dubrovnik"
    },
    {
      "time": "18:30",
      "event": "Mincha & Dinner"
    },
    {
      "time": "After Dinner",
      "event": "Ma'ariv"
    }
  ],
  "2025-04-17": [
    {
      "time": "08:30",
      "event": "Shacharis"
    },
    {
      "time": "09:30",
      "event": "Boat Tour: Ocean / Island Day"
    },
    {
      "time": "18:30",
      "event": "Mincha & Dinner"
    },
    {
      "time": "After Dinner",
      "event": "Ma'ariv"
    }
  ],
  "2025-04-18": [
    {
      "time": "07:30",
      "event": "Shacharis"
    },
    {
      "time": "08:30",
      "event": "Biokovo Hike"
    },
    {
      "time": "19:18",
      "event": "Mincha & Ma'ariv"
    },
    {
      "time": "19:20",
      "event": "Hadlakas Neiros"
    },
    {
      "time": "20:15",
      "event": "Dinner: Reb Reuven & Morah Meira Shapiro"
    },
    {
      "time": "21:00",
      "event": "Games / Tisch"
    }
  ],
  "2025-04-19": [
    {
      "time": "08:30",
      "event": "Shacharis"
    },
    {
      "time": "13:00",
      "event": "Lunch: Amiad Levenstein, Rabenu Yitz Moshel"
    },
    {
      "time": "Following Lunch",
      "event": "Mincha"
    },
    {
      "time": "18:15",
      "event": "Shalosh Seudos / Dinner"
    },
    {
      "time": "20:24",
      "event": "Ma'ariv"
    }
  ],
  "2025-04-20": [
    {
      "time": "07:15",
      "event": "Shacharis"
    },
    {
      "time": "08:15",
      "event": "Depart for Airport"
    },
    {
      "time": "13:00",
      "event": "Flight to Germany"
    },
    {
      "time": "19:30",
      "event": "Flight to Israel"
    },
    {
      "time": "12:00",
      "event": "Lunch"
    },
    {
      "time": "20:26",
      "event": "Ma'ariv / Yom Tov Ends"
    }
  ]
};

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

    const now = new Date();
    let iso = now.toISOString().split("T")[0];

    // Halachic day: shift after shkiah
    const sunset = zmanimCache[iso]?.["Sunset"];
    if (sunset) {
      const [h, m] = sunset.split(":").map(Number);
      const shkiah = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
      if (now > shkiah) {
        const shifted = new Date(now.getTime() + 86400000);
        iso = shifted.toISOString().split("T")[0];
      }
    }

    const heb = hebcalCache[iso];
    if (heb) {
      
    const hebrewReplacements = {'Yud-Gimel Nisan 5785': 'י״ג ניסן תשפ״ה', 'Yud-Daled Nisan 5785': 'י״ד ניסן תשפ״ה', 'Tes-Vov Nisan 5785': 'ט״ו ניסן תשפ״ה', 'Tes-Zayin Nisan 5785': 'ט״ז ניסן תשפ״ה', 'Yud-Zayin Nisan 5785': 'י״ז ניסן תשפ״ה', 'Yud-Ches Nisan 5785': 'י״ח ניסן תשפ״ה', 'Yud-Tes Nisan 5785': 'י״ט ניסן תשפ״ה', 'Chof Nisan 5785': 'כ׳ ניסן תשפ״ה', 'Chof-Alef Nisan 5785': 'כ״א ניסן תשפ״ה', 'Chof-Beis Nisan 5785': 'כ״ב ניסן תשפ״ה'};

    if (heb && heb.hebrew && document.getElementById("hebrew-date")) {
      const realHebrew = hebrewReplacements[heb.hebrew] || heb.hebrew;
      document.getElementById("hebrew-date").innerText = realHebrew;
    }

      if (document.getElementById("parsha-left")) document.getElementById("parsha-left").innerText = "Parsha/Krias HaTorah: " + (heb.parsha_krias || "—");
      if (document.getElementById("daf-left")) document.getElementById("daf-left").innerText = "Daf Yomi: " + heb.daf_yomi;
      const parshaBox = document.getElementById("parsha-summary");
      if (parshaBox && heb.parsha) parshaBox.innerText = "Parsha: " + heb.parsha;
    }

    // Display Zmanim
    const zmanimList = document.getElementById("zmanim-list");
    if (zmanimList && zmanimCache[iso]) {
      zmanimList.innerHTML = '';
      for (const [label, time] of Object.entries(zmanimCache[iso])) {
        const li = document.createElement("li");
        li.textContent = `${label}: ${time}`;
        if (label.includes("Sefirat") || label.includes("Candle") || label.includes("Yom Tov") || label.includes("Chametz")) {
          li.style.color = "#FFD700";
        }
        zmanimList.appendChild(li);
      }
    }

    // Display Kriat HaTorah
    const torahReading = kriatHatorahCache[iso];
    if (torahReading) {
      const el = document.createElement("div");
      el.className = "text";
      el.style.marginTop = "10px";
      el.style.fontSize = "1.2em";
      el.style.fontStyle = "italic";
      el.innerText = "Kri’as HaTorah: " + torahReading;
      document.querySelector(".top-bar")?.appendChild(el);
    }

    // Display Today’s Schedule
    const scheduleList = document.getElementById("schedule-list");
    
    scheduleList.innerHTML = "";
    
    const todaysEvents = pesachSchedule[iso] || [];
    const speakerKeywords = [
      "R’", "Rabbi", "Reb", "HaRav", "Shapiro", "Levenstein", "Speaker",
      "Dr.", "Professor", "Uncle", "Morah", "הרב", "רבנו"
    ];
    const detected = new Set();

    if (todaysEvents.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No scheduled events today. Enjoy your Yom Tov!";
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

    // Display speaker summary under image
    const speakersList = document.getElementById("speakers-list");
    const speakersTitle = document.getElementById("speakers-title");

    if (speakersList && detected.size > 0) {
      speakersList.innerHTML = "";
      Array.from(detected).forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        speakersList.appendChild(li);
      });
    } else if (speakersTitle) {
      speakersTitle.style.display = "none";
    }
  } catch (err) {
    console.error("Dashboard error:", err);
  }
};


    if (!zmanimCache[iso]) {
      const li = document.createElement("li");
      li.textContent = "Zmanim unavailable.";
      li.style.fontStyle = "italic";
      zmanimList.appendChild(li);
    }

// Set Mazel Tovs Message
const mazelTovMessage = "Mazel Tov to Meira and Moshe Tzvi Shapiro on their upcoming wedding";
if (mazelBox) mazelBox.innerText = mazelTovMessage;
// Set Mazel Tovs Message
window.addEventListener('DOMContentLoaded', () => {
  const mazelTovMessage = "Mazel Tov to Meira and Moshe Tzvi Shapiro on their upcoming wedding";
  const mazelBox = document.getElementById("mazel-tovs-text");
  if (mazelBox) mazelBox.innerText = mazelTovMessage;
});
