import React from "react";

export default function BasicTimeline() {
  const experience = [
    {
      role: "Software Enginnering Intern",
      place: "AjiCod",
      url: "https://ajicod.com/en",
      date: "Apr 2022 - Present",
    },
    {
      role: "Content Creation Lead",
      place: "GDSCUIZ",
      url: "https://gdsc.community.dev/university-of-ibn-zohr/",
      date: "Sep 2021 - Present",
    },
    {
      role: "Software Engineering Intern",
      place: "Atlanta Sanad",
      url: "https://www.atlantasanad.ma",
      date: "Aug 2021 - Sep 2021",
    },
  ];
  return (
    <div>
      <div class="timeline">
        {experience.map((item) => (
          <div class="timeline-item">
            <div class="job">
              {item.role} |{" "}
              <strong>
                <a href={item.url}>{item.place}</a>
              </strong>
            </div>
            <div class="timeline-date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
