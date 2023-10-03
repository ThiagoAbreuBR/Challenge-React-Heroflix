import React from "react";
import Slider from "react-slick";
import { VideoCard } from "../VideoCard";
import { sliderSettings } from "../Slider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrosel.css'
import { useEditoras } from "componentes/Context/ContextColors";

function Carrosel({ onItemClick }) {

    const filmes = VideoCard();
    const contextCores = useEditoras();

    const getFilteredFilmes = (publishingCompany) => {
        return filmes.filter((item) => item.publishingCompany === publishingCompany);
    };

    const getCoresEditora = (publishingCompany) => {
        return contextCores
            .filter((filme) => filme.publishingCompany === publishingCompany)
            .map((cor) => ({
                color: cor.color,
                background: cor.background
            }));
    };

    return (
        <div className="carrosel">
            {Array.from(new Set(filmes.map((item) => item.publishingCompany))).map((company) => {
                const coresEditora = getCoresEditora(company);

                return (
                    <div key={company}>
                        <div>
                            {coresEditora.map((cor, index) => (
                                <h2
                                    key={index}
                                    style={{
                                        color: cor.color,
                                        background: cor.background,
                                        borderRadius: "5px 5px",
                                        display: "inline",
                                        fontSize: "33px",
                                        padding: "1rem 1rem",
                                        textAlign: "center",
                                        fontFamily: "Saira Semi Condensed, sans-serif",
                                    }}
                                >
                                    {company}
                                </h2>
                            ))}
                        </div>
                        <Slider {...sliderSettings}>
                            {getFilteredFilmes(company).map((item) => (
                                <div
                                    className="carrosel-card"
                                    key={item.id}
                                    onClick={() => onItemClick(item)}
                                >
                                    <div className="carrosel-card--wallpaper">
                                        <img src={item.wallpaper} alt={item.title} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
            })}
        </div>
    );
}

export default Carrosel;