import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className="text-2xl border-t pt-8 text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="contact-us" className="w-full md:max-w-[480px]"/>
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="text-xl font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-600">18, William Station <br /> Suite 350, Washington, USA</p>
          <p className="text-gray-600">Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p className="text-xl font-semibold text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact