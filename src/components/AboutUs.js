import React from 'react';
import Accordion from './accordion';


export default function AboutUs(props) {

    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? '#e5e7eb' : '#1f2937',
        borderColor: props.mode === 'light' ? '#1f2937' : '#e5e7eb'
    }

    return (
        <div className="py-20 sm:p-20">
            <div className='w-[90%] sm:w-[60%] mx-auto p-5 rounded-2xl border border-black' style={myStyle}>
                <h1 className='text-4xl my-10 font-bold'>About Us</h1>
                <div id="aboutUs" className='space-y-1 text-black'>
                    <Accordion title="What is Textutils" content="Introducing TextUtils: Your Comprehensive Word and Character Counting Utility. 
                    TextUtils is a versatile and powerful tool designed to assist you in efficiently managing and manipulating your text according to your preferences. This robust utility serves as both a word counter and a character counting tool, providing you with essential insights into the composition of your text." styles={myStyle} />
                    <Accordion title="Features of Textutils" content="
                        Introducing TextUtils: Your Comprehensive Word and Character Counting Utility
                        
                        TextUtils is a versatile and powerful tool designed to assist you in efficiently managing and manipulating your text according to your preferences. This robust utility serves as both a word counter and a character counting tool, providing you with essential insights into the composition of your text.

                        With TextUtils, you can effortlessly perform a variety of text operations to refine your content. Some of its key features include:

                        Word Counting: Easily determine the number of words present in your text, allowing you to gauge the length and complexity of your content at a glance.

                        Character Counting: Precisely analyze the total number of characters in your text, inclusive of spaces and punctuation, enabling you to optimize your content for specific character limits.

                        Removing Extra Spaces: Say goodbye to cluttered and inconsistent text! TextUtils allows you to effortlessly eliminate excessive spaces, streamlining your content for a clean and professional appearance.

                        Text Manipulation: Seamlessly manipulate your text in various ways, such as formatting or removing specific elements, tailoring it to your specific needs and preferences.

                        Text Case Conversion: Transform your text effortlessly between uppercase and lowercase formats with just a simple click. This handy feature allows you to adapt your text to match specific conventions or stylistic preferences.

                        Copy Manipulated Text: Save time and effort by conveniently copying the modified text directly from TextUtils. Whether you've removed spaces or altered the case, the tool ensures that your refined text is easily accessible for further use." styles={myStyle} />
                    <Accordion title="Our Contact Info" content="You can contact Us at email ramanjotsingh8574@gmail.com" styles={myStyle} />
                    <Accordion title="Team of Textutils" content="For Now There is only a single person in our team thats why our app is not built on a large scale. But we hopw to grow this app in future. This app is built by Ramanjot Singh " styles={myStyle} />
                </div>
            </div>
        </div>
    );
}
