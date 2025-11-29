const Hero = () => {
    return (
        <div className="hero wrapper relative mt-24 md:m-0">
            <div className="flex-center h-[80vh] gap-16 flex-col-reverse md:flex-row">
                <div>
                    <h2 className="h2-bold">Hi! My name is <span className="primary-color">Namjot Singh</span></h2>
                    <h2 className="h2-bold my-5">I am learning <span className="primary-color">Full-Stack Web Development.</span></h2>
                    <p>I build responsive and interactive projects using clean, efficient logic and modern frontend tools.</p>
                    <div className="btns mt-5 md:mt-10 flex gap-7 text-lg">
                        <a href="/Namjot_Resume.pdf" className="btn primary-color">Download Resume</a>
                        <a href="#contact" className="btn primary-color">Contact Me</a>
                    </div>
                </div>
                <div className="myimg-container relative">
                    <img className="rounded-full" width={300} src="/myphoto.jpg" alt="namjot_picture" />
                </div>
            </div>
        </div>
    )
}

export default Hero