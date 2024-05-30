import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again." });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    //now when we create this token , we passed the user._id to that created token and after generated the token , there is object called {id} , you can see these all stated thing in userController,js, so when we decode it  we will get that id.
    //now set that id in

    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleware;

/* import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized. Login Again." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleware;
 */
