function contactDetails(){
    return(
        <div id= "contact" >
        <h2  id= "contact">Contact Us</h2>
        <form id= "contact">
          <div >
            <label htmlFor="name" >
              Name:
            </label>
            <input
              type="text"
              id="contact"
              name="name"
              placeholder="Enter your name"
              required
              
              
            />
          </div>
          <div >
            <label htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="contact"
              name="email"
              placeholder="Enter your email"
              required
              
            />
          </div>
          <button type="submit"id= "contact" >
            Submit
          </button>
        </form>
    </div>
    )
}
export default contactDetails;