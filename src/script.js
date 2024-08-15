import "./style.css";
import "./asserts";
import profileData from "./asserts/data.json";
import workProfile from "./workProfile";

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
  indicator.className =
    "h-4 w-4 rounded-full bg-white border-4 border-black shadow-inner";

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
    skillsUL.className = "flex flex-col gap-2";
    x?.forEach((y) => {
      skillsUL.append(skillItemComponent(y));
    });
    skillsWrapper.append(skillsUL);
  });
}

function prepareWorkLayout() {
  const workHistorySection = document.getElementById("workHistorySection");
  profileData?.workHistory?.forEach((details) => {
    const workSection = document.createElement("section");
    workSection.className =
      "detailsWrapper max-w-3xl grid grid-cols-autoOneFrameColumns gap-4 mb-8";

    const workLogo = document.createElement("img");
    workLogo.src = "./asserts/work.svg";
    workLogo.className = "col-start-1 bg-gray-200 p-2 rounded-md";

    const companyDetailsSection = document.createElement("section");
    companyDetailsSection.className = "col-start-2";

    const role = document.createElement("p");
    const companyName = document.createElement("p");
    const duration = document.createElement("p");

    role.textContent = details?.role;
    companyName.textContent = details?.companyName;
    duration.textContent = `${details?.startDate} - ${details?.endDate}`;

    companyDetailsSection.append(role, companyName, duration);

    const projectSection = document.createElement("section");
    projectSection.className = "col-start-2";

    details?.projectDetails?.forEach((project) => {
      const projectWrapper = document.createElement("section");
      const title = document.createElement("p");
      const ul = document.createElement("ul");
      ul.className = "list-disc pl-10";
      title.textContent = project?.title;
      project?.details?.forEach((info) => {
        const li = document.createElement("li");
        li.textContent = info;
        ul.appendChild(li);
      });
      projectWrapper.append(title, ul);
      projectSection.appendChild(projectWrapper);
    });

    workSection.append(workLogo, companyDetailsSection, projectSection);

    workHistorySection.append(workSection);
  });
}

function prepareAwardLayout() {
  const awards = document.getElementById("awards");

  profileData?.achievements?.forEach((x) => {
    const awardsLi = document.createElement("li");
    awardsLi.textContent = `${x?.name} - ${x?.year}`;
    awards.appendChild(awardsLi);
  });
}

workProfile(profileData?.workHistory);

prepareSkilsLayout();
prepareAwardLayout();
