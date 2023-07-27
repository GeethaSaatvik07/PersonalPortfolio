export const ResumeEducationCards = (props) => {
  const { educationDetails } = props;
  const { title, cardTitle, cardCollege, description } = educationDetails;
  return (
    <div className="chrono-card">
      <h4 className="chrono-title">{cardTitle}</h4>
      <h5 className='chrono-date'>{title}</h5>
      <p className="chrono-line">{cardCollege}</p>
      <p className="chrono-sublines">{description}</p>
    </div>
  );
};

export const ResumeSummaryCard = (props) => {
  const { summaryDetails } = props;
  const { cardTitle, summaryList, description } = summaryDetails;
  return (
    <div className="chrono-card">
      <h4 className="chrono-title">{cardTitle}</h4>
      <p className="chrono-line">{description}</p>
      <ul className="chrono-sublines">
        {summaryList.map((each) => (
          <li className="chrono-list" key={each.id}>
            {each.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ResumeExperienceCards = (props) => {
  const { jobDetails } = props;
  const { title, cardTitle, cardCollege, experience } = jobDetails;
  return (
    <div className="chrono-card">
      <h4 className="chrono-title">{cardTitle}</h4>
      <h5 className='chrono-date'>{title}</h5>
      <p className="chrono-line">{cardCollege}</p>
      <ul className="chrono-sublines">
        {experience.map((each) => (
          <li className="chrono-list" key={each.id}>
            {each.exp}
          </li>
        ))}
      </ul>
    </div>
  );
};
