



function Footer() {

    return (
        <>
            <section className="footer  flex-wrap h-64 font-medium text-white bg-custome_green mt-16">
                <div className="flex justify-between">
                    <div className="flex justify-between p-4 pt-12 gap-10">
                        <ul>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Home</a></li>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Press</a></li>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Lolunteer</a></li>
                        </ul>
                        <ul>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Newsletter</a></li>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Gallary</a></li>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Timeline</a></li>
                        </ul>
                        <ul>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Stories of Change</a></li>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">Careers</a></li>
                            <li><a className="hover:text-blue-800 hover:underline" href="#">F.A.Q</a></li>
                        </ul>

                    </div>
                    <div className="pt-12">
                        <img src="bct_logo.png" width="150" height="150" alt="bct_logo" />
                    </div>
                </div>
                <div className="flex gap-4 px-4">
                    <a className="hover:bg-green-300 p-1" href="#"><img src="face-book.png" width="30" alt="face-book" /></a>
                    <a className="hover:bg-green-300 p-1" href="#"><img src="instagram (1).png" width="30" alt="instagram (1)" /></a>
                    <a className="hover:bg-green-300 p-1" href="#"><img src="twitter.png" width="30" alt="twitter" /></a>
                    <a className="hover:bg-green-300 p-1" href="#"><img src="linkedin (1).png" width="30"  alt="linkedin (1)" /></a>
                </div>
            </section>
        </>
    )
}

export default Footer;