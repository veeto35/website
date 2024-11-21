function Social({target, src, text}) {
    return (
        <div className="w-20 h-20">
            <a href={target} target="_blank"><img src={src} alt="linkedin" />{text}</a>
        </div>
    )
}

export default Social
