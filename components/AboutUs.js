const AboutUs = () => {
    return (
        <section id="about-us" className="py-5">
            <div className="container">
                <div className="about-us-header text-center mb-0">
                    <h1 className="h5 font-weight-bold mb-3">
                        <i className="fa fa-home text-secondary mr-2"/>Tentang Baleroom
                    </h1>
                    <div className="w-75 m-auto">
                        <p className="small text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eum voluptas minima repellat quod. Accusamus nam in, accusantium ducimus eos iste quis, vel magni dolor adipisci molestiae nihil soluta ea dolores animi fugit obcaecati error earum magnam? Totam, quisquam quis.
                        </p>
                        <button className="btn btn-primary shadow-sm">
                            Baca Selengkapnya<i className="fa fa-arrow-right ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;