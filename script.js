function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 101);
  }

  function getLoveMessage(score) {
    if (score === 101) return "HORMAT GRAKK!";
    if (score === 100) return "Tinggal nikah aja ini mah";
    if (score >= 90) return "Pacaran ga sih";
    if (score >= 80) return "Ada cinta nya ini";
    if (score >= 70) return "Cocok sih";
    if (score >= 60) return 'Ada cinta nya ini "kali"';
    if (score >= 50) return "Mending temenan aja";
    if (score > 0) return "Ga ada cinta nya";
    if (score == 0) return "Cut off dia dari idup lu";
  }

  function calculateLove() {
    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();

    if (name1 === "" || name2 === "") {
      alert("Harap masukkan kedua nama terlebih dahulu!");
      return;
    }

    let combinedNames = name1 < name2 ? name1 + name2 : name2 + name1;
    let loveScore;

    if ((name1.includes("farhan") && name2.includes("greesel")) || (name1.includes("greesel") && name2.includes("farhan"))) {
      loveScore = 0;
    } else if ((name1.includes("faidil") && name2.includes("freya")) || (name1.includes("freya") && name2.includes("faidil"))) {
      loveScore = 100;
    } else if ((name1.includes("farhan") && name2.includes("gracia")) || (name1.includes("gracia") && name2.includes("farhan"))) {
      loveScore = 101;
      document.getElementById("popup").style.display = "flex"; // Tampilkan pop-up
    } else if (name1.includes("farhan") || name2.includes("farhan")) {
      loveScore = Math.floor(Math.random() * 50);
    } else {
      loveScore = hashCode(combinedNames);
    }

    let message = getLoveMessage(loveScore);
    document.getElementById("result").innerHTML = `Kecocokan ${name1} ❤️ ${name2}<br>${message}`;

    // Update progress bar
    let progressBar = document.getElementById("love-bar");
    progressBar.style.width = loveScore + "%";
    progressBar.innerHTML = loveScore + "%";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }