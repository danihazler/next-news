import styles from './index.module.css';

const Contact = () => {
    return (
        <div className='page-container'>
            <main className='main'>
                <p className={styles.description}>
                    Testing how Netlify collects data.
                </p>

                <form name="contact" action="/success" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact"/>
                    <p>
                        <label htmlFor="firstname">First Name: <input type="text" name="firstname" id="firstname" /></label>   
                    </p>
                    <p>
                        <label htmlFor="lastname">Last Name: <input type="text" name="lastname" id="lastname"/></label>   
                    </p>
                    <p>
                        <label htmlFor="email">Your Email: <input type="email" name="email" id="email" /></label>
                    </p>
                    <p>
                        <label htmlFor="people">How many people: 
                        <select name="people" id="people">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="termsandconditions">Agree with T&amp;C: <input required type="checkbox" name="termsandconditions" id="termsandconditions"/></label>
                    </p>
                    <p>
                        <label htmlFor="oktobecontacted">Agree to be contacted: <input required type="checkbox" name="oktobecontacted" id="oktobecontacted"/></label>
                    </p>
                    <p>
                        <button type="submit">Sign up</button>
                    </p>
                </form>
            </main>
        </div>
    );
};

export default Contact;