import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="pt-5 pb-5 footer py-5 mt-5 bg-dark text-white" style={{position:"relative", zIndex:1}}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-6 col-xs-12">
            <h4 className="mb-3"></h4>
            <p></p>
          </div>
          <div className="col-lg-3 col-xs-12">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-2 p-2">
              <li>
                <a href="https://www.instagram.com/igem_rec?igsh=MXFyYnA3dmlsYXJxNw==">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xs-12">
            <h4 className="mt-lg-0 mt-sm-4 mb-3">Contact</h4>
            <p>Rajalakshmi Engineering College, Rajalakshmi Nagar Thandalam, Chennai - 602 105.</p>
            <p className="mb-0 tel"></p>
            <a href="mailto:igem@rajalakshmi.edu.in">igem@rajalakshmi.edu.in</a>
          </div>
        </div>
        <hr />
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-4">
          <div className="col">
            <p className="mb-0">
              <small>
                © 2024 - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small>
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
