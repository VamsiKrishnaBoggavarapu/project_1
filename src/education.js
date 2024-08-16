function logo() {
  const logo = document.createElement("img");
  logo.src = "./asserts/education.svg";
  logo.className = "col-start-1 bg-gray-200 p-2 rounded-md";
  return logo;
}

function educationDetailsSection(details) {
  const section = document.createElement("section");
  section.className = "col-start-2 flex flex-col";

  const program = document.createElement("p");
  program.className = "font-bold text-base";
  const grade = document.createElement("p");
  grade.className = "text-xs font-bold";
  const institution = document.createElement("p");
  institution.className = "mt-2";
  const duration = document.createElement("p");
  duration.className = "text-xs";

  program.textContent = details?.program;
  institution.textContent = details?.institution;
  duration.textContent = `${details?.startDate} - ${details?.endDate}`;
  grade.textContent = `Final Grade: ${details?.finalGrade}`;
  section.append(program, grade, institution, duration);
  return section;
}

export default function education(education) {
  const educationSection = document.getElementById("educationSection");

  education?.forEach((details) => {
    const section = document.createElement("section");
    section.className =
      "detailsWrapper max-w-3xl grid grid-cols-autoOneFrameColumns gap-4 mb-8";
    section.append(logo(), educationDetailsSection(details));

    educationSection.append(section);
  });
}
