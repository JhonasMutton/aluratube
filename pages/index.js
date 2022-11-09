import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import { CSSReset } from "../src/components/CSSReset"
import { StyledTimeline } from "../src/components/Timeline"
import { StyledFavorites } from "../src/components/Favorites"
function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header banner={config.banner} />
                <Timeline playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
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
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner { 
     width: 100%;
     height: 250px; 
     margin-top: 50px; 
     border-radius: 0%; 
     opacity: 100% 
}

`;

function Header(banner) {
    console.log("banner", banner)
    return (
        <StyledHeader>
            <img className="banner" src={"https://www.conceptseating.com/wp-content/uploads/2021/01/Market-Programming-Banner.jpg"} />
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

function Favorites(favorites) {
    console.log("favo", favorites)
    return (
        <StyledFavorites>
                <h2> AluraTubers Favoritos</h2>
                <div>
                    {favorites.favorites.map((favorite) =>
                        <div>
                            <img src={favorite.avatar} />
                            <span> {favorite.name} </span>
                        </div>)
                    }
                </div>
        </StyledFavorites>
    )
}