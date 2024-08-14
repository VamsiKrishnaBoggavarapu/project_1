import "./style.css";
import "./asserts/favIcon.svg";
import profileData from "./asserts/data.json";

const fullName = document.getElementById("fullName");
const summary = document.getElementById("summary");
const expYears = document.getElementById("expYears");
const expYearsPlaceholder = document.getElementById("expYearsPlaceholder");
const skillsWrapper = document.getElementById("skillsWrapper");

fullName.textContent = `${profileData?.firstName} ${profileData?.lastName}`;
summary.textContent = profileData?.summary;
expYears.textContent = profileData?.experience?.years;
expYearsPlaceholder.textContent = profileData?.experience?.years;

function skillItemComponent(item) {
  const skillItem = document.createElement("div");
  skillItem.className = "flex flex-row items-center gap-2";

  const indicator = document.createElement("div");
  indicator.className = "h-4 w-4 rounded-full bg-white border-4 border-black shadow-inner";

  const skillsLi = document.createElement("li");
  skillsLi.textContent = item;

  skillItem.append(indicator, skillsLi);
  return skillItem;
}

function prepareSkilsLayout() {
  const divided = Math.ceil(profileData?.skills?.length / 2);
  const skillSet1 = profileData?.skills?.slice(0, divided);
  const skillSet2 = profileData?.skills?.slice(
    divided,
    profileData?.skills?.length
  );
  [skillSet1, skillSet2].forEach((x) => {
    const skillsUL = document.createElement("ul");
    skillsUL.className ="flex flex-col gap-2";
    x?.forEach((y) => {
      skillsUL.append(skillItemComponent(y));
    });
    skillsWrapper.append(skillsUL);
  });
}

prepareSkilsLayout();
