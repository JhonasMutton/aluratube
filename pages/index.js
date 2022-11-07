import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import { CSSReset } from "../src/components/CSSReset"
import { StyledTimeline } from "../src/components/Timeline"
function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>

    )
}

export default HomePage // Definindo a pagina defaut 

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

    }

`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="img"/> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ playlists }) {
    const playlistKeys = Object.keys(playlists)
    return <StyledTimeline>
        {
            playlistKeys.map((playlistName) => {
                const videos = playlists[playlistName]
                console.log(videos)
                return (
                    <section>
                        <h2> {playlistName}</h2>
                        <div>
                            {videos.map((video) =>
                                <a href={video.url}>
                                    <img src={video.thumbnail} />
                                    <span> {video.title} </span>
                                </a>)}
                        </div>
                    </section>
                )
            }
            )
        }
    </StyledTimeline>
}