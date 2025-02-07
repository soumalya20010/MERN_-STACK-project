import cookie from "cookie";
const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log("Received username:", username);
    console.log("Received password:", password);

    // Debugging: Log the expected username and password from environment variables
    console.log("Expected username:", process.env.ADMIN_USERNAME);
    console.log("Expected password:", process.env.ADMIN_PASSWORD);

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Successful");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;