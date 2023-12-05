const button = document.getElementById("calculate_btn");

function secondsToHMS() {
    // Convert seconds to hours, minutes, and remaining seconds
    const data = document.getElementById("data_input").value;

    const h_match = data.match(/(\d+)h/g);
    let hours = 0;
    if (h_match) {
        for (let i = 0; i < h_match.length; i++) {
            hours += parseInt(h_match[i]);
        }
    }

    const m_match = data.match(/(\d+)m/g);
    let minutes = 0;
    if (m_match) {
        for (let i = 0; i < m_match.length; i++) {
            minutes += parseInt(m_match[i]);
        }
    }

    const s_match = data.match(/(\d+)s/g);
    let seconds = 0;
    if (s_match) {
        for (let i = 0; i < s_match.length; i++) {
            seconds += parseInt(s_match[i]);
        }
    }

    const total_seconds = hours * 3600 + minutes * 60 + seconds;

    const h = Math.floor(total_seconds / 3600);
    const m = Math.floor((total_seconds % 3600) / 60);
    const rs = total_seconds % 60;

    const formattedHours = h.toString().padStart(2, '0');
    const formattedMinutes = m.toString().padStart(2, '0');
    const formattedSeconds = rs.toString().padStart(2, '0');

    return `${formattedHours}h:${formattedMinutes}m:${formattedSeconds}s`;
}

// Add an onclick event handler to the button
button.onclick = function() {
    // Get the value of the input field
    const hms = secondsToHMS();

    const result = document.getElementById("result");
    result.innerHTML = hms;
}
