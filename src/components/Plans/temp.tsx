import React from 'react'
import Heading from '../ui/Heading/Heading'
import SubHeading from '../ui/SubHeading/SubHeading'
import Description from '../ui/Description/Description'
import Button from '../ui/Button/Button'

const ContactForm = () => {
    return (
        <div className='flex justify-center items-center  pb-[50px]'
        >
            <section className='min-h-[50rem]  w-full pt-[15%] sm:pt-[8%] '>
                <div className='w-[100%] h-full  lg:gap-x-8 p-2 md:p-5'>
                    <div className='px-[5%] text-black flex flex-col gap-y-8 h-full '>
                        <div className='flex flex-col gap-y-2'>
                            <Heading name="Contact Form" />
                            <SubHeading name="Contact Us."  />
                            <Description name="Fill out the form below to schedule your free consultation and discover how Voltie can transform your EV charging experience. Join us in driving change while earning rewards for your commitment to a sustainable future."
                                
                            />

                            <section className="bg-[#f5f5f5] shadow-lg">
                                <form action="#" className="flex flex-col gap-y-4 p-8">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@test.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Message</label>
                                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <Button name='Send' bgColor='black'/>
                                </form>
                            </section>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactForm