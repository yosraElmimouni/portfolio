import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks, bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const ProjectCard = lazy(() =>
    import("../../components/ProjectDetail")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState(bigProjects.projects);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  // Removed GitHub API call to use local data from portfolio.js
  if (bigProjects.projects.length > 0) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">{bigProjects.title}</h1>
          <div className="repo-cards-div-main">
            {repo.map((project, i) => {
              return (
                <ProjectCard project={project} key={i} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"Voir plus sur GitHub"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
