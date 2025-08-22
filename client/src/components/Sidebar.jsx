import { Link } from "react-router";

export function Sidebar() {
    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin">
                                Administration
                            </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Input items boxes </span>
                    </h6>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/movies/new">
                                New item box
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/movies">
                                All boxes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/movies/published">
                                Finished boxes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/movies/draft">
                                Not full parcels
                            </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Container categories</span>
                    </h6>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/categories/new">
                                New container
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/categories">
                                Container categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/categories/published">
                                Full cointainers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/categories/draft">
                                Empty containers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}