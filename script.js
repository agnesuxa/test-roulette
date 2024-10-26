const allEpisodes = [
  { name: "Episode 1", img: "image1.jpg", url: "#1" },
  { name: "Episode 2", img: "image2.jpg", url: "#2" },
  { name: "Episode 3", img: "image2.jpg", url: "#3" },
  { name: "Episode 4", img: "image2.jpg", url: "#4" },
  { name: "Episode 5", img: "image2.jpg", url: "#5" },
  { name: "Episode 6", img: "image2.jpg", url: "#6" },
  { name: "Episode 7", img: "image2.jpg", url: "#7" },
  { name: "Episode 8", img: "image2.jpg", url: "#8" },
  { name: "Episode 9", img: "image2.jpg", url: "#9" },
  { name: "Episode 10", img: "image2.jpg", url: "#10" },
];

function getRandomEpisodes(num) {
  return [...allEpisodes].sort(() => 0.5 - Math.random()).slice(0, num);
}

document.getElementById("openRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "flex";
  const episodeWheel = document.getElementById("episodeWheel");
  episodeWheel.innerHTML = ""; 

  getRandomEpisodes(10).forEach(episode => {
    const slice = document.createElement("div");
    slice.classList.add("slice");
    slice.innerText = episode.name;
    episodeWheel.appendChild(slice);
  });
};

document.getElementById("closeRoulette").onclick = function() {
  document.getElementById("roulettePopUp").style.display = "none";
};

document.getElementById("spinButton").onclick = function() {
  const wheel = document.querySelector(".wheel");
  const randomRotation = Math.floor(Math.random() * 3600) + 720;
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  setTimeout(() => {
    const selectedEpisode = getRandomEpisodes(1)[0];
    showEpisodeNotification(selectedEpisode);
  }, 4000);
};

function showEpisodeNotification(episode) {
  const notification = document.getElementById("episodeNotification");
  document.getElementById("episodeName").textContent = episode.name;
  const episodeImage = document.getElementById("episodeImage");
  episodeImage.src = episode.img;
  episodeImage.onclick = () => window.location.href = episode.url;

  notification.style.display = "block";
}

document.getElementById("episodeNotification").onclick = function() {
  this.style.display = "none";
};
