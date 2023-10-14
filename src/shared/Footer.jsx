import logo from "../assets/logo.png"
import fbImg from "../assets/face.png"
import instaImg from "../assets/insta.png"
import twiImg from "../assets/twi.png"
import linkImg from "../assets/link.png"

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2x1 mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary'>
                    <img src={logo} alt="" className='w-10 inline-block items-center'/> <span className="text-white">XYZ</span>
                </a>
                <p className="md:w-1/2">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
                <div>
                    <input type="email" name="email" id="email" placeholder="Your email" className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"/>
                    <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
                </div>
                </div>
                {/* Itens de navegação*/}
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between items-start">
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Platform</h4>
                        <ul className="space-y-3">
                            <a href="" className="block hover:text-gray-300">Overview</a>
                            <a href="" className="block hover:text-gray-300">Features</a>
                            <a href="" className="block hover:text-gray-300">About</a>
                            <a href="" className="block hover:text-gray-300">Pricing</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Help</h4>
                        <ul className="space-y-3">
                            <a href="" className="block hover:text-gray-300">How does it works?</a>
                            <a href="" className="block hover:text-gray-300">Where to ask question?</a>
                            <a href="" className="block hover:text-gray-300">How to play?</a>
                            <a href="" className="block hover:text-gray-300">What is needed for this?</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contacts</h4>
                        <ul className="space-y-3">
                            <p className="hover:text-gray-300">(012) 1234-567-890</p>
                            <p className="hover:text-gray-300">123 xyz xyz</p>
                            <p className="hover:text-gray-300">qwuerybaihefv, qiwu - hrebcl</p>
                            <p className="hover:text-gray-300">095467</p>
                        </ul>
                    </div>
                </div>
            </div>
            
            <hr />
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
            <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
            <div className="flex items-center space-x-5">
                <img src={fbImg} alt=""  className="w-8" cursor-pointer  transition-all duration-300/>
                <img src={instaImg} alt=""  className="w-8" cursor-pointer  transition-all duration-300/>
                <img src={twiImg} alt=""  className="w-8" cursor-pointer  transition-all duration-300/>
                <img src={linkImg} alt=""  className="w-8" cursor-pointer  transition-all duration-300/>
            </div>
            </div>
        </div>
    );
};

export default Footer;