export function Frames() {
    return (
        <div className="Home-frames">
            <h3 className="Home-frames-title">
                Vous pouvez également me suivre sur mes réseaux, si ce n'est pas encore le cas :
            </h3>
            <div className="o-embed__user">
                <div className="posts">
                    <iframe
                        src="https://www.instagram.com/nsscake/embed"
                        className="o-insta"
                        width="500"
                        height="550"
                        scrolling="no"
                        style={{ borderRadius: '6px' }}
                        title="Instagram Embed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
