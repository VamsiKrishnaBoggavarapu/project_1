export default function achievements(achievements) {
  const awards = document.getElementById("awards");

  achievements?.forEach((x) => {
    const awardsLi = document.createElement("li");
    awardsLi.textContent = `${x?.name} - ${x?.year}`;
    awards.appendChild(awardsLi);
  });
}
