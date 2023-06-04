export default function Contact() {
    return <div className="contact-wrapper">
        <h1>Contact us</h1>
        <h5>We are here to help you with any questions or concerns you may have about our recipe site. We would love to hear from you! If you have questions about our recipes, need help finding something specific, or would like to provide feedback, please reach out using the form below. We look forward to hearing from you!</h5>

        <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="email" placeholder="example@mail.com" />
            <textarea rows="16"></textarea>
            <input type="submit" className="btn deep-purple accent-2" />
        </form>
    </div>
}