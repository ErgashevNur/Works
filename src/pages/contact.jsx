const Contact = () => {
  return (
    <div>
      <div className="container contact">
        <form action="action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="tashkent">Tashkent</option>
            <option value="reghana">Ferghana</option>
            <option value="andijan">Andijan</option>
            <option value="bukxara">Bukxara</option>
          </select>

          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>

          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
