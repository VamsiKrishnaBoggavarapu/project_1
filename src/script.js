import "./style.css";
import "./asserts";
import profileData from "./asserts/data.json";
import workProfile from "./workProfile";
import skillsProfile from "./skillsProfile";
import achievements from "./achievements";
import education from "./education.js";

// window.addEventListener("load", (event) => {
//   document.getElementById("main").style.visibility = "visible";
//   document.getElementById("footer").style.visibility = "visible";
// });

const fullName = document.getElementById("fullName");
const summary = document.getElementById("summary");
const expYears = document.getElementById("expYears");
const expYearsPlaceholder = document.getElementById("expYearsPlaceholder");
const skillsWrapper = document.getElementById("skillsWrapper");

fullName.textContent = `${profileData?.firstName} ${profileData?.lastName}`;
summary.textContent = profileData?.summary;
expYears.textContent = profileData?.experience?.years;
expYearsPlaceholder.textContent = profileData?.experience?.years;

workProfile(profileData?.workHistory);
skillsProfile(profileData?.skills);
achievements(profileData?.achievements);
education(profileData?.education);
