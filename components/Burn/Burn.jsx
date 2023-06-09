import React from "react";
import Link from "next/link";
import { useContext } from "react"
import LanguageContext from "../Context/LanguageProvider"
import Fierce from "../Fierce/Fierce";

const WhoWeAre = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    const burns = [
        {
            title: 'Burn 1',
            link: 'https://bscscan.com/tx/0xe8187562340cb6230870d095135f9fded2a6e9f3d7c189b7140e16f0e1f5e0f5'
        },
        {
            title: 'Burn 2',
            link: 'https://bscscan.com/tx/0x9c1a3adb1fbc0103be9d9899dffb328b0bf0419e4a0467e610b7c828d646321d'
        },
        {
            title: 'Burn 3',
            link: 'https://bscscan.com/tx/0x1326dabe6c3df99cd7c84cf24bd95198cd892d3eefa3b7147c111e3c5f3b1643'
        },
        {
            title: 'Burn 4',
            link: 'https://bscscan.com/tx/0x1326dabe6c3df99cd7c84cf24bd95198cd892d3eefa3b7147c111e3c5f3b1643'
        },
        {
            title: 'Burn 5',
            link: 'https://bscscan.com/tx/0x3141f2bfc6c4e96f8696b00fa2e0aee26c19c395cf605bfc54c1d01d8999e934'
        },
        {
            title: 'Burn 6',
            link: 'https://bscscan.com/tx/0x0f656fe0f886d0a101f0661af73865e63c9731a991bb9f219ec250233fefa49a'
        },
        {
            title: 'Burn 7',
            link: 'https://bscscan.com/tx/0x0500bf2dd50d5e120c5afa431e19bbff927199e1057bf7b68bd1a1f51b3245c6'
        },
        {
            title: 'Burn 8',
            link: 'https://bscscan.com/tx/0x202a3ceee5418fef5ac36684ec2ce893d939da6333e6087775fd5beca1b50faa'
        },
        {
            title: 'Burn 9',
            link: 'https://bscscan.com/tx/0xc8f4e7e261550c8c2e054dd97204f244e2cf719796491d442dfe8fb4ed82c2f9'
        },
        {
            title: 'Burn 10',
            link: 'https://bscscan.com/tx/0x6adcea950a6ed708cfd67ea6ab849c96f9f71374ff43e344959d681a7c37d751'
        },
        {
            title: 'Burn 11',
            link: 'https://bscscan.com/tx/0x88319b9b857a354924e062f086e36376f527c4eb5ffe678566882751af6fe0cb'
        },
        {
            title: 'Burn 12',
            link: 'https://bscscan.com/tx/0xdf287a4b33769de23bf00abcd9b096aadb2cd3ef9faa95c17429b031b1ea524f'
        },
        {
            title: 'Burn 13',
            link: 'https://bscscan.com/tx/0x82ccfc9a0be26e22e48b9ae7eb491eac704ec912e9819cc9f332c457782397bb'
        },
        {
            title: 'Burn 14',
            link: 'https://bscscan.com/tx/0x6546b6a61a8bda21c85729b094657337ac88f4361b9a8e5cd320b41275ea370c'
        },
        {
            title: 'Burn 15',
            link: 'https://bscscan.com/tx/0x4bcf1d147708d70d2cd81829402efe44b419dd4e446199563ad3e5c6ed4d95f1'
        },
        {
            title: 'Burn 16',
            link: 'https://bscscan.com/tx/0x2537fb98a2a30189fbb18b5aeba1c918032f594220fc1556a7afb9132f065def'
        },
        {
            title: 'Burn 17',
            link: 'https://bscscan.com/tx/0x46bfbc9341c2a20395b0c160b4c8d3b66d5739dd62c80c4f2e2355a2f8e95f07'
        },
        {
            title: 'Burn 18',
            link: 'https://bscscan.com/tx/0x6638397d5a12394af88ce69a55f29716af5b4161dda15af7bc55bae5244e12b3'
        },
        {
            title: 'Burn 19',
            link: 'https://bscscan.com/tx/0x8537cc7186d5f97aa5cdb1373b9d251a0d74ae746ff8a840cff97ce8c2bf260c'
        },
    ]

    const donations = [
        {
            title: selectedLanguage === "EN"
                ? 'Donation 1 (Ukraine donation wallet, for relief efforts.)'
                : 'Doação 1 (carteira de doação da Ucrânia, para esforços de socorro.)',
            link: 'https://bscscan.com/tx/0x22b650eeb68639a71383cfb19aee9c268b7dd5d9cb7e8232776600359c0daf43'
        },
        {
            title: selectedLanguage === "EN"
                ? 'Donation 2 (Unchain Fund Donation Wallet)'
                : 'Doação 2 (carteira de doação Unchain Fund)',
            link: 'https://bscscan.com/tx/0xc4ec053a1f14fad8a754285605ffd60b9142eb4e201ebe3309cee9beea918858'
        },
        {
            title: selectedLanguage === "EN"
                ? 'Donation 3 (@BinanceBCF Turkey&Syria earthquake)'
                : 'Doação 3 (@BinanceBCF terremoto Turquia&Síria)',
            link: 'https://bscscan.com/tx/0x7e240c78ba26d2ecc8d0d7f60adb814246fe219f040efc8b2e94ffb3fd8baab3'
        },
        {
            title: selectedLanguage === "EN"
                ? 'Donation 4'
                : 'Doação 4',
            link: 'https://bscscan.com/tx/0x492a996c9e0b1974ddc9402b0ffd9bb6c867677d09338caf1310bd1fc8b2a6ca'
        },
        {
            title: selectedLanguage === "EN"
                ? 'Donation 5'
                : 'Doação 5',
            link: 'https://bscscan.com/tx/0x8537cc7186d5f97aa5cdb1373b9d251a0d74ae746ff8a840cff97ce8c2bf260c'
        },
    ]
    return (
        <section id="about" className="about-area pt-130 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
                            <img src={"/img/svg/burnDonation.jpg"} alt="" />
                            <img
                                src={"/img/images/about_img02.png"}
                                alt=""
                                className="img-two"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-title mb-30">
                                <span className="sub-title"
                                    style={{
                                        fontSize: '30px',
                                        textAlign: 'center'
                                    }}>
                                    {
                                        selectedLanguage === "EN"
                                            ? "Burn And Donation"
                                            : "Queima e Doação"
                                    }
                                </span>
                                <hr />
                                {
                                    selectedLanguage === "EN"
                                        ? <h2 className="title">Dear <span>#BNBTIGER</span> Army : </h2>
                                        : <h2 className="title">Caro  Exército <span>#BNBTIGER</span> : </h2>
                                }


                                {
                                    selectedLanguage === "EN"
                                        ?
                                        <h4 style={{
                                            textAlign: 'center'
                                        }}>
                                            We have completed <br />
                                            <span style={{ color: '#00C4F4' }}>{burns.length}</span> burns <br />
                                            and <br />
                                            <span style={{ color: '#00C4F4' }}>{donations.length}</span> donations so far.
                                        </h4>
                                        : 
                                        <h4 style={{
                                            textAlign: 'center'
                                        }}>
                                            Concluímos <br />
                                            <span style={{ color: '#00C4F4' }}>{burns.length}</span> queimas <br />
                                            E <br />
                                            <span style={{ color: '#00C4F4' }}>{donations.length}</span> doações até agora.
                                        </h4>
                                }

                            </div>
                            <hr />

                            <h4 className="title">
                                {
                                    selectedLanguage === "EN" ? "Burn" : "Queimaduras"
                                }</h4>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}>
                                {
                                    burns.map((burn, index) => {
                                        return (
                                            <div key={burn.title} style={{ padding: '10px' }}>
                                                <Link href={burn.link}>
                                                    {
                                                        selectedLanguage === "EN" ? "Burn" : "Queima"
                                                    } {index + 1}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <hr />
                            <h4 className="title">
                                {
                                    selectedLanguage === "EN" ? "Donations" : "Doações"
                                }
                            </h4>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                            }}>
                                {
                                    donations.map((donation, index) => {
                                        return (
                                            <div key={donation.title} style={{ padding: '10px' }}>
                                                <Link href={donation.link}>
                                                    {donation.title}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <br />
                            <Fierce />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
