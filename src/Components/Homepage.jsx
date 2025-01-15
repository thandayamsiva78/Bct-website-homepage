import { useState } from "react";

function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const [cards, setCards] = useState([
        { logo: "volunteer_image(2).jpg", heading: "VOLUNTEER", linkImage: "donate-volounteer.png", paragraph: "Support us with your time and skills in an activity of your choosing." },
        { logo: "donate.jpg", heading: "DONATE", linkImage: "donateToBct.png", paragraph: "Make a general donation, honor your loved ones or  for a cause you care about." },
        { logo: "teacher.jpg", heading: "SUPPORT A TEACHER", linkImage: "donate-teacher.png", paragraph: "Support teachers for academic rural training in a subject of your choice." },
        { logo: "student.jpg", heading: "SUPPORT A STUDENT", linkImage: "donate-student.png", paragraph: "Sponsor a child from a rural background to complete their second." },
        { logo: "gift.jpg", heading: "GIFT A  SMILE", linkImage: "gifasmaile.png", paragraph: "Support us with your time and skills in an activity of your choosing.." },
        { logo: "bankImage.jpg", heading: "ONLINE TRANSFER IN INR", linkImage: "banktransfer.png", paragraph: "Make an Online Transfer in INR to BCT Account Click for Bank Details." },
        { logo: "global_giving.png", heading: "GLOBALGIVING", linkImage: "globalgiving.png ", paragraph: "Make a donation in USD using our partner GlobalGiving.." },
    ])

    return (
        <>
            <section id="homepage">
                <header className="header fixed w-full top-0 bg-custome_green text-white px-4 py-1">
                    <nav className="flex gap-4 justify-between items-center h-14">
                        <img src="bct_logo.png" width="100" alt="bct_logo" />
                        <ul className="hidden lg:flex gap-4 items-center font-extralight  cursor-pointer">
                            <li className="hover:bg-custome_lightGreen p-2"><a href="#">Home</a></li>
                            <li className="drop-down relative hover:bg-custome_lightGreen p-2">About Us
                                <ul className="drop-down-list absolute left-0 bg-custome_green mt-4">
                                    <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Legacy</a></li>
                                    <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Time Line</a></li>
                                    <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">The Team</a></li>
                                </ul>
                            </li>
                            <li className="drop-down relative hover:bg-custome_lightGreen p-2"><a href="#">Thrust Areas</a>
                                <ul className="drop-down-list absolute left-0 bg-custome_green mt-4">
                                    <li className="second-menu hover:bg-custome_lightGreen px-4 py-2">Education
                                        <ul className="second-list absolute top-0 ml-[183px] mt-0 bg-custome_green">
                                            <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Residential High School</a></li>
                                            <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Tribal Primary Education</a></li>
                                        </ul>
                                    </li>
                                    <li className="second-menu hover:bg-custome_lightGreen px-4 py-2">
                                    Skill Developement
                                    <ul className="second-list absolute top-10 ml-[183px] bg-custome_green">
                                            <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">ITI</a></li>
                                            <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">SMART Centers</a></li>
                                        </ul>
                                    </li>
                                    <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Rehab of PWSDs</a></li>
                                    <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Agriculture</a></li>
                                    <li className="hover:bg-custome_lightGreen px-4 py-2"><a href="#">Community Organization</a></li>
                                </ul>
                            </li>
                            <li className="hover:bg-custome_lightGreen p-2"><a href="#">Careers</a></li>
                            <li className="hover:bg-custome_lightGreen p-2"><a href="#">Contact Us</a></li>
                            <li className="hover:bg-custome_lightGreen p-2"><a href="#">Blog</a></li>
                            <li className="bg-custome_red p-3 hover:bg-red-600"><a href="#">Support</a></li>
                        </ul>
                        <button
                            className="lg:hidden"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {!isMenuOpen && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </nav>

                    {isMenuOpen && (
                        <>
                            {/* Close Button */}
                            <button
                                className="absolute top-5 right-4 hover:border"
                                onClick={toggleMenu}
                                aria-label="Close Menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Mobile Menu */}
                            <ul className="absolute bg-custome_green font-bold left-0 w-full pb-4 flex flex-col text-center cursor-pointer">
                                <li onClick={toggleMenu} className="w-full p-3 hover:bg-custome_lightGreen">Home</li>
                                <li onClick={toggleMenu} className="w-full p-3 hover:bg-custome_lightGreen">About Us</li>
                                <li onClick={toggleMenu} className="w-full p-3 hover:bg-custome_lightGreen">Thrust Areas</li>
                                <li onClick={toggleMenu} className="w-full p-3 hover:bg-custome_lightGreen">Careers</li>
                                <li onClick={toggleMenu} className="w-full p-3 hover:bg-custome_lightGreen">Contact Us</li>
                                <li onClick={toggleMenu} className="w-full p-3 hover:bg-custome_lightGreen">Blog</li>
                                <li
                                    onClick={toggleMenu}
                                    className="bg-custome_red p-4 hover:bg-red-600 w-full text-center"
                                >
                                    Support
                                </li>
                            </ul>
                        </>
                    )}
                </header>
                <section className="home-content">
                    <section className="mt-24">
                        <h1 className="support text-red-500 font-bold text-center font-serif mt-4">SUPPORT</h1>
                        <i className="support-text text-gray-600 font-serif text-center flex flex-wrap p-4">Thank you for sparing your time to browse through our various activities and projects. We welcome you to come and see our activities personally and give your service to whatever activity is close to your heart. If you have no time to spare, you are welcome to be with us in supporting us financially, in whatever measure you can.  We have 50% tax exemption facility under section 80G (5) (vi) of the Income Tax Act.

                            Now we can receive donations through international cards. Please click on the image link to take you to international payment gateway. Thank you for your continued patronage.</i>
                    </section>
                    <section className="flex justify-center items-center flex-col gap-2">
                        <img src="LS20250114110810.png" width="150" height="150" alt="world_image" />
                        <h1 className="font-bold ">Make a Donation in USD using US Cards</h1>
                        <a className="cursor-pointer" href="#">
                            <img src="intl.Donations.png" width="200" height="10" alt="" />
                        </a>

                    </section>

                    <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3 mt-10">
                        {cards.map((item) => (
                            <div key={item.id} className="w-full bg-white shadow-lg hover:shadow-xl hover:border-b-2 hover:border-b-green-600 rounded-lg">
                                <img
                                    className="object-cover w-full h-48 rounded-t-lg"
                                    src={item.logo}
                                    alt={item.heading}
                                />
                                <h1 className="font-bold text-lg p-4">{item.heading}</h1>
                                <p className="text-gray-600 px-4 pt-0">{item.paragraph}</p>
                                <a className="flex justify-center m-3" href="#">
                                    <img
                                        className="w-60 h-10 px-2 mb-2 hover:border-green-600 border"
                                        src={item.linkImage}
                                        alt={item.heading}
                                    /></a>
                            </div>
                        ))}
                    </article>
                </section>

            </section>
        </>
    );
}

export default HomePage;

