function companyLogo() {
  const workLogo = document.createElement("img");
  workLogo.src = "./asserts/work.svg";
  workLogo.className = "col-start-1 bg-gray-200 p-2 rounded-md";
  return workLogo;
}

function companyDetailsSection(details) {
  const section = document.createElement("section");
  section.className = "col-start-2 flex flex-col";

  const role = document.createElement("p");
  role.className = "font-bold text-base";
  const companyName = document.createElement("p");
  companyName.className = "mt-2";
  const duration = document.createElement("p");
  duration.className = "text-xs";

  role.textContent = details?.role;
  companyName.textContent = details?.companyName;
  duration.textContent = `${details?.startDate} - ${details?.endDate}`;

  section.append(role, companyName, duration);
  return section;
}

function projectDetailsSection(projectDetails) {
  const section = document.createElement("section");
  section.className = "col-start-2 text-base flex flex-col gap-4";

  projectDetails?.forEach((project) => {
    const wrapper = document.createElement("section");
    const title = document.createElement("p");
    title.className = "font-bold";
    const ul = document.createElement("ul");
    ul.className = "list-disc pl-8";
    title.textContent = project?.title;
    project?.details?.forEach((info) => {
      const li = document.createElement("li");
      li.textContent = info;
      ul.appendChild(li);
    });
    wrapper.append(title, ul);
    section.appendChild(wrapper);
  });

  return section;
}

export default function workProfile(workHistory) {
  const workHistorySection = document.getElementById("workHistorySection");

  workHistory?.forEach((details) => {
    const workSection = document.createElement("section");
    workSection.className =
      "detailsWrapper max-w-3xl grid grid-cols-autoOneFrameColumns gap-4 mb-8";
    workSection.append(
      companyLogo(),
      companyDetailsSection(details),
      projectDetailsSection(details?.projectDetails)
    );

    workHistorySection.append(workSection);
  });
}
