function Skills({img, width, height,position}) {
    return (
        <div style={{width: `${width}`, height: `${height}`, "--position": position, animationDelay: `calc( (10s / var(--quantity)) * (${position} - 1 ))` }}
        className=" absolute left-full animate-[autoRun_10s_linear_infinite] group-hover:[animation-play-state:paused!important]" >
            <img src={img} className="w-full" />
        </div>
    )
}

export default Skills
