import "./style.css";
import "./asserts/favIcon.svg";
import profileData from "./asserts/data.json";

const fullName = document.getElementById("fullName");
const summary = document.getElementById("summary");
const expYears = document.getElementById("expYears");
const expYearsPlaceholder = document.getElementById("expYearsPlaceholder");

fullName.textContent = `${profileData?.firstName} ${profileData?.lastName}`;
summary.textContent = profileData?.summary;
expYears.textContent = profileData?.experience?.years;
expYearsPlaceholder.textContent = profileData?.experience?.years;
