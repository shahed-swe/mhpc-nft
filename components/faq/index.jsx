import { useEffect } from "react";

const FAQ = () => {
    let accordionBtns={}
    useEffect(() => {
        accordionBtns = window.document.querySelectorAll(".accordion");

        accordionBtns.forEach((accordion) => {
            accordion.onclick = function () {
                this.classList.toggle("is-open");

                let content = this.nextElementSibling;
                console.log(content);

                if (content.style.maxHeight) {
                    //this is if the accordion is open
                    content.style.maxHeight = null;
                } else {
                    //if the accordion is currently closed
                    content.style.maxHeight = content.scrollHeight + "px";
                    console.log(content.style.maxHeight);
                }
            };
        });
    })
    




    return (
        <div className="faq-section">
            <div className="faq-header">
                <p>FREQUENTLY ASKED QUESTION</p>
            </div>
            <div className="faq-inner">
                {new Array(5).fill().map((_, index) => {
                    return (
                        <div key={index}>
                            <button className="accordion">Lorem Ipsum is simply dummy text of the printing</button>
                            <div className="accordion-content">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <div className="faq-last-section"></div>
        </div>
    )
}

export default FAQ