
const ProjectCard = ({ bgUrl, videoSrc, github, demoLink, hasDemo }) => {
    return (
        <div>
            <div className={`video-container bg-['${bgUrl}'] w-56 `}
                style={{ backgroundImage: `url(${bgUrl})` }}>
                <iframe
                    src={`${videoSrc}`}
                    width="480"
                    height="270"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                ></iframe>
            </div>
            <div className="mt-5">
                <a href={github} target="_blank">GitHub</a>
                <a href={demoLink} className={`${hasDemo ? '' : 'hidden'}`} target="_blank">Demo</a>
            </div>
        </div >
    )
}
const Projects = () => {
    return (
        <section id="projects" className="wrapper text-center mt-20">
            <h1 className="text-5xl font-medium">A small collection</h1>
            <h1 className="text-5xl font-medium"> of my work.</h1>

            <div className="videos-container mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 justify-items-center">
                <ProjectCard
                    bgUrl={"bg1.jpg"}
                    videoSrc={"https://player.cloudinary.com/embed/?cloud_name=df5gyuau5&public_id=coop_portfolio_video_1_sufz1i&profile=coop%20video&autoplay=true"}
                    github={"https://github.com/namjot7/scheduling-college-project.git"}
                    demoLink={"https://github.com/namjot7/scheduling-college-project.git"}
                    hasDemo={false}
                />
                <ProjectCard
                    bgUrl={"bg3.jpg"}
                    videoSrc={"https://player.cloudinary.com/embed/?cloud_name=df5gyuau5&public_id=construction_website_1_kmnrhl&autoplay=true&muted=true&loop=true&show_jump_controls=true"}
                    github={""}
                    demoLink={""}
                    hasDemo={false}
                />
            </div>
        </section>
    )
}

export default Projects