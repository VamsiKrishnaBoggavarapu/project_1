function items(skill) {
  const wrapper = document.createElement("div");
  wrapper.className = "flex flex-row items-center gap-2";

  const indicator = document.createElement("div");
  indicator.className =
    "h-4 w-4 rounded-full bg-white border-4 border-black shadow-inner";

  const li = document.createElement("li");
  li.textContent = skill;

  wrapper.append(indicator, li);
  return wrapper;
}

export default function skillsProfile(skills) {
  const divided = Math.ceil(skills?.length / 2);
  const skillSet1 = skills?.slice(0, divided);
  const skillSet2 = skills?.slice(divided, skills?.length);
  [skillSet1, skillSet2].forEach((skills) => {
    const ul = document.createElement("ul");
    ul.className = "flex flex-col gap-2";
    skills?.forEach((skill) => {
      ul.append(items(skill));
    });
    skillsWrapper.append(ul);
  });
}
