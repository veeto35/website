function Social({target, src, text}) {
    return (
        <div className="w-8 h-8">
            <a href={target} target="_blank"><img src={src} alt={text} />{text}</a>
        </div>
    )
}

export default Social
