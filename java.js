// ==========================================
// CYBER NEXUS
// MAIN JAVASCRIPT
// ==========================================


// ==========================================
// CLOCK
// ==========================================

function updateClock() {

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");


    document.getElementById("clock")
        .textContent =
        `${hours}:${minutes}:${seconds}`;


    const days = [
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
    ];

    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ];


    document.getElementById("date")
        .textContent =
        `${days[now.getDay()]} / ` +
        `${String(now.getDate()).padStart(2, "0")} ` +
        `${months[now.getMonth()]} ` +
        `${now.getFullYear()}`;
}


setInterval(updateClock, 1000);

updateClock();


// ==========================================
// NETWORK TRAFFIC
// ==========================================

function updateTraffic() {

    const traffic =
        document.getElementById("traffic");

    const random =
        (75 + Math.random() * 20).toFixed(1);

    traffic.textContent = random;
}


setInterval(updateTraffic, 2000);


// ==========================================
// REQUEST COUNTER
// ==========================================

let requests = 128492;


function updateRequests() {

    requests +=
        Math.floor(
            Math.random() * 30
        ) + 5;


    document.getElementById("requests")
        .textContent =
        requests.toLocaleString();
}


setInterval(updateRequests, 1500);


// ==========================================
// SECURITY SCORE
// ==========================================

function updateSecurityScore() {

    const score =
        document.getElementById(
            "securityScore"
        );

    const value =
        91 + Math.floor(
            Math.random() * 7
        );

    score.textContent = value;
}


setInterval(updateSecurityScore, 4000);


// ==========================================
// REFRESH SERVERS
// ==========================================

function refreshServers() {

    const button =
        document.querySelector(".refresh");

    button.textContent =
        "⟳ SCANNING...";

    button.style.color =
        "#ffd166";


    setTimeout(() => {

        button.textContent =
            "✓ UPDATED";

        button.style.color =
            "#00ff88";


        setTimeout(() => {

            button.textContent =
                "↻ REFRESH";

            button.style.color =
                "#00f6ff";

        }, 1500);

    }, 1200);
}


// ==========================================
// TERMINAL COMMANDS
// ==========================================

const terminal =
    document.getElementById(
        "terminalOutput"
    );


function terminalMessage(
    message,
    className = ""
) {

    const p =
        document.createElement("p");

    p.className = className;

    p.textContent = message;

    terminal.appendChild(p);

    terminal.scrollTop =
        terminal.scrollHeight;
}


// ==========================================
// FAKE SECURITY EVENT
// ==========================================

const events = [

    "Firewall packet inspected",

    "Encrypted connection established",

    "Suspicious packet blocked",

    "Network traffic analyzed",

    "Authentication request verified",

    "Threat database synchronized",

    "Security protocols updated"

];


function randomSecurityEvent() {

    const event =
        events[
            Math.floor(
                Math.random() *
                events.length
            )
        ];


    terminalMessage(
        `[SYSTEM] ${event}`,
        "success"
    );
}


setInterval(
    randomSecurityEvent,
    5000
);


// ==========================================
// NAVIGATION ACTIVE STATE
// ==========================================

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function() {

            navLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            this.classList.add(
                "active"
            );

        }
    );

});


// ==========================================
// THEME BUTTON
// ==========================================

const themeButton =
    document.getElementById(
        "themeBtn"
    );


let neonMode = true;


themeButton.addEventListener(
    "click",
    function() {

        neonMode = !neonMode;


        if (neonMode) {

            document.documentElement
                .style
                .setProperty(
                    "--cyan",
                    "#00f6ff"
                );

            document.documentElement
                .style
                .setProperty(
                    "--green",
                    "#00ff88"
                );

            this.textContent =
                "◐ SYSTEM MODE";

        } else {

            document.documentElement
                .style
                .setProperty(
                    "--cyan",
                    "#ff00ff"
                );

            document.documentElement
                .style
                .setProperty(
                    "--green",
                    "#00ffff"
                );

            this.textContent =
                "◐ NEON MODE";

        }

    }
);


// ==========================================
// RANDOM THREAT NOTIFICATION
// ==========================================

const threatMessages = [

    "PORT SCAN DETECTED",

    "SUSPICIOUS LOGIN",

    "UNUSUAL TRAFFIC",

    "BRUTE FORCE BLOCKED"

];


setInterval(() => {

    const message =
        threatMessages[
            Math.floor(
                Math.random() *
                threatMessages.length
            )
        ];


    const notification =
        document.querySelector(
            ".notification span"
        );


    notification.textContent =
        Math.floor(
            Math.random() * 5
        ) + 1;


}, 7000);
