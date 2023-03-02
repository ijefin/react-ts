import "./MyForm.css"

export const MyForm = () => {
  return (
    <>
      {/* <form>
        <h1>Working with Forms!</h1>
        <div className="form-component">
          <label htmlFor="name">Name: </label>
          <input placeholder="Your name here" type="text" id="name" />
        </div>
        <input type="submit" value={"Send"} />
      </form> */}

      <form >
        <label>
          <span>Email:</span>
          <input type="email" />
          <span>Password:</span>
          <input type="password" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};
