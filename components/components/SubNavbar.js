const SubNavbar = () => {
    return (
        <div id="sub-navbar" className="navbar navbar-expand-lg z-1 d-none d-lg-block bg-dark text-white x-small py-2">
            <div className="container">
                <div className="mr-auto" />
                <div className="mx-min-3">
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-map-marker-alt mr-2" />
                        Grand Center Point Jl. Ayani Kav 20 , Bekasi
                    </div> 
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-envelope mr-2" />
                        info@baleroom.com
                    </div>
                    <div className="navbar-text px-3 py-0">
                        <i className="fa fa-phone mr-2" />
                        0812-5050-550
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;
