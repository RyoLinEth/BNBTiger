import React, { useEffect, useState, useContext } from 'react'
import Link from "next/link";
import LanguageContext from '../Context/LanguageProvider';

const HomeMap = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    const link = "https://api.dexscreener.com/latest/dex/pairs/bsc/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7";

    const [price, setPrice] = useState("0");

    useEffect(() => {
        fetchData();
    }, []);


    const NumberConversion = (originalData) => {
        const stringToNum = Number(originalData);
        const scientificNotation = stringToNum.toExponential();

        //  提取次方
        const match = scientificNotation.match(/e\+?(-?\d+)/);
        const exponent = parseInt(match[1], 10);
        const zeroCount = Math.abs(exponent) - 1;

        //  提取最後幾位
        const tempString = originalData.slice(-(originalData.length - zeroCount - 2))
        console.log(tempString)

        const convertedData = `0.0(${zeroCount})${tempString}`;

        return convertedData;
    };

    const fetchData = async () => {
        try {
            const response = await fetch(link);
            const tempData = await response.json();

            const tempPrice = tempData.pair.priceUsd
            const convertedPrice = NumberConversion(tempPrice)

            setPrice(convertedPrice);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const buttons = [
        {
            title: selectedLanguage == "EN" ? "Buy On PancakeSwap" : "Compre Na PancakeSwap",
            link: "https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D",
            className: "time-count day",
        },
        {
            title: selectedLanguage == "EN" ? "Buy With Card" : "Compre com Cartão",
            link: "https://flooz.xyz/trade/0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D?network=bsc&selectedTab=ACTIVITIES",
            className: "time-count hour",
        },
        {
            title: selectedLanguage == "EN" ? "Whitepaper" : "Papel branco",
            link: "/api/download",
            className: "time-count min",
        },
        {
            title: selectedLanguage == "EN" ? "BNBTiger Audit" : "Auditoria BNBTiger",
            link: "https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_BNBTIGER.pdf",
            className: "time-count sec",
        },
        {
            title: selectedLanguage == "EN" ? "Price Chart" : "Tabela de preços",
            link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7",
            className: "time-count sec",
        }
    ]

    const features = [
        {
            imageURL: "../img/svg/CoinGeckoLogo.svg",
            imageLink: "https://www.coingecko.com/en/coins/bnb-tiger-inu",
            imageAlt: "CG",
        },
        {
            imageURL: "../img/svg/cmc.png",
            imageLink: "https://coinmarketcap.com/currencies/bnbtiger/",
            imageAlt: "CMC",
        },
    ]

    const lists = [
        {
            imageURL: "../img/svg/flooz.png",
            imageLink: "https://flooz.xyz/trade/0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D?network=bsc",
            imageAlt: "Flooz",
        },
        {
            imageURL: "../img/svg/xt.png",
            imageLink: "https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D",
            imageAlt: "PancakeSwap",
        },
        {
            imageURL: "../img/svg/bitmart.png",
            imageLink: "https://www.bitmart.com/trade/en-US?layout=basic&theme=dark&symbol=BNBTIGER%281M%29_USDT",
            imageAlt: "BitMart",
        },
        {
            imageURL: "../img/svg/bkex.png",
            imageLink: "https://www.bkex.com/en/trade/BNBTiger_USDT",
            imageAlt: "BKEX",
        },
    ]

    const display = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

    const maxStyle = {
        width: '120px',
        height: 'auto',
        margin: '10px'
    }

    return (
        <div>
            {/* Buttons Start */}
            <div style={display}>
                {buttons.map((button, index) => {
                    return (
                        <div key={button.title} className="coming-time">
                            <Link href={button.link}>
                                <div className={button.className}>
                                    <div
                                        style={{ color: '#00C4F4' }}
                                    >{button.title}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            {/* Buttons End */}

            <br />
            <img src={"/img/icon/fire.png"} alt="" />
            <br />
            <h2 className="title">
                {
                    selectedLanguage === "EN"
                        ? "BNBTiger Realtime Price"
                        : "BNBTiger Preço em tempo real"
                }
                <br />
                <span style={{ color: '#00C4F4' }}>{price}</span>
            </h2>

            {/* Feature Start */}
            <br />
            <div className='title'>
                {
                    selectedLanguage === "EN"
                        ? "Featured On"
                        : "Destaque em"
                }</div>

            <div style={display}>
                {features.map((feature, index) => {
                    return (
                        <div>
                            <div key={feature.imageAlt} className="coming-time">
                                <Link href={feature.imageLink}>
                                    <img
                                        src={feature.imageURL}
                                        alt={feature.imageAlt}
                                        // className="time-count"
                                        style={maxStyle}
                                    />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* Feature End */}
            {/* List Start */}
            <br />
            <div className='title'> Listed On</div>

            <div style={display}>
                {lists.map((list, index) => {
                    return (
                        <div>
                            <div key={list.imageAlt} className="coming-time">
                                <Link href={list.imageLink} >
                                    <img
                                        src={list.imageURL}
                                        alt={list.imageAlt}
                                        // className="time-count"
                                        style={maxStyle}
                                    />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* List End */}

        </div>
    )
}

export default HomeMap
