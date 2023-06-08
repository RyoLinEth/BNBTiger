import React from 'react'
import Link from "next/link";

const HomeMap = () => {
    const buttons = [
        {
            title: "Buy On PancakeSwap",
            link: "https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D",
            className: "time-count day",
        },
        {
            title: "Buy With Card",
            link: "https://flooz.xyz/trade/0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D?network=bsc&selectedTab=ACTIVITIES",
            className: "time-count hour",
        },
        {
            title: "Whitepaper",
            link: "https://www.bnbtiger.top/static/upload/file/20230203/1675386735503028.pdf",
            className: "time-count min",
        },
        {
            title: "BNBTiger Audit",
            link: "https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_BNBTIGER.pdf",
            className: "time-count sec",
        },
        {
            title: "Price Chart",
            link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7",
            className: "time-count sec",
        }
    ]

    const features = [
        {
            imageURL: "",
            imageLink: "https://www.coingecko.com/en/coins/bnb-tiger-inu",
            imageAlt: "CG",
        },
        {
            imageURL: "",
            imageLink: "https://coinmarketcap.com/currencies/bnbtiger/",
            imageAlt: "CMC",
        },
    ]

    const lists = [
        {
            imageURL: "",
            imageLink: "https://flooz.xyz/trade/0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D?network=bsc",
            imageAlt: "Flooz",
        },
        {
            imageURL: "",
            imageLink: "https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D",
            imageAlt: "PancakeSwap",
        },
        {
            imageURL: "",
            imageLink: "https://www.bitmart.com/trade/en-US?layout=basic&theme=dark&symbol=BNBTIGER%281M%29_USDT",
            imageAlt: "BitMart",
        },
        {
            imageURL: "",
            imageLink: "https://www.bkex.com/en/trade/BNBTiger_USDT",
            imageAlt: "BKEX",
        },
    ]

    const display = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
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
                                        style={{color: '#00C4F4'}}
                                    >{button.title}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            {/* Buttons End */}

            {/* Feature Start */}
            <br />
            <div className='title'> Featured On</div>

            <div style={display}>
                {features.map((feature, index) => {
                    return (
                        <div>
                            <div key={feature.imageAlt} className="coming-time">
                                <img src={feature.imageURL} alt={feature.imageAlt} className="time-count" />
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
                                <img src={list.imageURL} alt={list.imageAlt} className="time-count" />
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
